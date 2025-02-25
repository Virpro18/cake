'use server'
import { createClient } from '@/libs/supabase/server';
import Navigation from './Navigation';
import ProfileImageUploader from './ProfileImageUploader';
import { server } from '@/libs/getUserInfo';

const profile = async () => {
    const data = await server();
    return (
        <>
            <div className="mt-8 ml-8 w-fit">
                boleh lah
            </div>
            <div className='flex w-full justify-center p-8 gap-8'>
                <div className='w-2/12'>
                    <Navigation />
                </div>
                <div className='w-6/12 flex gap-8 mt-12'>
                    <ProfileImageUploader data={data} />
                    <div>
                        <h2 className='font-bold text-lg'>Bio Data</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default profile