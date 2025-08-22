import React from 'react';

interface ColonButtonProps {
    onClick?: () => void;
    className?: string;
    classNametop?: string;
    children?: React.ReactNode;
    scrollProgress?: number; // Progress from 0 to 1
}

const ColonButton: React.FC<ColonButtonProps> = ({ 
    onClick, 
    classNametop = "",
    className= "",
    children = "",
    scrollProgress = 0
}) => {
    // Calculate the vertical movement based on scroll progress
    const translateY = scrollProgress * 20; // Move up to 20px based on scroll

    return (
        <div className={`border border-[#F9F8F4] rounded-full p-[2px] ${classNametop}`}>
        <button 
            onClick={onClick}
            className={`bg-[#F9F8F4] border border-[#e5e5e5] flex flex-col items-center justify-center gap-2 mb-5 px-[8px] py-5 rounded-full text-sm shadow-sm hover:shadow-md transition-all duration-300 ${className}`}
            style={{
                transform: `translateY(${translateY}px)`,
                transition: 'transform 0.1s ease-out'
            }}
        >
          
            <div className="flex flex-col gap-1">
                <div className="w-[4px] h-[4px] bg-[#585856] rounded-full"></div>
                <div className="w-[4px] h-[4px] bg-[#585856] rounded-full"></div>
            </div>
        </button>
        </div>
    );
};

export default ColonButton; 