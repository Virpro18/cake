'use client'
import React, { ReactNode } from 'react';

interface FlyingCardProps {
    children: ReactNode;
    className?: string
    isOpen: boolean
    setOpenFC: React.Dispatch<React.SetStateAction<boolean>>
}

const FlyingCard: React.FC<FlyingCardProps> = ({ children, className, isOpen, setOpenFC: setIsOpen }) => {
    const handleClose = () => {
        // Logic to close the card
        console.log('Card closed');
        setIsOpen(false)
    };

    const handleChildClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    if (isOpen) {
        return (
            <div className={`fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center`} onClick={handleClose}>
                <div className={`${className}`} onClick={handleChildClick}>
                    {children}
                </div>
            </div>
        );
    }
    return
};

export default FlyingCard;