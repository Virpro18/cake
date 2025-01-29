import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
import SearchInput from "./SearchInput"

const Navbar = () => {
    return (
        <div className="flex items-center gap-2 w-1/2">
            <SearchInput />
            <nav className="">
                <ul className="flex justify-around items-center mr-10 gap-3">
                    <li className="font-bold w-full">
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