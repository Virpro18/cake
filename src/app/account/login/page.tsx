"use client"

import Image from 'next/image';
import iceCreamCake from "@/assets/ice-cream-cake.jpg";
import git from "@/assets/github-mark.png"
import Link from 'next/link';
// import spotify from "@/assets/Spotify_Primary_Logo_RGB_Green.png"
import { supabase } from '@/libs/supabase/client';
import { Provider } from '@supabase/supabase-js';

const login = () => {
    async function signInWith(provider: Provider) {
        const { data, error } = await supabase.auth.signInWithOAuth({
            provider,
            options: { redirectTo: 'http://localhost:3000/' }
        })
        console.log(error)
        console.log(data)
    }

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
                            <button className='bg-blue-500 p-3 rounded font-bold text-white w-full md:w-2/3 hover:bg-blue-600 transition duration-300'>Login</button>
                            <p className="mt-4 text-gray-600">Don&#39;t have an account? <Link href="/account/register" className="text-blue-500 hover:underline">Register</Link></p>
                        </div>
                    </div>
                    <ul className='flex items-center justify-center gap-4 mt-4'>
                        <li onClick={() => signInWith("github")} className='hover:cursor-pointer'>
                            <Image src={git} alt="GitHub" width={50} height={50} />
                        </li>
                        <li onClick={() => signInWith("discord")} className='hover:cursor-pointer'>
                            <Image src="/discord.svg" alt='Discord' width={50} height={50} />
                        </li>
                        {/* <li onClick={() => signInWith("spotify")} className='hover:cursor-pointer'>
                            <Image src={spotify} alt='Spotify' width={50} height={50} />
                        </li> */}
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

export default login
