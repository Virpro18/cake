import Link from "next/link";
import ProfileImage from "../UserProfile/ProfileImage";

const Mobile = () => (
    <div className="md:hidden block fixed w-full bottom-0">
        <ul className="flex justify-around items-center w-full bg-white p-2">
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href={"/"}>Shop</Link></li>
            <li><Link href={"/"}>About</Link></li>
            <li><Link href={"/"}><ProfileImage /></Link></li>
        </ul>

    </div>
)

export default Mobile;  
