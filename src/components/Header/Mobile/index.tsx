import Link from "next/link";
import ProfileImage from "../UserProfile/ProfileImage";

const Mobile = () => (
    <div className="md:hidden block fixed w-full bottom-0 bg-gray-100">
        <ul className="flex justify-around items-center w-full p-2">
            <li>
                <Link href={"/"}>Home</Link>
            </li>
            <li>
                <Link href={"/"}>Shop</Link>
            </li>
            <li>
                <Link href={"/"}>About</Link>
            </li>
            <li>
                <Link href={"/account/profile"}><ProfileImage /></Link>
            </li>
        </ul>

    </div>
)

export default Mobile;  
