import Link from "next/link"

const Navigation = () => {
    return (
        <nav className="p-1 mr-4">
            <h1 className="font-bold text-2xl">Akun</h1>
            <ul className="space-y-2">
                <div className="border-neutral-200 border-t-[2px] my-3 w-full"></div>
                <li className="w-full p-2 rounded-md">
                    <Link href={"/account/profile"} className="block w-full h-full">Akun</Link>
                </li>
                <li className="w-full hover:bg-neutral-100 p-2 rounded-md">
                    <Link href={"/account/orders"} className="block w-full h-full">Transaksi</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation