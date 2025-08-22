"use client";
import React, { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { CircleOutline } from "../shared";
import Link from "next/link";
import { WelcomeSectionProps } from "@/types";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRouter } from "next/navigation";

gsap.registerPlugin(ScrollTrigger);

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ data, className, disableInteractions }) => {
  const poolImageRef = useRef<HTMLImageElement>(null);
  const livingRoomImageRef = useRef<HTMLImageElement>(null);
  const router = useRouter();
  const [poolMousePosition, setPoolMousePosition] = useState({ x: 0, y: 0 });
  const [livingRoomMousePosition, setLivingRoomMousePosition] = useState({ x: 0, y: 0 });
  const [isPoolHovering, setIsPoolHovering] = useState(false);
  const [isLivingRoomHovering, setIsLivingRoomHovering] = useState(false);

  const handlePoolMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPoolMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleLivingRoomMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setLivingRoomMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handlePoolClick = () => {
    router.push("/about");
  };

  const handleLivingRoomClick = () => {
    router.push("/about");
  };

  // Zoom effects on scroll for both images
  useEffect(() => {
    // Pool image zoom effect
    if (poolImageRef.current) {
      gsap.fromTo(
        poolImageRef.current,
        { scale: 1 },
        {
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: poolImageRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }

    // Living room image zoom effect
    if (livingRoomImageRef.current) {
      gsap.fromTo(
        livingRoomImageRef.current,
        { scale: 1 },
        {
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: livingRoomImageRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  const interactive = !disableInteractions;
  return (
    <section className={`py-16 md:py-24 bg-[#F3EEE7] ${className}`}>
      {/* <div className="skin-shade-overlay -z-20"></div> */}
      <div className="container mx-auto px-4 md:px-10 ">
        {/* Top Section - 3 Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-8 md:mb-16">
          {/* First Column - Bigger Font */}
          <div className="max-w-[248px] md:max-w-[374px] lg:col-span-1">
            <h2 className="text-[11px] leading-[20px] tracking-[0em] font-normal text-[#313131] md:text-[18px] md:leading-[29px] md:tracking-[0em] libre-baskerville-regular">
              {data.title}
            </h2>
            {/* Border Line */}
            <div className="border-b border-[#DAD9D7] mt-5 md:mt-12 w-1/2 md:w-3/4"></div>
          </div>

          {/* Second Column - With Margin Top */}
          <div className="lg:col-span-1 lg:mt-32">
            <p className="max-w-[263px] md:max-w-[349px] ml-auto lg:ml-0 text-justify md:text-left text-[11px] leading-[20px] tracking-[0em] font-normal text-[#313131] md:text-[12px] md:leading-[20px] md:tracking-[0.005em] libre-baskerville-regular">
              {data.description1}
            </p>
          </div>

          {/* Third Column - With Margin Top */}
          <div className="lg:col-span-1 lg:mt-32">
            <p className="max-w-[263px] md:max-w-[349px] ml-auto lg:ml-0 text-justify md:text-left text-[11px] leading-[20px] tracking-[0em] font-normal text-[#313131] md:text-[12px] md:leading-[20px] md:tracking-[0.005em] libre-baskerville-regular">
              {data.description2}
            </p>
            {(data.ctaText || data.ctaMobileText) && (
            <Link
              href={data.ctaLink}
              className="mt-16 md:mt-20 mb-4 text-[12px] md:text-[14px] leading-[25px] tracking-[0.07em] inline-block text-[#313131] underline underline-offset-8 decoration-[#7C7C7C] hover:text-gray-700 transition-colors duration-300 libre-baskerville-regular"
            >
              {data.ctaText && <span className="hidden md:inline">{data.ctaText}</span>}
              {data.ctaMobileText && <span className="md:hidden">{data.ctaMobileText}</span>}
            </Link>
            )}
          </div>
        </div>

        {/* Middle Section - Overlapping Images */}
        <div className="relative md:mb-0 lg:mb-16">
          <div className="relative w-full">
            {/* Left Image - Smaller, More Vertical */}
            <div className="relative w-3/4 lg:w-2/5 xl:w-1/2 2xl:w-[45%] aspect-[3/4] lg:aspect-[4/5]">
              <div 
                className={`relative h-[215px] md:h-1/2 w-[200px] md:w-3/4 lg:w-full lg:h-3/4 xl:w-[456px] xl:h-[493px] 2xl:w-[550px] 2xl:h-[600px] z-50 lg:z-0 overflow-hidden ${interactive ? 'cursor-open group' : 'cursor-default'}`}
                {...(interactive ? {
                  onMouseMove: handlePoolMouseMove,
                  onMouseEnter: () => setIsPoolHovering(true),
                  onMouseLeave: () => setIsPoolHovering(false),
                  onClick: handlePoolClick,
                } : {})}
              >
                <Image
                  ref={poolImageRef}
                  src={data.images.poolImage}
                  alt={data.images.poolImageAlt}
                  fill
                  className={`object-cover transition-all duration-300 ${interactive ? 'group-hover:brightness-75' : ''}`}
                />
                {data.images.adImage && (
                  <>
                    <div className="absolute bottom-4 right-0 lg:left-0">
                      <Image
                        src={data.images.adImage}
                        alt={data.images.adImageAlt}
                        width={128} // fallback
                        height={64}
                        className="object-contain w-20 h-10 md:w-32 md:h-16 lg:w-40 lg:h-20 2xl:w-48 2xl:h-24"
                      />
                    </div>
                    <div className="absolute hidden bottom-4 right-0 lg:left-0">
                      <Image
                        src={data.images.adImage}
                        alt={data.images.adImageAlt}
                        width={178} // fallback
                        height={167}
                        className="object-contain h-[167px] w-[178px]"
                      />
                    </div>
                  </>
                )}
                
              </div>
            </div>

            {/* Right Image - Larger, Overlapping */}
            <div className="absolute right-0 top-40 md:top-48 lg:top-60 w-[305px] h-[226px] md:h-[412px] md:w-4/5 lg:w-7/12 xl:w-[680px] xl:h-[469px] xl:right-10 xl:top-[20rem] 2xl:w-[800px] 2xl:h-[570px] 2xl:right-20 2xl:top-[22rem] aspect-[4/3] lg:aspect-[3/2]">
              <div 
                className={`relative h-full overflow-hidden ${interactive ? 'cursor-open group' : 'cursor-default'}`}
                {...(interactive ? {
                  onMouseMove: handleLivingRoomMouseMove,
                  onMouseEnter: () => setIsLivingRoomHovering(true),
                  onMouseLeave: () => setIsLivingRoomHovering(false),
                  onClick: handleLivingRoomClick,
                } : {})}
              >
                <Image
                  ref={livingRoomImageRef}
                  src={data.images.livingRoomImage}
                  alt={data.images.livingRoomImageAlt}
                  fill
                  className={`object-cover transition-all duration-300 ${interactive ? 'group-hover:brightness-75' : ''}`}
                />
                {data.images.openButton && (
                  <div className="">
                    <CircleOutline
                      size="xl"
                      text="more"
                      className="lg:top-24 top-4 right-4 lg:left-44"
                    />
                  </div>
                )}
                
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Heading */}
        <div className="text-center mt-14 md:mt-0 lg:mt-[11rem] xl:mt-[12rem]">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <h3
                className="max-w-[305px] md:max-w-[325px] font-gfsDidot text-[25px] leading-[37px] md:text-[30px] md:leading-[48px] tracking-[-0.01em] text-left font-normal text-[#000000] uppercase">
                {data.heading}{" "}
                <span className="text-[#AF9468] font-gfsDidot italic">
                  {data.headingHighlight}
                </span>{" "}
                {data.headingEnd}
              </h3>
            </div>
            <div className="lg:col-span-3 md:ml-auto md:max-w-[541px] xl:mr-10">
              <p className="lg:mt-12 text-[11px] leading-[18px] tracking-[0em] text-justify md:text-left text-[#313131] md:text-[12px] md:leading-[20px] md:tracking-[0.005em] libre-baskerville-regular">
                {data.bottomDescription}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
