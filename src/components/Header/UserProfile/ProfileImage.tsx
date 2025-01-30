import Image from 'next/image';

const ProfileImage = () => {
    return (
        <div className="rounded-full overflow-hidden w-10 h-10">
            <Image
                src="https://images8.alphacoders.com/124/thumb-1920-1243838.jpg"
                alt="User Profile"
                width={40} // Sesuaikan dengan ukuran w-12 (12 * 4 = 48px)
                height={40} // Sesuaikan dengan ukuran h-12 (12 * 4 = 48px)
                className="object-cover w-full h-full" // Pastikan gambar menutupi area dengan proporsi yang benar
            />
        </div>
    )
}

export default ProfileImage