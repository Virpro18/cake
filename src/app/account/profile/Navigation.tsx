'use client'
import Link from "next/link";

const Navigaiton = () => {
    return (
        <div>
        <Link href="/profile">Profile</Link>
        <Link href="/profile/settings">Settings</Link>
        <Link href="/profile/notifications">Notifications</Link>
        </div>
    );
    }
    export default Navigaiton;