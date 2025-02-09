"use client"

import { useEffect, useState, useRef } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import ProfileCard from './ProfileCard';
import ProfileImage from './ProfileImage';
import { supabase } from '@/libs/supabase/client';
import { User } from '@supabase/supabase-js';

const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState<User | null>(null);
    const profileRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkUser = async () => {
            const { data } = await supabase.auth.getUser();
            setUser(data.user);
        };

        checkUser();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={profileRef} className="hidden items-center gap-2 mr-4 hover:cursor-pointer relative md:flex" onClick={() => setIsOpen(!isOpen)}>
            <ProfileImage user={user?.user_metadata} />
            <IoMdArrowDropdown className={`scale-110 transition-all ${isOpen ? "rotate-180" : "-rotate-0"}`} />
            {isOpen && <ProfileCard user={user} />}
        </div>
    );
};

export default UserProfile;
