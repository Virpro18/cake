import Image from 'next/image';
import iceCreamCake from "@/assets/ice-cream-cake.jpg";
import git from "@/assets/github-mark.png"

const login = () => {
    return (
        <>
            <div className="w-screen h-screen flex md:justify-end items-center justify-center z-10 relative">
                <div className='bg-white p-8 shadow-lg text-center md:w-1/3 w-3/4 md:h-full h-fit rounded md:rounded-none flex items-center flex-col gap-4 justify-center border-x-gray-400 border'>
                    <h1 className="text-3xl font-bold mb-6 text-blue-600">
                        Login
                    </h1>
                    <div className='w-full flex'>
                        <div className='flex flex-col w-full items-center'>
                            <label htmlFor="username" className="mb-2 font-semibold text-gray-700">Username or Email</label>
                            <input type="text" id="username" placeholder="Enter your username or email" className='border border-gray-300 rounded md:w-2/3 w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                            <label htmlFor="password" className="mb-2 font-semibold text-gray-700">Password</label>
                            <input type="password" id="password" placeholder="Enter your password" className='border border-gray-300 rounded md:w-2/3 w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                            <button className='bg-blue-500 p-3 rounded font-bold text-white w-2/3 hover:bg-blue-600 transition duration-300'>Login</button>
                        </div>
                    </div>
                    <div className='flex'>
                        <div>
                            <Image src={git} alt="error"></Image>
                        </div>
                    </div>
                </div>
                <Image
                    src={iceCreamCake}
                    alt="Ice Cream Cake"
                    layout="fill"
                    objectFit="cover"
                    className="md:blur-md blur-none md:h-screen w-screen absolute z-[-1]"
                />
            </div>
        </>
    )
}

export default login
