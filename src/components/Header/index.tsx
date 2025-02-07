import Link from "next/link"
import Navbar from "./Navbar"
import UserProfile from "./UserProfile"
import Mobile from "./Mobile"
import { supabase } from "@/libs/supabase/client"
import { useEffect, useState } from "react"
import { User } from "@supabase/supabase-js"

const Header = () => {
    const [user,setUser]=useState<User | null>()
    useEffect(() => {
        const checkUser = async () => {
            const { data } = await supabase.auth.getUser()
            console.log("/home/arona/bansaka/src/components/Header/index.tsx: ")
            setUser(data.user)
        }
        checkUser()
    }, [])
    return (
        <>
            <div className="h-28 w-full">
                <header className=" fixed w-full flex items-center justify-around px-3 py-2 gap-4 border-b bg-white top-0 border-gray-200 z-40">
                    <h1 className="md:block hidden"><Link href={"/"}>Felicia</Link></h1>
                    <Navbar />
                    <UserProfile />
                    <Mobile data={user?.user_metadata}/>
                </header>
            </div>
        </>
    )
}

export default Header