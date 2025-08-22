// "use client";
// import React, { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { motion, AnimatePresence } from "framer-motion";
// import { CircleOutline, InteractiveElement, VideoPlayer } from "../shared";
// import {
//   CommunityHero,
//   PeacefulnessSection,
//   LuxuryDetailsSection,
// } from "./index";
// import { useRouter } from "next/navigation";
// import CommunityHero2 from "./CommunityHero2";

// const CommunitySection: React.FC = () => {
//   const router = useRouter();
//   const fullText =
//     "GROUNDED IS DESIGNING SPACES THAT CAPTURE THE ESSENCE OF THE LAND AND EMBODY ELEGANCE";
//   const totalLetters = fullText.length;
//   const [visibleLetters, setVisibleLetters] = useState(totalLetters);
//   const videoSectionRef = useRef<HTMLDivElement>(null);
//   const sectionContainerRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const clamp = (val: number, min: number, max: number) =>
//       Math.max(min, Math.min(max, val));

//     const handleScroll = () => {
//       if (!sectionContainerRef.current) return;

//       const containerRect = sectionContainerRef.current.getBoundingClientRect();
//       const windowHeight = window.innerHeight;

//       // Container height is set to ~200vh; sticky child is h-screen (100vh)
//       // Progress goes from 0 to 1 while container is pinned (top from 0 to -windowHeight)
//       const totalScrollable = Math.max(1, containerRect.height - windowHeight);
//       const distanceThrough = clamp(-containerRect.top, 0, totalScrollable);
//       const progress = clamp(distanceThrough / totalScrollable, 0, 1);

//       const lettersToShow = Math.round(totalLetters * (1 - progress));
//       setVisibleLetters(clamp(lettersToShow, 0, totalLetters));
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     handleScroll();
//     return () =>
//       window.removeEventListener("scroll", handleScroll as EventListener);
//   }, [totalLetters]);

//   return (
//     <section className="">
//       {/* Jumeirah Golf Estates Section */}
//       <div className="mx-4 md:mx-20 lg:mx-36 h-[700px] md:h-[700px] lg:h-[600px] mb-8">
//         <CommunityHero
//           image="/images/communities/community-1.jpg"
//           imageAlt="Jumeirah Golf Estates"
//           topHeading="JUMEIRAH GOLF ESTATES"
//           subHeading1="OUR COMMUNITY:"
//           subHeading2="JUMEIRAH GOLF ESTATES"
//           aboutTitle="ABOUT THE COMMUNITY"
//           aboutSubtitle="Fostering peaceful living"
//           aboutDescription="Life here flows at a gentler pace. Framed by nature, walking paths, and open skies, the community is thoughtfully designed to bring ease to every day, a quiet setting where peaceful living comes naturally."
//           circleText="more"
//         />
//       </div>
//       <div className=" mx-4 md:mx-12 h-[700px] md:h-[700px] lg:h-[600px] mb-8">
//         <CommunityHero2
//           image="/images/communities/community-1.jpg"
//           imageAlt="Jumeirah Golf Estates"
//           topHeading="DISCOVER OUR COMMUNitIES"
//           subHeading1="JUMEIRAH GOLF ESTATES:"
//           subHeading2="The MAGIC of LIFE"
//           aboutTitle="ABOUT THE COMMUNITY"
//           aboutSubtitle="Fostering peaceful living"
//           aboutDescription="Life here flows at a gentler pace. Framed by nature, walking paths, and open skies, the community is thoughtfully designed to bring ease to every day, a quiet setting where peaceful living comes naturally."
//           circleText="more"
//         />
//       </div>

//       {/* Emirates Hills Section */}
//       <div className="relative mx-4 md:mx-12 h-[700px] md:h-[700px] lg:h-[600px] mb-8 group cursor-pointer">
//         <Image
//           src="/images/communities/community-1.jpg"
//           alt="Arabian Ranches"
//           fill
//           priority
//           sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
//           className="object-cover"
//         />
//         <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>

//         {/* Text Overlay */}
//         <div className="absolute inset-0 flex flex-col justify-between py-6 px-8 md:px-12 md:py-16 lg:py-12 lg:px-20">
//           {/* Top Text */}
//           <div className="text-center space-y-2">
//             <p className="text-white text-xs opacity-85 leading-normal tracking-wide mb-2 libre-baskerville-regular">
//               EMIRATES HILLS
//             </p>
//             <h2 className="text-2xl md:text-5xl lg:text-7xl font-light text-[#F9F8F4] leading-normal tracking-wide gfs-didot-regular">
//               OUR COMMUNITY:
//             </h2>
//             <div className="flex items-end justify-center gap-3">
//               <span className=" gfs-didot-regular text-[#F9F8F4] leading-normal tracking-wide text-2xl md:text-5xl lg:text-7xl">
//                 EMIRATES
//               </span>
//               <p className="gfs-didot-regular-italic text-[#F9F8F4] leading-normal tracking-wide text-xl md:text-3xl lg:text-4xl mb-2">
//                 HILLS
//               </p>
//             </div>
//           </div>
//           {/* Circle positioned absolutely - only visible on hover */}
//           <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//             <CircleOutline
//               size="xl"
//               className="bottom-1/2 md:bottom-1/3 left-16 md:left-auto md:right-80"
//               text="more"
//               onClick={() => {
//                 router.push(`/community/1`);
//               }}
//             />
//           </div>
//           {/* Bottom Content */}
//           <div className="relative flex items-center justify-between">
//             {/* Left Text Block */}
//             <div className="text-white w-3/4">
//               <p className="text-white opacity-80 text-xs libre-baskerville-regular mb-4 ">
//                 ABOUT THE COMMUNITY
//               </p>
//               <h3 className="text-white opacity-90 text-lg  mb-2 libre-baskerville-regular">
//                 Peaceful oasis in the heart of the city
//               </h3>
//               <p className="text-white opacity-90 text-xs leading-relaxed libre-baskerville-regular">
//                 Tucked away in the heart of Dubai, Emirates Hills offers a rare
//                 stillness. Framed by lakes, greenery, and quiet streets, it’s a
//                 secluded oasis where the energy of the city fades into gentle
//                 calm.{" "}
//               </p>
//             </div>

//             <div className="hidden md:block">
//               <InteractiveElement />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Interior Design Section */}
//       <div className="relative h-[200vh]" ref={sectionContainerRef}>
//         <div ref={videoSectionRef} className="sticky top-0 z-10 h-screen">
//           <VideoPlayer
//             commingSoon={false}
//             src="/videos/interior-design.mp4"
//             alt="Interior Design"
//             className="w-full h-full"
//             buttonPosition="bottom-right"
//             buttonSize="lg"
//           />
//           <div className="absolute inset-0 bg-black/20"></div>

//           {/* Text Overlay */}
//           <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 lg:p-16">
//             {/* Center Text Block */}
//             <div className="text-white max-w-3xl mx-auto text-center">
//               <h2 className="text-xl md:text-3xl lg:text-5xl font-light leading-[50px] tracking-widest mb-8 gfs-didot-regular break-words">
//                 {fullText.split("").map((char, index) => (
//                   <motion.span
//                     key={index}
//                     className="inline-block"
//                     initial={{ opacity: 1, y: 0 }}
//                     animate={{
//                       opacity: index < visibleLetters ? 1 : 0,
//                       y: index < visibleLetters ? 0 : -20,
//                     }}
//                     transition={{
//                       duration: 0.5,
//                       ease: "easeOut",
//                       delay: index * 0.02,
//                     }}
//                     style={{
//                       whiteSpace: char === " " ? "pre" : "normal",
//                     }}
//                   >
//                     {char === " " ? " " : char}
//                   </motion.span>
//                 ))}
//               </h2>
//             </div>
//           </div>
//         </div>
//         {/* Spacer div to maintain scroll height when sticky */}
//         {visibleLetters > 0 && visibleLetters < totalLetters && (
//           <div className="h-[600px] md:h-[700px] lg:h-[800px]"></div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default CommunitySection;

"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CircleOutline, InteractiveElement, VideoPlayer } from "../shared";
import { CommunityHero } from "./index";
import { useRouter } from "next/navigation";
import CommunityHero2 from "./CommunityHero2";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const CommunitySection: React.FC = () => {
  const router = useRouter();
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const [activeHero, setActiveHero] = useState<"first" | "second">("first");
  const textRef = useRef<HTMLHeadingElement>(null);

  const heroImageRef = useRef<HTMLDivElement>(null);

  // Hero section transition effect (mobile + desktop)
  useEffect(() => {
    if (!heroImageRef.current) return;

    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    
    if (mediaQuery.matches) {
      // Desktop animation (unchanged)
      gsap.fromTo(
        heroImageRef.current,
        {
          scale: 0.9,
        },
        {
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroImageRef.current,
            start: "top bottom",
            end: "center center",
            scrub: 1,
          },
        }
      );
    } else {
      // Mobile animation (more subtle)
      gsap.fromTo(
        heroImageRef.current,
        {
          scale: 0.95, // start closer to full size
        },
        {
          scale: 1,
          ease: "power1.out", // gentler easing
          scrollTrigger: {
            trigger: heroImageRef.current,
            start: "top bottom",
            end: "center center", 
            scrub: 0.5, // smoother, less lag
          },
        }
      );
    }
  }, []);

  // Existing text animation (unchanged)
  useEffect(() => {
    if (!textRef.current) return;

    const split = new SplitType(textRef.current, { types: "chars" });
    const chars = split.chars;

    gsap.fromTo(
      chars,
      { opacity: 1, y: 0 },
      {
        opacity: 0,
        y: -50,
        stagger: { amount: 1, from: "random" },
        ease: "power1.out",
        scrollTrigger: {
          trigger: textRef.current?.parentElement?.parentElement,
          start: "top top",
          end: "+=300%",
          scrub: true,
          pin: true,
        },
      }
    );

    return () => {
      split.revert();
    };
  }, []);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="">
      {/* Hero Sections Container */}
      <div
        ref={heroContainerRef}
        className="relative h-[700px] md:h-[700px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px] mb-8 overflow-hidden"
      >
        <AnimatePresence mode="wait">
          {activeHero === "first" && (
            <motion.div
              key="first-hero"
              ref={heroImageRef}
              // initial={{ y: 0 }}
              // animate={{ y: 0 }}
              // exit={{ y: -100 }}
              // transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="h-full w-full lg:px-12"
            >
              <CommunityHero
                image="/images/communities/community-1.jpg"
                imageAlt="Jumeirah Golf Estates"
                topHeading="JUMEIRAH GOLF ESTATES"
                subHeading1="OUR COMMUNITY:"
                subHeading2="JUMEIRAH GOLF ESTATES"
                aboutTitle="ABOUT THE COMMUNITY"
                aboutSubtitle="Fostering peaceful living"
                aboutDescription="Life here flows at a gentler pace. Framed by nature, walking paths, and open skies, the community is thoughtfully designed to bring ease to every day, a quiet setting where peaceful living comes naturally."
                circleText="more"
              />
            </motion.div>
          )}

          {activeHero === "second" && (
            <motion.div
              key="second-hero"
              // initial={{ y: 100 }}
              // animate={{ y: 0 }}
              // exit={{ y: 100 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="h-full w-full lg:px-12"
            >
              <CommunityHero2
                image="/images/communities/community-1.jpg"
                imageAlt="Jumeirah Golf Estates"
                topHeading="DISCOVER OUR COMMUNITIES"
                subHeading1="JUMEIRAH GOLF ESTATES:"
                subHeading2="The MAGIC of LIFE"
                aboutTitle="ABOUT THE COMMUNITY"
                aboutSubtitle="Fostering peaceful living"
                aboutDescription="Life here flows at a gentler pace. Framed by nature, walking paths, and open skies, the community is thoughtfully designed to bring ease to every day, a quiet setting where peaceful living comes naturally."
                circleText="more"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Emirates Hills Section */}
      <div
        // onMouseMove={handleMouseMove}
        // onMouseEnter={() => setIsHovering(true)}
        // onMouseLeave={() => setIsHovering(false)}
        onClick={() => router.push(`/community/dubai-emirates-hills`)}
        className="relative cursor-open lg:mx-12 h-[700px] md:h-[700px] lg:h-[700px] xl:h-[800px] 2xl:h-[900px] mb-8 group"
      >
        <Image
          src="/images/communities/community-2.png"
          alt="Jumeirah Golf Estates"
          fill
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>

        <div className="absolute inset-0 flex flex-col justify-between py-6 px-8 md:px-12 md:py-16 lg:py-12 lg:px-20">
          <div className="text-center space-y-2">
            <p className="text-white text-xs opacity-85 leading-normal tracking-wide mb-2 libre-baskerville-regular">
              EMIRATES HILLS
            </p>
            <h2 className="text-2xl md:text-5xl lg:text-7xl font-light text-[#F9F8F4] leading-normal tracking-wide gfs-didot-regular">
              OUR COMMUNITY:
            </h2>
            <div className="flex items-end justify-center gap-3">
              <span className="gfs-didot-regular text-[#F9F8F4] leading-normal tracking-wide text-2xl md:text-5xl lg:text-7xl">
                EMIRATES
              </span>
              <p className="gfs-didot-regular-italic text-[#F9F8F4] leading-normal tracking-wide text-xl md:text-3xl lg:text-4xl mb-2">
                HILLS
              </p>
            </div>
          </div>

          <div className="hidden md:block absolute inset-0 items-center justify-center opacity-0 transition-opacity duration-300 pointer-events-none">
            <CircleOutline
              size="xl"
              className="z-10 opacity-0"
              text="more"
              onClick={() => router.push(`/community/jumeirah-golf-estates`)}
            />
            {/* Circle that follows mouse position */}
            {/* {isHovering && (
              <div
                className="fixed pointer-events-none z-50" // Changed to fixed positioning
                style={{
                  left: `${mousePosition.x}px`,
                  top: `${mousePosition.y}px`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <CircleOutline
                  size="xl"
                  text="more"
                  onClick={() => router.push(`/community/jumeirah-golf-estates`)}
                />
              </div>
            )} */}
          </div>

          <div className="relative flex items-center justify-between">
            <div className="text-white w-3/4">
              <p className="text-white opacity-80 text-xs libre-baskerville-regular mb-4">
                ABOUT THE COMMUNITY
              </p>
              <h3 className="text-white opacity-90 text-lg mb-2 libre-baskerville-regular">
                Peaceful oasis in the heart of the city
              </h3>
              <p className="text-white opacity-90 text-xs leading-relaxed libre-baskerville-regular">
                Tucked away in the heart of Dubai, Emirates Hills offers a rare
                stillness. Framed by lakes, greenery, and quiet streets,
                it&apos;s a secluded oasis where the energy of the city fades
                into gentle calm.
              </p>
            </div>
            <div className="hidden md:block">
              <InteractiveElement />
            </div>
          </div>
        </div>
      </div>

      {/* Interior Design Section */}
      <div className="relative h-[400vh]">
        <div className=" h-screen">
          <VideoPlayer
            commingSoon={false}
            src="/videos/interior-design.mp4"
            alt="Interior Design"
            className="w-full h-full"
            buttonPosition="bottom-right"
            buttonSize="lg"
          />
          <div className="absolute inset-0 bg-black/20"></div>

          <div className="absolute inset-0 flex items-center justify-center p-8">
            <span ref={textRef} className="text-white text-center" style={{ wordSpacing: '0.5rem' }}>
              <span className="font-made-mirage font-normal text-[32px] md:text-[56px] leading-[32px] md:leading-[55px] tracking-[-0.03em] text-center uppercase mr-2">
                GROUNDED
              </span>
              <span className="font-made-mirage font-normal text-[22px] md:text-[30px] leading-[32px] md:leading-[55px] tracking-[-0.03em] text-center uppercase mr-2">
                IS
              </span>
              <span className="font-made-mirage font-normal text-[32px] md:text-[56px] leading-[32px] md:leading-[55px] tracking-[-0.03em] text-center uppercase mr-2">
                DESIGNING
              </span>
              <br />
              <span className="font-made-mirage font-normal text-[32px] md:text-[56px] leading-[32px] md:leading-[55px] tracking-[-0.03em] text-center uppercase mr-2">
                SPACES
              </span>
              <span className="font-made-mirage font-normal text-[22px] md:text-[30px] leading-[32px] md:leading-[55px] tracking-[-0.03em] text-center uppercase mr-2">
                THAT
              </span>
              <span className="font-made-mirage font-normal text-[32px] md:text-[56px] leading-[32px] md:leading-[55px] tracking-[-0.03em] text-center uppercase mr-2">
                CAPTURE
              </span>
              <span className="font-made-mirage font-normal text-[22px] md:text-[30px] leading-[32px] md:leading-[55px] tracking-[-0.03em] text-center uppercase mr-2">
                THE
              </span>
              <br />
              <span className="font-made-mirage font-normal text-[32px] md:text-[56px] leading-[32px] md:leading-[55px] tracking-[-0.03em] text-center uppercase mr-2">
                ESSENCE
              </span>
              <span className="font-made-mirage font-normal text-[22px] md:text-[30px] leading-[32px] md:leading-[55px] tracking-[-0.03em] text-center uppercase mr-2">
                OF THE
              </span>
              <span className="font-made-mirage font-normal text-[32px] md:text-[56px] leading-[32px] md:leading-[55px] tracking-[-0.03em] text-center uppercase mr-2">
                LAND
              </span>
              <span className="font-made-mirage font-normal text-[22px] md:text-[30px] leading-[32px] md:leading-[55px] tracking-[-0.03em] text-center uppercase mr-2">
                AND
              </span>
              <br />
              <span className="font-made-mirage font-normal text-[22px] md:text-[30px] leading-[32px] md:leading-[55px] tracking-[-0.03em] text-center uppercase mr-2">
                EMODY
              </span>
              <span className="font-made-mirage font-normal text-[32px] md:text-[56px] leading-[32px] md:leading-[55px] tracking-[-0.03em] text-center uppercase">
                ELEGANCE
              </span>
            </span>
          </div>
        </div>
        {/* <div className="h-[600px] md:h-[700px] lg:h-[800px]"></div> */}
      </div>
    </section>
  );
};

export default CommunitySection;
