'use client'

import Link from "next/link"
import Navbar from "./Navbar"
import UserProfile from "./UserProfile"
import Mobile from "./Mobile"
import { useEffect, useState } from "react"
import { User } from "@supabase/supabase-js"
import { usePathname } from 'next/navigation';
import { useDataStore } from "@/libs/zutstand/store"


const Header = () => {
    const [user, setUser] = useState<User | null>()
    const { data, setData } = useDataStore()

    const path = usePathname()
    useEffect(() => {
        if (!data) {
            setData()
        }
        setUser(data)
    }, [data, setData])
    if (path.startsWith("/account")) return (<></>)
    return (

        <>
            <div className="h-28 w-full">
                <header className=" fixed w-full flex items-center justify-around px-3 py-1 gap-4 border-b bg-white top-0 border-gray-200 z-40">
                    <h1 className="md:block hidden"><Link href={"/"}>Felicia</Link></h1>
                    <Navbar />
                    <UserProfile />
                    <Mobile data={user?.user_metadata} />
                </header>
            </div>
        </>
    )
}

export default Header