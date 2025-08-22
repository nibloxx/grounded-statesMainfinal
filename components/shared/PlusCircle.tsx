import React from 'react';
import { IoAdd } from 'react-icons/io5';

interface PlusCircleProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
    className?: string;
    onClick?: () => void;
}

const PlusCircle: React.FC<PlusCircleProps> = ({ 
    size = 'md', 
    className = '', 
    onClick 
}) => {
    const sizeClasses = {
        sm: 'w-8 h-8',
        md: 'w-12 h-12',
        lg: 'w-16 h-16',
        xl: 'w-20 h-20'
    };

    const iconSizeClasses = {
        sm: 'w-6 h-6',
        md: 'w-8 h-8',
        lg: 'w-10 h-10',
        xl: 'w-12 h-12'
    };

    return (
        <div className={`border p-[1px] border-[#F9F8F4] rounded-full`}>
        <div
            className={`
                ${sizeClasses[size]}
                rounded-full
                bg-[#F9F8F4]
                flex
                items-center
                justify-center
                cursor-pointer
                hover:border-gray-400
                transition-colors
                duration-300
                ${className}
            `}
            onClick={onClick}
        >
            <IoAdd className={`${iconSizeClasses[size]} text-[#545552]`} />
        </div>
        </div>
    );
};

export default PlusCircle; 