'use client';

import React from 'react';
import { MapSectionData } from '@/types';

interface MapSectionProps {
    data: MapSectionData;
    communityId?: number;
}

const MapSection: React.FC<MapSectionProps> = ({ data, communityId }) => {
    const handleMapClick = () => {
        let address = "";
        
        // Community 1 = Jumeirah Golf Estates, Community 2 = Emirates Hills
        if (communityId === 1) {
            address = "Jumeirah Gulf Estates, UAE";
        } else if (communityId === 2) {
            address = "Dubai Emirates Hills, UAE";
        } else {
            address = "Dubai, UAE"; // fallback
        }
        
        const encodedAddress = encodeURIComponent(address);
        const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
        
        try {
            window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
        } catch (error) {
            console.error('Error opening map:', error);
            window.location.href = googleMapsUrl;
        }
    };

    return (
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 ">
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Top Section - Text Content */}
                <div className="text-start md:text-center mb-10 md:mb-16">
                    <h2 className="text-[#313131] max-w-[346px] md:max-w-[581px] md:mx-auto mb-8">
                        {data.heading.map((item, index) => (
                            <span
                            key={index}
                            className={`${
                                item.isItalic
                                ? 'gfs-didot-regular-italic italic text-[32px] md:text-[40px] tracking-[-0.01em] uppercase leading-[50px] md:leading-[80px] mr-1'
                                : 'gfs-didot-regular text-fill-text-bg text-[32px] md:text-[59px] tracking-[-0.01em] uppercase leading-[50px] md:leading-[80px]'
                            }`}
                            >
                            {item.text}{' '}
                            </span>
                        ))}
                    </h2>
                    {/* <h2 className=" text-[#313131]">
                        {data.heading.map((item, index) => (
                            <span key={index} className={`me-2 ${item.isItalic ? 'gfs-didot-regular-italic italic text-[32px] leading-[50px] md:leading-[80px] tracking-[-0.01em] uppercase md:text-[40px]' : 'gfs-didot-regular text-fill-text-bg text-[32px] leading-[50px] tracking-[-0.01em] uppercase md:text-[59px] md:leading-[80px]'}`}>
                                {item.text}
                            </span>
                        ))}

                    </h2>
                    <h2 className=" text-[#313131] mb-14">
                        {data.headingHighlight.map((item, index) => (
                            <span key={index} className={`me-2 ${item.isItalic ? 'gfs-didot-regular-italic italic text-[32px] leading-[50px] md:leading-[80px] tracking-[-0.01em] uppercase md:text-[40px]' : 'gfs-didot-regular text-fill-text-bg text-[32px] leading-[50px] tracking-[-0.01em] uppercase md:text-[59px] md:leading-[80px]'}`}>
                                {item.text}
                            </span>
                        ))}
                    </h2> */}
                    <p className="text-[11px] leading-[18px] tracking-[0em] text-justify md:text-center md:text-[14px] md:leading-[24px] md:tracking-[0.14px] text-[#545552] libre-baskerville-regular max-w-full md:max-w-[620px] md:mx-auto mb-12">
                        {data.description}
                    </p>
                    <div className='flex justify-center'>
                        <button 
                            onClick={handleMapClick}
                            className="bg-[#F3EEE7] backdrop-blur-[10px] border border-[#DAD9D7] hover:bg-[#C4B498] text-[#545552] px-6 py-2 rounded-full text-[12px] md:text-[14px] leading-[24px] tracking-[0.01em] transition-colors duration-200 libre-baskerville-regular cursor-pointer"
                        >
                            {data.ctaText}
                        </button>
                    </div>
                </div>

                {/* Bottom Section - Map and Callouts */}
                <div className="relative">
                    {/* Main Map */}
                    <div className="relative max-w-4xl mx-auto">
                        <img
                            src={data.mapImage}
                            alt={data.mapAlt}
                            className="w-full h-auto"
                        />


                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection; 