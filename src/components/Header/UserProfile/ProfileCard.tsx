import { supabase } from "@/libs/supabase/client"

import { motion } from "framer-motion"
import Link from "next/link"
import { User } from "@supabase/supabase-js"
import ProfileImage from "./ProfileImage"

interface UserMetadata {
    user_name: string
    full_name: string;
    email: string;
}

const ProfileCard = (data: { user: User | null }) => {
    async function signOut() {
        const { error } = await supabase.auth.signOut()
        if (error) console.log(error);
        window.location.reload()
    }


    const userMetadata = data.user?.user_metadata as UserMetadata | undefined;
    // console.log(userMetadata);

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full mt-2 right-0 bg-white shadow-md p-4 rounded-md w-fit z-10 cursor-default"
        >
            {data.user ? (
                <ul className="space-y-2 flex flex-col gap-0.5">
                    <li className="flex gap-3">
                        <ProfileImage user={userMetadata} />
                        <div>
                            <p className="font-bold">{userMetadata?.user_name}</p>
                            <p className="text-sm text-gray-600">{data.user.email}</p>
                        </div>
                    </li>
                    <div className="border-neutral-200 border-t-[2px] my-3 w-full"></div>
                    <li className="hover:bg-black transition-all hover:bg-opacity-20 rounded">
                        <Link href={"/account/profile"} className="block w-full h-full p-2">Akun</Link>
                    </li>
                    <li className="hover:bg-black transition-all hover:bg-opacity-20 rounded">
                        <Link href={"/account/orders"} className="block w-full h-full p-2">Transaksi</Link>
                    </li>
                    <div className="border-neutral-200 border-t-[2px] my-3 w-full"></div>
                    <li className="hover:bg-black transition-all hover:bg-opacity-20 hover:cursor-pointer rounded text-red-700 font-semibold">
                        <p onClick={signOut} className="block w-full h-full p-2">Log Out</p>
                    </li>
                </ul>
            ) : (
                <div className="flex items-center gap-2">
                    <Link href={"/account/login"} className="bg-blue-400 p-2 px-3 rounded font-bold text-white shadow-sm hover:bg-blue-300 transition-colors">Login</Link>
                    <Link href={"/account/register"} className="bg-green-600 p-2 px-3 rounded font-bold text-white shadow-sm hover:bg-green-400 transition-colors">Register</Link>
                </div>
            )}
        </motion.div>
    )
}

export default ProfileCard
