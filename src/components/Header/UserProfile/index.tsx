"use client"

import { useEffect, useState, useRef } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import ProfileCard from './ProfileCard';
import ProfileImage from './ProfileImage';
import { useDataStore } from '@/libs/zutstand/store';

const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);
    const profileRef = useRef<HTMLDivElement>(null);
    const { data } = useDataStore();


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

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div 
            ref={profileRef} 
            className="hidden items-center gap-2 mr-4 cursor-pointer relative md:flex" 
            onClick={toggleDropdown}
        >
            <ProfileImage user={data?.user_metadata} />
            <IoMdArrowDropdown className={`scale-110 transition-all ${isOpen ? "rotate-180" : "rotate-0"}`} />
            {isOpen && <ProfileCard user={data} />}
        </div>
    );
};

export default UserProfile;
