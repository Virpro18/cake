import Navbar from "./Navbar"
import UserProfile from "./UserProfile"

const Header = () => {
    return (
        <header className="flex items-center justify-evenly px-3 py-2 gap-4">
            <h1>Felicia</h1>
            <Navbar />
            <UserProfile />
        </header>
    )
}

export default Header