"use client"

import Image from 'next/image';
import iceCreamCake from '@/assets/easter-carrot-cake-with-frosting-blue-background.jpg';
import Link from 'next/link';
import git from '@/assets/github-mark.png';
import twitter from '@/assets/logo-black.png';
import { supabase } from '@/libs/supabase/client';
import { Provider } from '@supabase/supabase-js';

const register = () => {
    async function signInWithGithub(provider: Provider) {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider,
            options: { redirectTo: '' }
        })
        console.log(error)
        console.log(data)
    }



    return (
        <>
            <div className="w-screen h-screen flex md:justify-end items-center justify-center z-10 relative">
                <div className='bg-white p-8 shadow-lg text-center md:w-1/3 w-3/4 md:h-full h-max rounded md:rounded-none flex items-center flex-col gap-4 justify-center border-x-gray-400 border'>
                    <h1 className="text-3xl font-bold mb-6 text-blue-600">
                        Register
                    </h1>
                    <div className='flex flex-col w-full items-center'>
                        <label htmlFor="email" className="mb-2 font-semibold text-gray-700">Email</label>
                        <input type="email" id="email" placeholder="Enter your email" className='border border-gray-300 rounded md:w-2/3 w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                        <label htmlFor="password" className="mb-2 font-semibold text-gray-700">Password</label>
                        <input type="password" id="password" placeholder="Enter your password" className='border border-gray-300 rounded md:w-2/3 w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                        <label htmlFor="confirmPassword" className="mb-2 font-semibold text-gray-700">Confirm Password</label>
                        <input type="password" id="confirmPassword" placeholder="Enter your password again" className='border border-gray-300 rounded md:w-2/3 w-full p-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500' />
                        <button className='bg-blue-500 p-3 rounded w-full font-bold text-white md:w-2/3 hover:bg-blue-600 transition duration-300'>Register</button>
                        <p className="mt-4 text-gray-600">Already have an account? <Link href="/account/login" className="text-blue-500 hover:underline">Login</Link></p>

                    </div>
                    <ul className='flex items-center justify-center gap-4 mt-4'>
                        <li onClick={() => signInWithGithub("github")} className='hover:cursor-pointer'>
                            <Image src={git} alt="GitHub" width={50} height={50} />
                        </li>
                        <li onClick={() => signInWithGithub("discord")} className='hover:cursor-pointer'>
                            <Image src="/discord.svg" alt='Discord' width={50} height={50} />
                        </li>
                        <li onClick={() => signInWithGithub("twitter")} className='hover:cursor-pointer'>
                            <Image src={twitter} alt='Twitter' width={50} height={50} />
                        </li>
                    </ul>
                </div>
                <Image
                    src={iceCreamCake}
                    alt="Ice Cream Cake"
                    fill
                    className="md:blur-md blur-none md:h-screen w-screen absolute z-[-1] object-cover"
                />
            </div>
        </>
    )
}

export default register;