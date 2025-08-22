import React from 'react';

interface ProgressLineProps {
    totalSlides: number;
    currentSlide: number;
    className?: string;
    lineColor?: string;
    fillColor?: string;
    height?: string;
}

const ProgressLine: React.FC<ProgressLineProps> = ({
    totalSlides,
    currentSlide,
    className = "",
    lineColor = "#DAD9D7",
    fillColor = "#313131",
    height = "1px"
}) => {
    const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;

    return (
        <div className={`w-full ${className}`}>
            {/* Background Line */}
            <div 
                className="w-full relative"
                style={{ height }}
            >
                {/* Empty Line */}
                <div 
                    className="absolute inset-0"
                    style={{ 
                        backgroundColor: lineColor,
                        height: '50%'
                    }}
                ></div>
                
                {/* Filled Line */}
                <div 
                    className="absolute top-0 left-0 transition-all duration-300 ease-in-out"
                    style={{ 
                        backgroundColor: fillColor,
                        height: '50%',
                        width: `${progressPercentage}%`
                    }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressLine; 