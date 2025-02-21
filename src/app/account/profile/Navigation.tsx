import Link from "next/link"

const Navigation = () => {
    return (
        <nav className="p-1 mr-4">
            <h1 className="font-bold text-2xl">Akun</h1>
            <ul className="space-y-2">
                <div className="border-neutral-200 border-t-[2px] my-3 w-full"></div>
                <li>
                    <Link href={"/account/profile"}>Akun</Link>
                </li>
                <li>
                    <Link href={"/account/orders"}>Transaksi</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation