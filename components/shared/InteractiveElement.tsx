import React from 'react';

interface InteractiveElementProps {
    className?: string;
}

const InteractiveElement: React.FC<InteractiveElementProps> = ({ className = '' }) => {
    return (
        <div className={`flex justify-end ${className}`}>
            <div className="border border-white p-[2px] rounded-full">
                <div className="w-12 h-4 bg-white backdrop-blur-sm rounded-full flex items-center justify-end">
                    <div className="flex space-x-1 me-2">
                        <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                        <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InteractiveElement; 