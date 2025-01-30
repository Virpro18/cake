"use client"

import { IoIosSearch } from "react-icons/io";
import { useState } from "react";

const SearchInput = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        // Implement your search logic here
        console.log("Searching for:", searchTerm);
    };

    return (
        <div className="w-full relative h-fit">
            <div className="relative w-full">
                <IoIosSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:cursor-pointer scale-125" />
                <input
                    type="text"
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            handleSearch();
                        }
                    }}
                    className="border border-gray-300 rounded-md pl-10 pr-4 py-2 w-full text-lg"
                />
            </div>
        </div>
    );
}

export default SearchInput;