'use client';

import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CenterModeSlider from './CenterModeSlider';
import { ProgressLine } from '@/components/shared';
import { LocationItem } from '@/types';

interface UltimateLocationSliderProps {
    items: LocationItem[];
    onSlideChange?: (index: number) => void;
}

const UltimateLocationSlider: React.FC<UltimateLocationSliderProps> = ({
    items,
    onSlideChange
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const handleCardClick = (index: number) => {
        setSelectedIndex(selectedIndex === index ? null : index);
    };

    const handleSlideChange = (slideIndex: number) => {
        if (onSlideChange) {
            onSlideChange(slideIndex);
        }
    };

    return (
        <>
            {/* Mobile Slider */}
            <div className="block md:hidden">
                <CenterModeSlider
                    items={items.map((item, index) => ({
                        ...item,
                        id: index + 1,
                        title: item.name // Map name to title for CenterModeSlider compatibility
                    }))}
                    renderCard={(item: any, index: number) => (
                        <div className="relative me-2 ms-2">
                            <div className="aspect-[3/4] w-full overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-start mt-2 text-[#000000] font-normal text-[10px] leading-[13px] tracking-[0.10em] uppercase libre-baskerville-regular">
                                {item.name} - {item.travelTime}
                            </p>
                        </div>
                    )}
                    slidesToShow={2}
                    centerMode={true}
                    infinite={true}
                    centerPadding="60px"
                    autoplay={true}
                    autoplaySpeed={5000}
                    dots={false}
                    gap={30}
                    arrows={false}
                    className=""
                    onSlideChange={handleSlideChange}
                />
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:block max-w-4xl md:max-w-6xl lg:max-w-7xl xl:max-w-[90rem] 2xl:max-w-[100rem] mx-auto">
                <div className="flex gap-6 justify-center items-start">
                    {mounted && items.map((item, index) => (
                        <div
                            key={index}
                            className={`cursor-pointer transition-all duration-500 ease-in-out ${
                                selectedIndex === index
                                    ? 'w-[320px]' // Selected image wider
                                    : 'w-[240px]' // Default width for all other images
                            }`}
                            onClick={() => handleCardClick(index)}
                        >
                            {selectedIndex === index ? (
                                // Selected state with background and text overlay
                                <div className="h-[300px] w-full relative" style={{ backgroundColor: '#F3EEE7' }}>
                                    <div className="absolute top-4 left-4 right-4">
                                        <h3 
                                            className="font-normal text-[35px] leading-[48px] tracking-wide uppercase font-gfsDidot"
                                            style={{
                                                backgroundImage: `url("${item.image.replace(/ /g, '%20')}")`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundClip: 'text',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                color: 'transparent'
                                            }}
                                        >
                                            {item.name}
                                        </h3>
                                    </div>
                                    <div className="absolute bottom-4 left-4">
                                        <p 
                                            className="font-normal text-[35px] leading-[48px] font-gfsDidot"
                                            style={{
                                                backgroundImage: `url("${item.image.replace(/ /g, '%20')}")`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center',
                                                backgroundClip: 'text',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
                                                color: 'transparent'
                                            }}
                                        >
                                            {item.travelTime}
                                        </p>
                                    </div>
                                </div>
                            ) : (
                                // Default state with image
                                <div className="h-[300px] w-full overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            )}
                            {selectedIndex !== index && (
                                <p className="text-start mt-2 text-[#000000] font-normal text-[10px] leading-[13px] tracking-[0.10em] uppercase libre-baskerville-regular">
                                    {item.name} - {item.travelTime}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default UltimateLocationSlider; 