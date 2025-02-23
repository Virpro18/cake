'use client'
import { CiCamera } from "react-icons/ci";
import ProfileImage from '@/components/Header/UserProfile/ProfileImage';
import { UserMetadata } from '@supabase/supabase-js';
import React, { useState } from 'react';
import Image from "next/image";

const ProfileImageUploader = (data: UserMetadata | undefined) => {
    const [image, setImage] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImage(file);
            setPreviewUrl(URL.createObjectURL(file));
            console.log("changing")
        }
    };

    return (
        <div className='relative'>
            <div className='absolute w-full h-full opacity-0 hover:opacity-100 bg-black bg-opacity-55 rounded-full transition-all flex items-center justify-center'>
                <input type='file' accept='image/*' className='opacity-0 w-full h-full absolute rounded-full z-10 cursor-pointer' onChange={handleImageChange} />
                <CiCamera className="w-1/2 h-1/2 opacity-70" />
            </div>
            {previewUrl ? (
                <Image src={previewUrl} alt="Preview" className="rounded-full w-36 h-36 object-cover" width={50} height={50} />
            ) : (
                <ProfileImage user={data?.data} size={150} />
            )}
        </div>
    );
}

export default ProfileImageUploader;
