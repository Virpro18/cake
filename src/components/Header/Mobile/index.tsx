import Link from "next/link";
import ProfileImage from "../UserProfile/ProfileImage";
import { UserMetadata } from "@supabase/supabase-js";
import { memo, useState } from "react";
import Navigation from "./Navigation";

const Mobile = ({ data }: { data: UserMetadata | undefined }) => {
    const [isOpen, setIsOpen] = useState(false);
    console.log(isOpen)

    return (
        <>
            <div className="md:hidden block fixed w-full bottom-0 bg-gray-100 z-50">
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
                    <li onClick={() => setIsOpen(!isOpen)}>
                        <ProfileImage user={data} />
                    </li>
                </ul>
            </div>
            {isOpen && <Navigation />}
        </>
    )
}

export default memo(Mobile);  
