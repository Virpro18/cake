'use client'

import { IoIosArrowDropleftCircle } from "react-icons/io"
import { useRouter } from 'next/navigation'

const Back = () => {
    const router = useRouter();

    const handleClick = () => {
        router.back();
    }

    return (
        <div className="mt-3 ml-8 w-fit p-3 cursor-pointer" onClick={handleClick}>
            <IoIosArrowDropleftCircle className='w-full h-full scale-150' />
        </div>
    )
}
export default Back