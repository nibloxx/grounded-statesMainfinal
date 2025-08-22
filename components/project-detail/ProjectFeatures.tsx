'use client'
import { ProjectFeature } from '@/types';
import Image from 'next/image';
import React, { useState } from 'react';


interface ProjectFeaturesProps {
    features?: ProjectFeature[];
}
const RenderDayTimeButton = ({
  isNight,
  onClick,
}: {
  isNight: boolean;
  onClick: () => void;
}) => {
    return (
        <div
            className="relative inline-block group"
        >
            <button
                onClick={onClick}
                className={`bg-[#D9D9D966] text-[#F9F8F4] backdrop-blur-[10px] flex items-center justify-center gap-1 px-4 py-2 text-sm rounded-full`}
            >
                {isNight ? 'Night time' : 'Day time'}
                <div className="grid grid-cols-2 gap-0.5 mt-[2px] ms-2">
                    <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                    <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                    <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                    <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                </div>
            </button>
        </div>
    );
};

const ProjectFeatures: React.FC<ProjectFeaturesProps> = ({ features }) => {

    const displayFeatures = Array.isArray(features) && features.length >= 2 ? features : [];
    const [isNightCard1, setIsNightCard1] = useState(false);
    const [isNightCard2, setIsNightCard2] = useState(false);

    return (
        <section className="pb-16 md:py-24 ">
            <div className="w-full max-w-none px-2 md:px-4 lg:px-6 xl:px-8 2xl:px-12">
                {/* Desktop Layout - Two columns */}
                <div className="grid grid-cols-12 gap-4 md:gap-6 lg:gap-8">
                    {/* Left Column - Living Room */}
                    <div className="col-span-12 md:col-span-8">
                        <div className="relative">
                            {displayFeatures[0] ? (
                                <div className='relative h-[346px] md:h-[540px] overflow-hidden'>
                                {/* Day Image */}
                                <img
                                    src={displayFeatures[0].image}
                                    alt={displayFeatures[0].alt}
                                    className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ease-in-out ${
                                        isNightCard1 ? 'opacity-0' : 'opacity-100'
                                    }`}
                                />
                                {/* Night Image */}
                                {displayFeatures[0].nightImage && (
                                    <img
                                        src={displayFeatures[0].nightImage}
                                        alt={displayFeatures[0].alt}
                                        className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ease-in-out ${
                                            isNightCard1 ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    />
                                )}
                                {displayFeatures[0].adImage && (
                                <div className="absolute bottom-4 left-4">
                                    <Image
                                    src={displayFeatures[0].adImage}
                                    alt={displayFeatures[0].adImageAlt || 'AD'}
                                    width={128}
                                    height={64}
                                    className="object-contain w-[98px] h-[64px]"
                                    />
                                </div>
                                )}
                                </div>
                            ) : (
                                <div className="w-full h-[346px] md:h-[540px] bg-gray-200" />
                            )}
                            {/* Day time label */}
                            <div className="absolute top-4 right-4 z-50">
                                <RenderDayTimeButton 
                                    isNight={isNightCard1}
                                    onClick={() => setIsNightCard1((prev) => !prev)} 
                                />
                            </div>
                        </div>
                        <div className="mt-4 md:mt-6">
                            {displayFeatures[0] && (
                                <>
                                    <h3 className="text-[10px] leading-[19px] tracking-[0.12em] uppercase text-[#646361] mb-2 md:mb-3 libre-baskerville-regular">
                                        {displayFeatures[0].title}
                                    </h3>
                                    <h4 className="text-[14px] leading-[20px] font-normal md:leading-[19px] md:text-[18px] text-[#313131] mb-2 md:mb-3 libre-baskerville-regular">
                                        {displayFeatures[0].headline}
                                    </h4>
                                    <p className="text-[10px] leading-[16px] md:text-[12px] md:leading-[18px] md:tracking-[0.005em] text-[#313131] text-justify font-light libre-baskerville-regular">
                                        {displayFeatures[0].description}
                                    </p>
                                </>
                            )}
                        </div>
                    </div>

                    {/* Right Column - Outdoor Area */}
                    <div className="col-span-12 md:col-span-4">
                        <div className="relative">
                            {displayFeatures[1] ? (
                                <div className='relative h-[346px] md:h-[540px] overflow-hidden'>
                                {/* Day Image */}
                                <img
                                    src={displayFeatures[1].image}
                                    alt={displayFeatures[1].alt}
                                    className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ease-in-out ${
                                        isNightCard2 ? 'opacity-0' : 'opacity-100'
                                    }`}
                                />
                                {/* Night Image */}
                                {displayFeatures[1].nightImage && (
                                    <img
                                        src={displayFeatures[1].nightImage}
                                        alt={displayFeatures[1].alt}
                                        className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-500 ease-in-out ${
                                            isNightCard2 ? 'opacity-100' : 'opacity-0'
                                        }`}
                                    />
                                )}
                                </div>
                            ) : (
                                <div className="w-full h-[346px] md:h-[540px] bg-gray-200" />
                            )}
                            {/* Day time label */}
                            <div className="absolute top-4 right-4 z-50">
                                <RenderDayTimeButton 
                                    isNight={isNightCard2}
                                    onClick={() => setIsNightCard2((prev) => !prev)} 
                                />
                            </div>
                        </div>
                        <div className="mt-4 md:mt-6">
                            {displayFeatures[1] && (
                                <>
                                    <h3 className="text-[10px] leading-[19px] tracking-[0.12em] uppercase text-[#646361] mb-2 md:mb-3 libre-baskerville-regular">
                                        {displayFeatures[1].title}
                                    </h3>
                                    <h4 className="text-[14px] font-normal leading-[25px] md:leading-[19px] md:text-[18px] text-[#313131] mb-2 md:mb-3 libre-baskerville-regular">
                                        {displayFeatures[1].headline}
                                    </h4>
                                    <p className="text-[10px] leading-[16px] md:text-[12px] md:leading-[18px] md:tracking-[0.005em] text-[#313131] text-justify font-light libre-baskerville-regular">
                                        {displayFeatures[1].description}
                                    </p>
                                </>
                            )}
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
};

export default ProjectFeatures; 