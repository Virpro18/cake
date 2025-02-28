'use client'

import FlyingCard from "@/components/FlyingCard";
import { supabase } from "@/libs/supabase/client";
import { useState } from "react";
import { FaPencil } from "react-icons/fa6";

interface Props {
    username: string;
    id: string | undefined;
}

const UsernameChanger = ({ username, id }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [error, setError] = useState(false);
    const [newUsername, setNewUsername] = useState(username);

    const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const updatedUsername = formData.get("username") as string;

        if (!updatedUsername.trim() || updatedUsername.trim() === username) {
            setError(true);
            return;
        }

        await supabase.from("profiles").update({ username: updatedUsername.trim() }).eq("user_id", id);
        setNewUsername(updatedUsername.trim());
        setIsOpen(false);
    };

    return (
        <>
            <div className="w-full">
                <label htmlFor="username" className="text-gray-500 font-semibold">Username</label>
                <div className="flex gap-8 w-full justify-between">
                    <p id="username" className="font-bold">{newUsername}</p>
                    <FaPencil className="cursor-pointer" onClick={() => setIsOpen(true)} />
                </div>
            </div>
            <FlyingCard isOpen={isOpen} setOpenFC={setIsOpen} className="w-full flex item-center justify-center">
                <form onSubmit={handleSave} className="bg-white p-4 rounded-md flex flex-col md:w-1/3 w-4/5 gap-4">
                    <header className="w-full text-center p-2 mb-4">
                        <h2 className="font-bold text-lg">Change Username</h2>
                    </header>
                    <input
                        type="text"
                        name="username"
                        className="border border-gray-300 p-1"
                        defaultValue={username}
                        onChange={(e) => setError(e.target.value.trim() === "" || e.target.value.trim() === username)}
                    />
                    <button 
                        type="submit" 
                        className={`p-1 rounded ${error ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-500 text-white'}`} 
                        disabled={error}
                    >
                        Save
                    </button>
                </form>
            </FlyingCard>
        </>
    );
};

export default UsernameChanger;
