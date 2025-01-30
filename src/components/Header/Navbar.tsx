import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import SearchInput from "./SearchInput"

const Navbar = () => {
    return (
        <div className="flex items-center gap-2 md:w-full">
            <SearchInput />
            <nav className="flex items-center">
                <ul className="flex justify-around items-center gap-3">
                    <li className="font-bold">
                        <Link href="/cart" className="px-2" aria-label="Cart">
                            <CiShoppingCart className="text-2xl" />
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;