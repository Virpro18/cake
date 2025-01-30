"use client"

import { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";
import ProfileCard from './ProfileCard';
import ProfileImage from './ProfileImage';


const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="hidden items-center gap-2  mr-4 hover:cursor-pointer relative md:flex " onClick={() => setIsOpen(!isOpen)}>
            <ProfileImage />
            <IoMdArrowDropdown className={`scale-110 transition-all ${isOpen ? "rotate-180" : "-rotate-0"}`} />
            {isOpen && <ProfileCard />}
        </div>
    );
};

export default UserProfile;