// "use client";
// import React from "react";
// import Image from "next/image";
// import { CircleOutline, InteractiveElement } from "../shared";
// import { useRouter } from "next/navigation";

// interface CommunityHeroProps {
//   image: string;
//   imageAlt: string;
//   topHeading: string;
//   subHeading1: string;
//   subHeading2: string;
//   aboutTitle: string;
//   aboutSubtitle: string;
//   aboutDescription: string;
//   circleText?: string;
// }

// const CommunityHero2: React.FC<CommunityHeroProps> = ({
//   image,
//   imageAlt,
//   topHeading,
//   subHeading1,
//   subHeading2,
//   aboutTitle,
//   aboutSubtitle,
//   aboutDescription,
//   circleText = "more",
// }) => {
//   const router = useRouter();
//   // Split subHeading2 into words and apply styling
//   const words = subHeading2.split(" ");
//   const renderStyledWords = () => {
//     return words.map((word, index) => {
//       const isOdd = index % 2 === 0; // 0-based index, so even indices are odd words
//       const isEven = index % 2 === 1; // 1-based index, so odd indices are even words

//       if (isOdd) {
//         return (
//           <p
//             key={index}
//             className="gfs-didot-regular-italic text-[#FFFFFF] text-[28px] leading-[40px] tracking-[-0.01em] md:leading-[80px] md:text-[52x]"
//           >
//             {word}
//           </p>
//         );
//       } else {
//         return (
//           <span
//             key={index}
//             className="gfs-didot-regular text-[#FFFFFF] text-[28px] leading-[40px] tracking-[-0.01em] md:leading-[80px] md:text-[72px]"
//           >
//             {word}
//           </span>
//         );
//       }
//     });
//   };

//   return (
//     <div className="relative h-full w-full group cursor-pointer">
//       <Image src={image} alt={imageAlt} fill className="object-cover" />
//       <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>

//       {/* Text Overlay */}
//       <div className="absolute inset-0 flex flex-col justify-between px-6 py-12 md:p-12 lg:py-8 lg:px-16">
//         {/* Top Text */}
//         <div className="text-center">
//           <p className="text-[#F9F8F4] text-xs mb-2 libre-baskerville-regular">
//             {topHeading}
//           </p>
//           <h2 className="text-[28px] leading-[40px] tracking-[-0.01em] md:leading-[80px] md:text-[72px]  text-[#FFFFFF] gfs-didot-regular">
//             {subHeading1}
//           </h2>
//           <div className="flex items-baseline justify-center gap-3 md:mt-3 flex-wrap">
//             {renderStyledWords()}
//           </div>
//         </div>

//         {/* Circle positioned absolutely - only visible on hover */}
//         <div className="lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
//           <CircleOutline
//             size="xxl"
//             className=" bottom-1/2 md:bottom-36 right-24 md:left-96"
//             text={circleText}
//             onClick={() => {
//               router.push(`/community/1`);
//             }}
//           />
//         </div>

//         {/* Bottom Content */}
//         <div className="relative flex items-center justify-between">
//           {/* Left Text Block */}
//           <div className="text-white md:w-3/4">
//             <p className="text-[#FFFFFF] font-normal text-[10px] leading-[19px] tracking-[0.12em] font-helvetica mb-2 md:mb-3 md:libre-baskerville-regular">
//               {aboutTitle}
//             </p>
//             <h3 className="text-[#FFFFFF] font-normal text-[14px] leading-[25px] md:text-[18px] md:leading-[19px] mb-2 md:mb-3 libre-baskerville-regular">
//               {aboutSubtitle}
//             </h3>
//             <p className="text-[#FFFFFF] font-normal text-[11px] leading-[18px] text-justify md:text-left tracking-[0em] md:text-[12px] md:leading-[20px] md:tracking-[0.005em] libre-baskerville-regular">
//               {aboutDescription}
//             </p>
//           </div>
//           <div className="hidden md:block">
//             <InteractiveElement />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CommunityHero2;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import { CircleOutline, InteractiveElement } from "../shared";
import { useRouter } from "next/navigation";

interface CommunityHeroProps {
  image: string;
  imageAlt: string;
  topHeading: string;
  subHeading1: string;
  subHeading2: string;
  aboutTitle: string;
  aboutSubtitle: string;
  aboutDescription: string;
  circleText?: string;
}

const CommunityHero2: React.FC<CommunityHeroProps> = ({
  image,
  imageAlt,
  topHeading,
  subHeading1,
  subHeading2,
  aboutTitle,
  aboutSubtitle,
  aboutDescription,
  circleText = "more",
}) => {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  //   const rect = e.currentTarget.getBoundingClientRect();
  //   setMousePosition({
  //     x: e.clientX - rect.left,
  //     y: e.clientY - rect.top,
  //   });
  // };

  // Split subHeading2 into words and apply styling
  const words = subHeading2.split(" ");
  const renderStyledWords = () => {
    return words.map((word, index) => {
      const isOdd = index % 2 === 0;
      const isEven = index % 2 === 1;

      if (isOdd) {
        return (
          <p
            key={index}
            className="gfs-didot-regular-italic text-[#FFFFFF] text-[28px] leading-[40px] tracking-[-0.01em] md:leading-[80px] md:text-[52x]"
          >
            {word}
          </p>
        );
      } else {
        return (
          <span
            key={index}
            className="gfs-didot-regular text-[#FFFFFF] text-[28px] leading-[40px] tracking-[-0.01em] md:leading-[80px] md:text-[72px]"
          >
            {word}
          </span>
        );
      }
    });
  };

  return (
    <div
      className="relative h-full w-full group  cursor-open"
      // onMouseMove={handleMouseMove}
      // onMouseEnter={() => setIsHovering(true)}
      // onMouseLeave={() => setIsHovering(false)}
      onClick={() => router.push(`/community/dubai-emirates-hills`)}
    >
      <Image src={image} alt={imageAlt} fill className="object-cover" />
      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between px-6 py-12 md:p-12 lg:py-8 lg:px-16">
        {/* Top Text */}
        <div className="text-center">
          <p className="text-[#F9F8F4] text-xs mb-2 libre-baskerville-regular">
            {topHeading}
          </p>
          <h2 className="text-[28px] leading-[40px] tracking-[-0.01em] md:leading-[80px] md:text-[72px]  text-[#FFFFFF] gfs-didot-regular">
            {subHeading1}
          </h2>
          <div className="flex items-baseline justify-center gap-3 md:mt-3 flex-wrap">
            {renderStyledWords()}
          </div>
        </div>

        <div className="md:block absolute inset-0 items-center justify-center opacity-0 transition-opacity duration-300 pointer-events-none">
          <CircleOutline size="xl" className="z-10 opacity-0" />
        </div>

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
            <CircleOutline size="xxl" text={circleText} />
          </div>
        )} */}

        {/* Bottom Content */}
        <div className="relative flex items-center justify-between">
          {/* Left Text Block */}
          <div className="text-white md:w-3/4">
            <p className="text-[#FFFFFF] font-normal text-[10px] leading-[19px] tracking-[0.12em] font-helvetica mb-2 md:mb-3 md:libre-baskerville-regular">
              {aboutTitle}
            </p>
            <h3 className="text-[#FFFFFF] font-normal text-[14px] leading-[25px] md:text-[18px] md:leading-[19px] mb-2 md:mb-3 libre-baskerville-regular">
              {aboutSubtitle}
            </h3>
            <p className="text-[#FFFFFF] font-normal text-[11px] leading-[18px] text-justify md:text-left tracking-[0em] md:text-[12px] md:leading-[20px] md:tracking-[0.005em] libre-baskerville-regular">
              {aboutDescription}
            </p>
          </div>
          <div className="hidden md:block">
            <InteractiveElement />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityHero2;
