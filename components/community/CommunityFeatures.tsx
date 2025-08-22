'use client';

import React, { useState } from 'react';
import { CenterModeSlider, ProgressLine } from '@/components/shared';
import { CommunityFeature } from '@/types';

const Features: React.FC<{ features: CommunityFeature[] }> = ({ features }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const handleSlideChange = (slideIndex: number) => {
        setCurrentSlide(slideIndex);
    };

    if (features.length === 0) return null;
    return (
        <section className="pt-40 pb-50 lg:pt-40 lg:pb-60 px-4 md:px-8 lg:px-12">
            <div className="max-w-7xl mx-auto">
                {/* Mobile Slider - Hidden on desktop */}
                {/* <div className="block md:hidden">
                    <ImageSlider
                        items={features.map((feature, index) => ({
                            ...feature,
                            id: index + 1
                        }))}
                        renderCard={(item, index) => (
                            <div className="relative">
                                <div className="aspect-[3/4] w-full overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <p className="text-start mt-2 text-black font-medium tracking-wide uppercase text-[10px] libre-baskerville-regular">
                                    {item.title}
                                </p>
                            </div>
                        )}
                        slidesPerView={{ mobile: 1.5, tablet: 1.5, desktop: 1.5 }}
                        spaceBetween={16}
                        showPagination={true}
                        showNavigation={false}
                        autoplayDelay={0}
                        className="h-[75vh]"
                    />
                </div> */}


                {/* Mobile Slider - Hidden on desktop */}
                <div className="block md:hidden">

                    <CenterModeSlider
                        items={features.map((feature, index) => ({
                            ...feature,
                            id: index + 1
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
                                <p className="text-start mt-2 text-black font-medium tracking-wide uppercase text-[10px] libre-baskerville-regular">
                                    {item.title}
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
                    <div className='mt-12 max-w-[193px] mx-auto'>
                        <ProgressLine
                            totalSlides={features.length}
                            currentSlide={currentSlide}
                            lineColor="#DAD9D7"
                            fillColor="#82847F"
                            height="2px"
                        />
                    </div>
                </div>

                {/* Desktop Grid Layout - Hidden on mobile */}
                <div className="hidden md:grid grid-cols-5 gap-4 md:gap-3">
                    <div className='flex md:col-span-2 gap-3'>
                        {/* Section 1: CREATED FOR FAMILIES */}
                        <div className="relative w-2/5 h-full flex flex-col justify-end">
                            <div className=" h-full w-full overflow-hidden">
                                <img
                                    src={features[0].image}
                                    alt={features[0].alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-start mt-2 text-black font-normal text-[10px] leading-[13px] tracking-[0.10em] uppercase libre-baskerville-regular">
                                {features[0].title}
                            </p>

                        </div>

                        {/* Section 2: CLOSE TO YOUR ANIMALS */}
                        <div className=" flex w-3/5 flex-col justify-end md:mb-[38px] lg:mb-[23px]">
                            <div className="relative">
                                <p className="text-start mb-2 text-black font-normal text-[10px] leading-[13px] tracking-[0.10em] uppercase libre-baskerville-regular">
                                    {features[1].title}
                                </p>
                                <div className="w-full overflow-hidden">
                                    <img
                                        src={features[1].image}
                                        alt={features[1].alt}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3 col-span-2'>
                        {/* Section 3: DEVELOP A PERFECT SWING LINE */}
                        <div className="relative w-3/5">
                            <div className="h-[120%] w-full overflow-hidden">
                                <img
                                    src={features[2].image}
                                    alt={features[2].alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-start mt-2 text-black font-normal text-[10px] leading-[13px] tracking-[0.10em] uppercase libre-baskerville-regular">
                                {features[2].title}
                            </p>
                        </div>


                        {/* Section 4: BLENDED INTO NATURE */}
                        <div className="relative w-2/5">
                            <div className="h-5/6 w-full overflow-hidden">
                                <img
                                    src={features[3].image}
                                    alt={features[3].alt}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-start mt-2 text-black font-normal text-[10px] leading-[13px] tracking-[0.10em] uppercase libre-baskerville-regular">
                                {features[3].title}
                            </p>
                        </div>

                    </div>
                    {/* Section 5: CELEBRATE WITH FRIENDS */}
                    <div className="md:col-span-1 self-end">
                        <div className=" ">
                            <p className="text-start mb-2 text-black font-normal text-[10px] leading-[13px] tracking-[0.10em] uppercase libre-baskerville-regular">
                                {features[4].title}
                            </p>
                            <div className=" w-full overflow-hidden">
                                <img
                                    src={features[4].image}
                                    alt={features[4].alt}
                                    className="w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features; 