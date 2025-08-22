// import React from "react";
// import Image from "next/image";

// interface PeacefulnessSectionProps {
//   // image: string;
//   mainImage: string;
//   topRight: string;
//   bottomRight: string;
//   topLeft: string;
//   rightCenter: string;
//   leftCenter: string;
//   bottomLeft: string;
//   topCenter: string;
//   bottomCenter: string;

//   imageAlt: string;
//   topText: string;
//   mainText: string;
//   description: string;
// }

// const PeacefulnessSection: React.FC<PeacefulnessSectionProps> = ({
//   //   image,
//   mainImage,
//   topRight,
//   rightCenter,
//   bottomRight,
//   topLeft,
//   leftCenter,
//   bottomLeft,
//   topCenter,
//   bottomCenter,
//   imageAlt,
//   topText,
//   mainText,
//   description,
// }) => {
//   return (
//     <section className="relative h-[650px] md:h-[800px] lg:h-[823px] mt-20 md:mt-32">
//       {/* Background Image */}
//       <Image src={image} alt={imageAlt} fill className="object-cover" />

//       {/* Overlay */}
//       <div className="absolute inset-0 bg-black/10"></div>

//       {/* Text Overlays */}
//       <div className="absolute inset-0 p-6 md:p-12 lg:p-16">
//         {/* Top Text - Desktop Only */}
//         <div className="hidden md:block absolute top-6 md:top-20 lg:top-28 left-1/2 transform -translate-x-1/2 text-center">
//           <p className="text-[#545552] leading-[24px] tracking-[0.01em] text-center align-middle font-light libre-baskerville-regular">
//             {topText}
//           </p>
//         </div>

//         {/* Main Text - Centered */}
//         <div className="absolute  max-w-[327px] w-full md:max-w-[917px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
//           <h2 className="text-[42px] leading-[19px] tracking-[-0.04em] md:text-6xl lg:text-[140px] lg:leading-[19px] md:tracking-[-0.04em] font-light text-[#FFFFFF] libre-baskerville-regular text-center md:leading-tight">
//             {mainText}
//           </h2>
//           <p className="text-[#FFFFFF] text-[11px] leading-[18px] libre-baskerville-regular text-center mt-16 block md:hidden">
//             {description}
//           </p>
//         </div>

//         {/* Bottom Description - Desktop Only */}
//         <div className="hidden md:block absolute bottom-6 md:bottom-12 lg:bottom-16 left-1/2 transform -translate-x-1/2 text-center">
//           <p className="md:max-w-[500px] w-full text-[#FFFFFF] text-[14px] leading-[24px] tracking-[0.01em] libre-baskerville-regular text-center">
//             {description}
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PeacefulnessSection;

"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PeacefulnessSectionProps {
  mainImage: string;
  topRight: string;
  bottomRight: string;
  topLeft: string;
  rightCenter: string;
  leftCenter: string;
  bottomLeft: string;
  topCenter: string;
  bottomCenter: string;
  imageAlt: string;
  topText: string;
  mainText: string;
  description: string;
}

const PeacefulnessSection: React.FC<PeacefulnessSectionProps> = ({
  mainImage,
  topRight,
  rightCenter,
  bottomRight,
  topLeft,
  leftCenter,
  bottomLeft,
  topCenter,
  bottomCenter,
  imageAlt,
  topText,
  mainText,
  description,
}) => {
  console.log("project", {
    mainImage,
    topRight,
    bottomRight,
    topLeft,
    leftCenter,
    bottomLeft,
    topCenter,
    bottomCenter,
    imageAlt,
    topText,
    mainText,
    description,
  });
  const sectionRef = useRef<HTMLElement>(null);
  const mainImageRef = useRef<HTMLDivElement>(null);
  const backgroundImagesRef = useRef<HTMLDivElement>(null);

  // Left side vertical slider refs
  const leftTopRef = useRef<HTMLDivElement>(null);
  const leftMiddleRef = useRef<HTMLDivElement>(null);
  const leftBottomRef = useRef<HTMLDivElement>(null);

  // Right side vertical slider refs
  const rightTopRef = useRef<HTMLDivElement>(null);
  const rightMiddleRef = useRef<HTMLDivElement>(null);
  const rightBottomRef = useRef<HTMLDivElement>(null);

  // Center vertical slider refs
  const centerTopRef = useRef<HTMLDivElement>(null);
  const centerBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Set initial states
    gsap.set(mainImageRef.current, {
      scale: 1,
      opacity: 1,
    });

    // Left side vertical slider - initial positions
    gsap.set(leftTopRef.current, { y: 0, opacity: 0.15 });
    gsap.set(leftMiddleRef.current, { y: 0, opacity: 0.6 });
    gsap.set(leftBottomRef.current, { y: 0, opacity: 0.25 });

    // Right side vertical slider - initial positions
    gsap.set(rightTopRef.current, { y: 0, opacity: 0.15 });
    gsap.set(rightMiddleRef.current, { y: 0, opacity: 0.6 });
    gsap.set(rightBottomRef.current, { y: 0, opacity: 0.25 });

    // Center images - initial positions (viewport-relative)
    gsap.set(centerTopRef.current, { y: -200, opacity: 0 });
    gsap.set(centerBottomRef.current, { y: 200, opacity: 0 });

    // Create the scroll-triggered animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        pin: true,
        pinSpacing: true,
        onUpdate: (self) => {
          // Update scroll progress for smooth animation
          const progress = self.progress;

          // Main image scales down and changes to portrait shape
          const mainImage = mainImageRef.current;
          if (mainImage) {
            // Scale down the overall size
            gsap.set(mainImage, {
              opacity: 1 - progress * 0.1,
            });
            let newWidth = 100;
            let newHeight = 100;
            console.log("window.innerWidth: " + window.innerWidth);
            if (window.innerWidth >= 640 && window.innerWidth <= 1024) {
              console.log("mobile");
              newWidth = 100 - progress * 50; // From 100% to 40% (narrow width)
              newHeight = 100 - progress * 40; // From 100% to 75% (tall height)
            } else if (window.innerWidth >= 340 && window.innerWidth < 640) {
              console.log("mobile");
              newWidth = 100 - progress * 52; // From 100% to 40% (narrow width)
              newHeight = 100 - progress * 60; // From 100% to 75% (tall height)
            } else {
              // Change width and height to create portrait shape and match center images width
              newWidth = 100 - progress * 73; // From 100% to 27% (narrow width)
              newHeight = 100 - progress * 35; // From 100% to 75% (tall height)
            }

            gsap.set(mainImage.querySelector("div"), {
              width: `${newWidth}%`,
              height: `${newHeight}%`,
            });
          }

          // Left side vertical slider animation
          if (leftTopRef.current) {
            gsap.set(leftTopRef.current, {
              y: -progress * 150, // Move up and exit at same rate as bottom image
              opacity: 1 - progress * 1, // Fade out completely
            });
          }
          if (leftMiddleRef.current) {
            gsap.set(leftMiddleRef.current, {
              y: -progress * 80, // Move up to top position smoothly
              opacity: 1, // Stay fully visible
            });
          }
          if (leftBottomRef.current) {
            gsap.set(leftBottomRef.current, {
              y: -progress * 80, // Slide up at same rate as top image disappears
              opacity: 1, // Stay fully visible
            });
          }

          // Right side vertical slider animation (same as left)
          if (rightTopRef.current) {
            gsap.set(rightTopRef.current, {
              y: -progress * 150, // Move up and exit at same rate as bottom image
              opacity: 1 - progress * 1, // Fade out completely
            });
          }
          if (rightMiddleRef.current) {
            gsap.set(rightMiddleRef.current, {
              y: -progress * 80, // Move up to top position smoothly
              opacity: 1, // Stay fully visible
            });
          }
          if (rightBottomRef.current) {
            gsap.set(rightBottomRef.current, {
              y: -progress * 80, // Slide up at same rate as top image disappears
              opacity: 1, // Stay fully visible
            });
          }

          // Center vertical slider - starts appearing when main image is 35-40% completed
          if (progress > 0.85) {
            // Start showing when main image is 35% of original size
            const centerSliderProgress = (progress - 0.35) / 0.65; // Normalize to 0-1

            console.log(
              "Center slider progress:",
              centerSliderProgress,
              "Progress:",
              progress
            );

            if (centerTopRef.current) {
              const topY = -200 + centerSliderProgress * 200;
              gsap.set(centerTopRef.current, {
                y: topY,
                opacity: centerSliderProgress,
              });
              console.log(
                "Top image Y:",
                topY,
                "Opacity:",
                centerSliderProgress
              );
            }
            if (centerBottomRef.current) {
              // Only animate bottom image on extra large devices (2xl and above)
              // if (window.innerWidth >= 1536) { // 2xl breakpoint
              const bottomY = 200 - centerSliderProgress * 200;
              gsap.set(centerBottomRef.current, {
                y: bottomY,
                opacity: centerSliderProgress,
              });
              console.log(
                "Bottom image Y:",
                bottomY,
                "Opacity:",
                centerSliderProgress
              );
              // }
            }
          } else {
            // Hide center slider initially
            if (centerTopRef.current)
              gsap.set(centerTopRef.current, { opacity: 0, y: -200 });
            if (centerBottomRef.current)
              gsap.set(centerBottomRef.current, { opacity: 0, y: 200 });
          }
        },
      },
    });

    // Cleanup function
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill();
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full overflow-hidden"
    >
      {/* Dark overlay for entire section */}
      {/* Center Vertical Slider - Hidden Initially, Appears During Animation */}
      <div className="fixed inset-0 z-15 flex items-center justify-center pointer-events-none">
        <div className="relative w-[calc(50%-1rem)] lg:w-[calc(30%-2rem)] h-[calc(80%-2rem)] max-w-[350px] max-h-[800px] flex flex-col justify-between mb-8">
          {/* Top background image - comes from above */}
          <div
            ref={centerTopRef}
            className="absolute w-full h-[calc(50%-0.5rem)] -top-[200px] lg:-top-[350px] xl:-top-[300px] mb-16"
          >
            <Image
              src={topCenter}
              alt={`${imageAlt} - Center Top`}
              fill
              className="object-cover"
            />
          </div>

          {/* Bottom background image - comes from below, hidden on laptop, visible on extra large */}
          <div
            ref={centerBottomRef}
            className="absolute w-full h-[calc(50%-0.5rem)] md:hidden 2xl:block"
            style={{ bottom: "-200px" }}
          >
            <Image
              src={bottomCenter}
              alt={`${imageAlt} - Center Bottom`}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0  z-5"></div>
      {/* Left Side Vertical Slider */}
      <div className="xl:ps-16 absolute left-0 xl:left-4 top-0 bottom-0 w-[calc(20%-1rem)] xl:w-[calc(30%-1rem)] flex flex-col overflow-hidden">
        {/* First image - will slide up and disappear */}
        <div
          ref={leftTopRef}
          className="relative w-full h-[calc(25%-0.5rem)] mb-2"
        >
          <Image
            src={topLeft}
            alt={`${imageAlt} - Left Top`}
            fill
            className="object-cover"
          />
        </div>
        {/* Second image - will slide up to top position, taller than others */}
        <div
          ref={leftMiddleRef}
          className="relative w-full h-[calc(75%-0.5rem)] mb-8"
        >
          <Image
            src={leftCenter}
            alt={`${imageAlt} - Left Middle`}
            fill
            className="object-cover"
          />
        </div>
        {/* Third image - almost hidden initially, slides up from bottom */}
        <div
          ref={leftBottomRef}
          className="relative w-full h-[calc(40%-0.5rem)] -mb-[calc(60%-0.5rem)]"
        >
          <Image
            src={bottomLeft}
            alt={`${imageAlt} - Left Bottom`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Right Side Vertical Slider */}
      <div className="xl:pe-16 absolute right-0 xl:right-4 top-0 bottom-0 w-[calc(20%-1rem)] xl:w-[calc(30%-1rem)] flex flex-col overflow-hidden">
        {/* First image - will slide up and disappear */}
        <div
          ref={rightTopRef}
          className="relative w-full h-[calc(25%-0.5rem)] mb-2"
        >
          <Image
            src={topRight}
            alt={`${imageAlt} - Right Top`}
            fill
            className="object-cover"
          />
        </div>
        {/* Second image - will slide up to top position, taller than others */}
        <div
          ref={rightMiddleRef}
          className="relative w-full h-[calc(75%-0.5rem)] mb-8"
        >
          <Image
            src={rightCenter}
            alt={`${imageAlt} - Right Middle`}
            fill
            className="object-cover"
          />
        </div>
        {/* Third image - almost hidden initially, slides up from bottom */}
        <div
          ref={rightBottomRef}
          className="relative w-full h-[calc(40%-0.5rem)] -mb-[calc(60%-0.5rem)]"
        >
          <Image
            src={bottomRight}
            alt={`${imageAlt} - Right Bottom`}
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Main Image - Starts Full Screen */}
      <div
        ref={mainImageRef}
        className="absolute inset-0 z-10 flex items-center justify-center"
      >
        <div className="relative w-full h-full">
          <Image src={mainImage} alt={imageAlt} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
      </div>

      {/* Bottom gradient overlay for text visibility - positioned above main image */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-15"></div>

      {/* Black shade overlay on bottom half of section */}
      <div className="absolute bottom-0 left-0 right-0 h-4/5 bg-gradient-to-t from-black/30 via-black/10 to-transparent z-5"></div>

      {/* Text Overlays */}
      <div className="absolute inset-0 p-6 md:p-12 lg:p-16 z-20">
        {/* Top Text - Desktop Only */}
        <div className="hidden md:block absolute top-6 md:top-20 lg:top-28 left-1/2 transform -translate-x-1/2 text-center">
          <p className="text-[#545552] leading-[24px] tracking-[0.01em] text-center align-middle font-light libre-baskerville-regular">
            {topText}
          </p>
        </div>

        {/* Main Text - Centered */}
        <div className="absolute max-w-[327px] w-full md:max-w-[917px] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-[42px] leading-[19px] tracking-[-0.04em] md:text-6xl lg:text-[140px] lg:leading-[19px] md:tracking-[-0.04em] font-light text-[#FFFFFF] libre-baskerville-regular text-center md:leading-tight">
            {mainText}
          </h2>
          <p className="text-[#FFFFFF] text-[11px] leading-[18px] libre-baskerville-regular text-center mt-16 block md:hidden">
            {description}
          </p>
        </div>

        {/* Bottom Description - Desktop Only */}
        <div className="hidden md:block absolute bottom-6 md:bottom-12 lg:bottom-16 left-1/2 transform -translate-x-1/2 text-center">
          <p className="md:max-w-[500px] w-full text-[#FFFFFF] text-[14px] leading-[24px] tracking-[0.01em] libre-baskerville-regular text-center">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PeacefulnessSection;
