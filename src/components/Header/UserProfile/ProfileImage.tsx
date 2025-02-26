import { UserMetadata } from '@supabase/supabase-js';
import Image from 'next/image';

interface ProfileImageProps {
    user?: UserMetadata | undefined;
    size?: number; // Optional size prop
    url?: string;
}

const ProfileImage = ({url, user = { avatar_url: 'https://images8.alphacoders.com/124/thumb-1920-1243838.jpg' }, size = 40 }: Partial<ProfileImageProps>) => { // Default size is 40
    return (
        <div className="rounded-full overflow-hidden" style={{ width: size, height: size }}>
            <Image
                src={url || user.avatar_url}
                alt="User Profile"
                width={size}
                height={size}
                className="object-cover w-full h-full"
                style={{ objectFit: 'cover' }}
            />
        </div>
    );
};

export default ProfileImage;
