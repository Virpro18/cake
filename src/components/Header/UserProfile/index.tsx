"use client"

import Image from 'next/image';
import { useState } from 'react';
import { IoMdArrowDropdown } from "react-icons/io";


const UserProfile = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="flex items-center gap-2  mr-4 hover:cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <div className="rounded-full overflow-hidden w-10 h-10">
                <Image
                    src="https://images8.alphacoders.com/124/thumb-1920-1243838.jpg"
                    alt="User Profile"
                    width={40} // Sesuaikan dengan ukuran w-12 (12 * 4 = 48px)
                    height={40} // Sesuaikan dengan ukuran h-12 (12 * 4 = 48px)
                    className="object-cover w-full h-full" // Pastikan gambar menutupi area dengan proporsi yang benar
                />
            </div>
            <IoMdArrowDropdown className={`scale-110 transition-all ${isOpen ? "rotate-180" : "-rotate-0"}`} />
        </div>
    );
};

export default UserProfile;