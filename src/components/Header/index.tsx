import Link from "next/link"
import Navbar from "./Navbar"
import UserProfile from "./UserProfile"
import Mobile from "./Mobile"

const Header = () => (
    <header className="flex items-center justify-around px-3 py-2 gap-4">
        <h1 className="md:block hidden"><Link href={"/"}>Felicia</Link></h1>
        <Navbar />
        <UserProfile />
        <Mobile />
    </header>
)

export default Header