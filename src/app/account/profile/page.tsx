'use server'
import Back from './Back';
import Navigation from './Navigation';
import ProfileImageUploader from './ProfileImageUploader';
import { server } from '@/libs/getUserInfo';

const profile = async () => {
    const data = await server();
    return (
        <>
            <Back />
            <div className='flex w-full justify-center p-8 gap-8'>
                <div className='w-2/12 md:block hidden'>
                    <Navigation />
                </div>
                <div className='w-6/12 flex gap-8 mt-12 md:flex-row flex-col md:items-start items-center'>
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