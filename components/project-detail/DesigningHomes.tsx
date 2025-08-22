'use client';
import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface TextWord {
    text: string;
    italic: boolean; 
    bgImage?: string;
}

interface DesigningHomesProps {
    image: string;
    imageAlt: string;
    text1: TextWord[];
    text2: TextWord[];
    text3: TextWord[];
}

const DesigningHomes: React.FC<DesigningHomesProps> = ({
    image,
    imageAlt,
    text1,
    text2,
    text3
}) => {
    const imageRef = useRef<HTMLImageElement>(null);

    // GSAP scroll zoom effect
    useEffect(() => {
        if (!imageRef.current) return;

        gsap.fromTo(
            imageRef.current,
            {
                scale: 1,
            },
            {
                scale: 1.1,
                ease: "none",
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top bottom", // Start earlier when image enters viewport
                    end: "bottom top", // End later when image fully exits
                    scrub: 1, // Smooth scroll animation
                },
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    const getCombinedText = () => {
        const allText = [...text1, ...text2, ...text3];

        return allText.map((word, index) => (
            <span
                key={`combined-${index}`}
                className={`${word.italic ? 'italic' : ''} text-[#313131] me-1 text-[32px] leading-[50px] tracking-[-0.01em]`}
            >
                {word.text}{index < allText.length - 1 ? ' ' : ''}
            </span>
        ));
    };

    return (
        <section className="py-8 md:mb-24">
            <div className="flex flex-col items-center">
                {/* Main Image Section */}
                <h2 className={`block md:hidden font-medium gfs-didot-regular text-center w-full max-w-[346px] break-words`}>
                    {getCombinedText()}
                </h2>
                {/* Large Interior Image */}
                <div className="flex items-end justify-center gap-4 h-auto mt-14 md:mt-0 w-full">
                    <h2 className={`hidden md:block font-gfsDidot flex-1 min-w-0 text-right overflow-visible`}>
                        {text1.map((word, index) => (
                            <span
                                key={index}
                                className={`${word.italic ? 'font-normal italic text-[40px] leading-[80px] tracking-[-0.01em] pr-2' : 'font-normal not-italic text-[59px] leading-[80px] tracking-[-0.01em]'}
                                     ${word.bgImage ? 'text-fill-text-bg' : 'text-[#313131]'} me-1
                                    `}
                            >
                                {word.text}{index < text1.length - 1 ? ' ' : ''}
                            </span>
                        ))}
                    </h2>
                    <div className="shrink-0 overflow-hidden">
                        <img
                            ref={imageRef}
                            src={image}
                            alt={imageAlt}
                            className="w-[295px] md:w-[300px] h-[346px] md:h-[448px] object-cover"
                        />
                    </div>
                    <h2 className={`hidden md:block font-gfsDidot flex-1 min-w-0 text-left overflow-visible`}>
                        {text3.map((word, index) => (
                            <span
                                key={index}
                                className={`${word.italic ? 'font-normal italic text-[40px] leading-[80px] tracking-[-0.01em] pl-2 pr-4' : 'font-normal not-italic text-[59px] leading-[80px] tracking-[-0.01em]'} ${word.bgImage ? 'text-fill-text-bg' : 'text-[#313131]'} me-1`}
                            >
                                {word.text}{index < text3.length - 1 ? ' ' : ''}
                            </span>
                        ))}
                    </h2>
                </div>
                <div className='hidden md:block w-full mt-6 flex justify-center '>
                        <h2 className={`font-gfsDidot text-center`}>
                                {text2.map((word, index) => (
                                    <span
                                        key={index}
                                        className={`${word.italic ? 'font-normal italic text-[40px] leading-[80px] tracking-[-0.01em]' : 'font-normal not-italic text-[59px] leading-[80px] tracking-[-0.015em]'}
                                             ${word.bgImage ? 'text-fill-text-bg' : 'text-[#313131]'}
                                            `}
                                    >
                                        {word.text}{index < text2.length - 1 ? ' ' : ''}
                                    </span>
                                ))}
                            </h2>
                </div>
            </div>
        </section>
    );
};

export default DesigningHomes; 