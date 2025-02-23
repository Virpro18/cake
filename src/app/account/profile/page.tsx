'use server'
import { createClient } from '@/libs/supabase/server';
import Navigation from './Navigation';
import ProfileImageUploader from './ProfileImageUploader';

const profile = async () => {
    const client = await createClient();
    const user = await client.auth.getUser()
    const data = user?.data.user?.user_metadata;
    return (
        <div className='flex w-full justify-center p-8 gap-8'>
            <div className='w-2/12'>
                <Navigation />
            </div>
            <div className='w-6/12 flex gap-8 mt-12'>
                <ProfileImageUploader  data={data}/>
                <div>
                    <h2 className='font-bold text-lg'>Bio Data</h2>
                </div>
            </div>
        </div>
    )
}

export default profile