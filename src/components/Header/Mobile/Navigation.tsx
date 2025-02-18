import { useDataStore } from "@/libs/zutstand/store";
import Link from "next/link";
import ProfileImage from "../UserProfile/ProfileImage";
import { Dispatch, SetStateAction } from "react";

interface props {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}
const Navigation = ({ setIsOpen }: props) => {
  const { data } = useDataStore();
  console.log(data)
  return (
    <div className="fixed inset-0 flex items-center justify-center md:hidden bg-black bg-opacity-70" onClick={() => setIsOpen(false)}>
      <div className="flex flex-col gap-2 w-3/4 p-4 bg-white z-50" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center gap-2 ">
          <ProfileImage user={data?.user_metadata} size={40} />
          <div className="">
            <h1 className="text-lg font-bold">{data?.user_metadata?.name}</h1>
            <p className="text-xs text-gray-500 whitespace-nowrap overflow-hidden text-ellipsis w-48">{data?.user_metadata?.email}</p>
          </div>
        </div>
        <div className="border border-gray w-full"></div>
        <div className="bg-gray-100 p-2 flex flex-col gap-4">
          <Link href={"https://cake-hazel.vercel.app"}>kimino</Link>
          <Link href={"https://cake-hazel.vercel.app"}>kimino</Link>
          <Link href={"https://cake-hazel.vercel.app"}>kimino</Link>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
