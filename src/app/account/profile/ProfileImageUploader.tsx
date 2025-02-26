'use client'
import { CiCamera } from "react-icons/ci";
import ProfileImage from '@/components/Header/UserProfile/ProfileImage';
import { User } from '@supabase/supabase-js';
import React, { useState, useCallback } from 'react';
import Image from "next/image";
import { supabase } from "@/libs/supabase/client";
import { toast, ToastContainer } from "react-toastify";

interface UserResponse {
    data: {
        user: User
    } | {
        user: null
    }
}

const ProfileImageUploader = ({ data: userData }: UserResponse) => {
    const [image, setImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleImageChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreviewUrl(URL.createObjectURL(file));
        }
        setIsOpen(true)
    }, []);

    const uploadImage = useCallback(async (file: File) => {
        setIsOpen(true);
        const folderPath = `${userData.user?.id}/profile-picture/`;

        try {
            const { data: existingFiles, error: listError } = await supabase
                .storage
                .from('avatars')
                .list(folderPath);

            if (listError) throw listError;

            if (existingFiles && existingFiles.length > 0) {
                const filePaths = existingFiles.map(file => `${folderPath}${file.name}`);
                const { error: deleteError } = await supabase
                    .storage
                    .from('avatars')
                    .remove(filePaths);

                if (deleteError) throw deleteError;
            }

            const fileName = `profile_${Date.now()}.${file.name.split('.').pop()}`;
            const filePath = `${folderPath}${fileName}`;

            const { error: uploadError } = await supabase
                .storage
                .from('avatars')
                .upload(filePath, file, { upsert: true });

            if (uploadError) throw uploadError;

            const { data: publicUrl } = supabase.storage.from('avatars').getPublicUrl(filePath);
            const { error: insertError } = await supabase.from('profiles').update({ profile_images: publicUrl.publicUrl }).eq('user_id', userData.user?.id);
            if (insertError) throw insertError;

            return publicUrl.publicUrl;
        } catch (error) {
            console.error('Error handling image upload:', error);
            return null;
        } finally {
            setIsOpen(false);
        }
    }, [userData.user?.id]);

    return (
        <>
            <ToastContainer />
            <div className="flex flex-col">
                <div className='relative'>
                    <div className='absolute w-full h-full opacity-0 hover:opacity-100 bg-black bg-opacity-55 rounded-full transition-all flex items-center justify-center'>
                        <input type='file' accept='image/*' className='opacity-0 w-full h-full absolute rounded-full z-10 cursor-pointer' onChange={handleImageChange} />
                        <CiCamera className="w-1/2 h-1/2 opacity-70 text-white" />
                    </div>
                    {previewUrl ? (
                        <Image src={previewUrl} alt="Preview" className="rounded-full object-cover" width={150} height={150} />
                    ) : (
                        <ProfileImage user={userData.user?.user_metadata} size={150} />
                    )}
                </div>
                {image && isOpen && (
                    <button
                        className='bg-primary-500 text-black rounded-md p-1 mt-2'
                        onClick={() => {
                            uploadImage(image).then(url => url && console.log('Profile picture updated:'))
                            return toast.promise(uploadImage(image), {
                                pending: 'Uploading image...',
                                success: 'Profile picture updated!',
                                error: 'Error uploading image',
                            });
                        }}
                    >
                        Upload
                    </button>
                )}
            </div>
        </>
    );
}

export default ProfileImageUploader;
