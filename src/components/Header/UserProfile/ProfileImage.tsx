import { UserMetadata } from '@supabase/supabase-js';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const ProfileImage = ((data: { user: UserMetadata | undefined }) => {
    const [user, setUser] = useState<UserMetadata | null>()
    useEffect(() => {
        setUser(data.user)
    }, [data.user])
    // console.log("/home/arona/bansaka/src/components/Header/UserProfile/ProfileImage.tsx:")
    // console.log(user)

    return (
        <div className="rounded-full overflow-hidden w-10 h-10">
            <Image
                src={user ? user.avatar_url : `https://images8.alphacoders.com/124/thumb-1920-1243838.jpg`}
                alt="User Profile"
                width={40}
                height={40}
                className="object-cover w-full h-full"
            />
        </div>
    )
});

export default ProfileImage;