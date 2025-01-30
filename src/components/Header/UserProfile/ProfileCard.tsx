import { motion } from "framer-motion"
import Link from "next/link"


const ProfileCard = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="absolute top-full mt-2 right-0 bg-white shadow-md p-4 rounded-md w-48 z-10"
        >
            <ul>
                <li className="hover:bg-black transition-all hover:bg-opacity-30 rounded-t-md"><Link href={"/profile"} >Account</Link></li>
                <div className="border border-black "></div>
                <li><Link href={"#"}>Log Out</Link></li>
            </ul>
        </motion.div>
    )
}

export default ProfileCard