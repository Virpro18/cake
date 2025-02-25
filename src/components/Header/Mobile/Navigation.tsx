import { useDataStore } from "@/libs/zutstand/store";
import Link from "next/link";
import ProfileImage from "../UserProfile/ProfileImage";
import { Dispatch, SetStateAction } from "react";
import { supabase } from "@/libs/supabase/client";

interface props {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
const Navigation = ({ setIsOpen }: props) => {
  const { data } = useDataStore();
  async function signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) console.log(error);
    window.location.reload()
  }
  // console.log(data)
  return (
    <div className="fixed inset-0 flex items-center justify-center md:hidden bg-black bg-opacity-70" onClick={() => setIsOpen(false)}>
      <div className="flex flex-col gap-2 w-[90%] p-4 bg-white z-50" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-2 ">
          <ProfileImage user={data?.user_metadata} size={40} />
          <div className="">
            <h1 className="text-lg font-bold">{data?.user_metadata?.full_name}</h1>
            <p className="text-xs text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis w-48">{data?.user_metadata?.email}</p>
          </div>
        </div>
        <div className="border border-gray-500 w-full"></div>
        <div className=" p-2 flex flex-col gap-2">
          <Link href={"/account/profile"} className="hover:bg-gray-200 transition-colors p-2 rounded">Akun</Link>
          <Link href={"https://cake-hazel.vercel.app"} className="hover:bg-gray-200 transition-colors p-2 rounded">Transaksi</Link>
          <Link href={"https://cake-hazel.vercel.app"} className="hover:bg-gray-200 transition-colors p-2 rounded">something</Link>
          <div className="border border-gray"></div>
          <p onClick={signOut} className="cursor-pointer hover:bg-gray-200 transition-colors p-2 rounded text-red-600 font-semibold ">Log Out</p>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
