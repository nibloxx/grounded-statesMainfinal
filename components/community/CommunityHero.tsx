"use client";

import React from "react";
import { OverviewButton } from "@/components/shared";
import { CommunityItem } from "@/types";
import Image from "next/image";
import Link from "next/link";

interface CommunityDetailHeroProps {
  community: CommunityItem;
}

const CommunityDetailHero: React.FC<CommunityDetailHeroProps> = ({
  community,
}) => {
  return (
    <div className="relative h-screen">
      {/* Full Screen Background Image */}
      <div className="absolute inset-0">
        <Image
          src={community.image}
          alt={community.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* <div className="absolute inset-0 bg-black/30"></div> */}
      </div>

      {/* Logo at top center */}
      <Link href={"/"}>
        <div className="absolute top-12 md:top-6 left-1/2 transform -translate-x-1/2 z-10">
          <Image
            src="/images/grounded-estates-logo.png"
            alt="logo"
            width={500}
            height={500}
            className="h-[36px] md:h-[40px] w-[300px] md:w-[330px] object-contain"
          />
        </div>
      </Link>

      {/* Overview Button */}
      <div className="hidden lg:block fixed top-[40px] right-4 transform -translate-y-1/2 z-[60]">
        <OverviewButton
          className="bg-[#00000066] backdrop-blur-[10px] hover:bg-black/40 hover:backdrop-blur-xl text-white border-none"
        />
      </div>
      
      {/* Overview Button - Mobile */}
      <div className="fixed bottom-0 z-[60] left-1/2 -translate-x-1/2 lg:hidden flex justify-center transform -translate-y-1/2">
        <OverviewButton
          showBorder={false}
          className="bg-[#00000066] backdrop-blur-[10px] hover:bg-black/40 hover:backdrop-blur-xl text-white border-none flex items-center justify-center gap-1 px-4 py-2 rounded-full text-sm"
        />
      </div>

      {/* Text Overlay at Bottom */}
      <div className="absolute bottom-0 md:bottom-8 lg:bottom-12 xl:bottom-14 left-1/2 transform -translate-x-1/2 z-10 w-full px-4">
        <p className="text-justify md:text-center font-normal text-[30px] leading-[20px] tracking-[-0.01em] md:text-[55px] lg:text-[75px] xl:text-[100px] 2xl:text-[110px] md:leading-[13px] md:tracking-[-0.01em] gfs-didot-regular text-[#F9F8F4E5] w-full uppercase">
          {community.location}
        </p>
      </div>
    </div>
    // </Link>

    //   {/* Overview Button - fixed across breakpoints */}
    //   <div className="fixed bottom-20 left-1/2 -translate-x-1/2 lg:left-auto lg:right-8 lg:top-64  lg:-translate-y-1/2 lg:translate-x-0 z-50">
    //     <OverviewButton
    //       className="bg-transparent md:bg-black/40 md:hover:bg-black text-white border-none"
    //       showBorder={false}
    //     >
    //       Overview
    //     </OverviewButton>
    //   </div>

    //   {/* Text Overlay at Bottom */}
    //   <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 w-full px-4">
    //     <p className="text-center text-xl sm:text-2xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-widest gfs-didot-regular text-[#F9F8F4E5] w-full">
    //       {community.location}
    //     </p>
    //   </div>
    // </div>
  );
};

export default CommunityDetailHero;
