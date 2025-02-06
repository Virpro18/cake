import Image from 'next/image';
import iceCreamCake from '@/assets/easter-carrot-cake-with-frosting-blue-background.jpg';

const register = () => {
    return (
        <>
            <div className="w-screen h-screen flex md:justify-end items-center justify-center z-10 relative">
                <div className='bg-white p-8 shadow-lg text-center md:w-1/3 w-3/4 md:h-full h-max rounded md:rounded-none flex items-center flex-col gap-4 justify-center border-x-gray-400 border'>
                    <h1 className="text-3xl font-bold mb-6 text-blue-600">
                        Login
                    </h1>
                    <div className='flex flex-col w-full items-center'>
                        <label htmlFor="username" className="mb-2 font-semibold text-gray-700">Email</label>
                        <input type="text" id="username" placeholder="Enter your username" className='border border-gray-300 rounded md:w-2/3 w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                        <label htmlFor="username" className="mb-2 font-semibold text-gray-700">Username</label>
                        <input type="text" id="username" placeholder="Enter your email" className='border border-gray-300 rounded md:w-2/3 w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                        <label htmlFor="password" className="mb-2 font-semibold text-gray-700">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" className='border border-gray-300 rounded md:w-2/3 w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                        <label htmlFor="password" className="mb-2 font-semibold text-gray-700">Confirm password</label>
                        <input type="password" id="password" placeholder="Enter your password again" className='border border-gray-300 rounded md:w-2/3 w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                        <button className='bg-blue-500 p-3 rounded font-bold text-white w-2/3 hover:bg-blue-600 transition duration-300'>Register</button>
                    </div>
                </div>
                <Image
                    src={iceCreamCake}
                    alt="Ice Cream Cake"
                    layout="fill"
                    objectFit="cover"
                    className="z-[-1] blur-md"
                />
            </div>
        </>
    )
}

export default register