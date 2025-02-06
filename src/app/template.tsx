'use client'
import Header from '@/components/Header';
import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

interface ProfileTemplateProps {
    children: ReactNode;
}

export default function ProfileTemplate({ children }: ProfileTemplateProps) {
    const path = usePathname()
    console.log(path)
    return (
        <div>
            {path != "/account/login" && path != "/account/register" && <Header />}
            {children}
        </div>
    );
}