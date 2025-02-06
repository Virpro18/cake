import { supabase } from "@/libs/supabase/client"
import { motion } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"
import { User } from "@supabase/supabase-js"

const ProfileCard = () => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const checkUser = async () => {
            const { data } = await supabase.auth.getUser()

            setUser(data.user)
            setLoading(false)
        }

        checkUser()
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full mt-2 right-0 bg-white shadow-md p-4 rounded-md w-48 z-10"
        >
            {loading ? (
                <div className="flex justify-center items-center">
                    <div className="loader"></div> {/* You can replace this with any loading spinner or message */}
                </div>
            ) : user ? (
                <ul>
                    <li className="hover:bg-black transition-all hover:bg-opacity-30 rounded-t-md"><Link href={"/profile"} >Account</Link></li>
                    <div className="border border-black "></div>
                    <li><Link href={"#"}>Log Out</Link></li>
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