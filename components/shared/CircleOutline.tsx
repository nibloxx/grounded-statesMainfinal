import React from 'react';

interface CircleOutlineProps {
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl';
    className?: string;
    onClick?: () => void;
    text?: string;
}

const CircleOutline: React.FC<CircleOutlineProps> = ({
    size = 'md',
    className = '',
    text = 'open',
    onClick
}) => {
    const sizeClasses = {
        sm: 'w-6 h-6 md:w-8 md:h-8',
        md: 'w-8 h-8 md:w-12 md:h-12',
        lg: 'w-12 h-12 md:w-16 md:h-16',
        xl: 'w-16 h-16 md:w-20 md:h-20',
        xxl: 'w-[60px] h-[60px] md:w-20 md:h-20'
    };

    return (
        <div
            className={`
                ${sizeClasses[size]}
                rounded-full 
                border 
                border-white 
                absolute 
                flex 
                items-center 
                justify-center 
                cursor-pointer 
                transition-all 
                duration-300 
                hover:scale-105
                ${className}
            `}
            onClick={onClick}
        >
            {/* Middle circle with second border */}
            <div className="w-5/6 h-5/6 rounded-full border border-white"></div>
            {/* Inner circle with third border */}
            <div className="w-3/4 h-3/4 rounded-full border border-white bg-white absolute"></div>
            <span className="text-gray-600 text-xs font-medium tracking-wide absolute">{text}</span>
        </div>
    );
};

export default CircleOutline; 