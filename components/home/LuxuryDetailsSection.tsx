import React from 'react';

interface LuxuryDetailsSectionProps {
    tagline: string;
    heading: string;
    description: string;
    discoverMoreText: string;
    downloadText?: string;
    images: {
        main: string;
        secondary1: string;
        secondary2: string;
        secondary3: string;
    };
}

const LuxuryDetailsSection: React.FC<LuxuryDetailsSectionProps> = ({
    tagline,
    heading,
    description,
    discoverMoreText,
    downloadText,
    images
}) => {
    return (
        <section className="bg-[#F3EEE7] py-16 md:py-24">
            <div className="container mx-auto px-4">
                {/* Mobile: Text First */}
                <div className="md:hidden flex flex-col gap-8 mb-12">
                    <div className="flex flex-col justify-between">
                        <div>
                            <p className="text-[10px] leading-[19px] tracking-[0.12em] uppercase text-[#646361] mb-3 font-helvetica">
                                {tagline}
                            </p>
                             <h2 className="text-[14px] leading-[25px] tracking-[0] align-middle text-[#313131] mb-3 libre-baskerville-regular">
                                {heading}
                            </h2>
                            <p className="text-[11px] leading-[18px] tracking-[0] text-justify text-[#313131] mb-16 libre-baskerville-regular">
                                {description}
                            </p>
                        </div>
                        <div>
                            {/* Horizontal Line */}
                            <div className="md:w-3/4 h-px bg-[#DAD9D7] mb-6 mx-4"></div>

                            {/* Links */}
                            <div className="flex gap-8">
                                <a href="#" className="text-[#313131] underline underline-offset-8 decoration-[#7C7C7C] text-[12px] leading-[25px] font-normal tracking-[0.07em] libre-baskerville-regular hover:text-gray-600 transition-colors">
                                    {discoverMoreText}
                                </a>
                                {/* {downloadText && (
                                    <a href="#" className="text-[#313131] underline underline-offset-8 decoration-[#7C7C7C] text-sm libre-baskerville-regular hover:text-gray-600 transition-colors">
                                        {downloadText}
                                    </a>
                                )} */}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop: Images and Text Side by Side */}
                <div className="flex flex-col justify-start md:flex-row gap-8 lg:gap-12">
                    {/* Top Row: Block 1 and Block 2 (Side by Side) */}
                    <div className="flex gap-4 lg:gap-8 basis-full lg:basis-6/12">
                        {/* Block 1: Takes more width */}
                        <div className="flex flex-col items-end gap-4 basis-7/12">
                            {/* Main Image */}
                            <div className="h-[235px] md:h-[321px] w-[210px] md:w-[239px]">
                                <img
                                    src={images.main}
                                    alt="Luxury kitchen interior"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Secondary3 Image */}
                            <div className="h-[130px] md:h-[160px] w-[110px] md:w-[121px]">
                                <img
                                    src={images.secondary3}
                                    alt="Tree bark texture"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>

                        {/* Block 2: Takes less width */}
                        <div className="flex flex-col gap-4 basis-5/12 mt-16 md:mt-20">
                            {/* Secondary1 Image */}
                            <div className="h-[99px] md:h-[120px] w-[84px] md:w-[90px]">
                                <img
                                    src={images.secondary1}
                                    alt="Wood cross-section"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Secondary2 Image */}
                            <div className="h-[137px] md:h-[200px] w-[120px] md:w-[150px]">
                                <img
                                    src={images.secondary2}
                                    alt="Outdoor pool area"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Desktop: Text Block (Hidden on Mobile) */}
                    <div className="hidden md:flex flex-col justify-between basis-full lg:basis-6/12">
                        <div>
                            <h2 className="font-normal text-[18px] leading-[19px] align-middle tracking-[0] text-[#313131] mb-5 libre-baskerville-regular">
                                {heading}
                            </h2>
                            <p className="font-normal text-[10px] leading-[19px] tracking-[0.12em] align-middle uppercase text-[#646361] mb-5 libre-baskerville-regular">
                                {tagline}
                            </p>
                            <p className="max-w-[440px] font-normal text-[12px] leading-[20px] tracking-[0.005em] text-[#313131] mb-20 libre-baskerville-regular">
                                {description}
                            </p>
                        </div>
                        <div>
                            {/* Horizontal Line */}
                            <div className="max-w-[440px] h-px bg-[#DAD9D7] mb-6"></div>

                            {/* Links */}
                            <div className="flex gap-8">
                                <a href="#" className="text-[#313131] underline underline-offset-8 decoration-[#7C7C7C] font-normal text-[14px] leading-[25px] tracking-[0.07em] hover:text-gray-600 transition-colors font-helvetica">
                                    {discoverMoreText}
                                </a>
                                {downloadText && (
                                    <a href="#" className="text-[#313131] underline underline-offset-8 decoration-[#7C7C7C] font-normal text-[14px] leading-[25px] tracking-[0.07em] hover:text-gray-600 transition-colors font-helvetica">
                                        {downloadText}
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LuxuryDetailsSection; 