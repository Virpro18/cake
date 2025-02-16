import ProfileImage from '@/components/Header/UserProfile/ProfileImage';
import { createClient } from '@/libs/supabase/server';

const profile = async () => {
    const client = await createClient();
    const user = await client.auth.getUser()
    const data = user?.data.user?.user_metadata;
    return (
        <div className="flex justify-center h-screen px-11">
            <nav>
                <div className='flex gap-2 items-center'>  {/*profile*/}
                    <ProfileImage user={data} />
                    <div>
                        <h1 className="text-xl font-bold">{data?.full_name}</h1>
                        <p className='text-md'>{data?.email}</p>
                    </div>
                </div>
            </nav>
            <div className='w-full'>

            </div>

        </div>
    )
}

export default profile