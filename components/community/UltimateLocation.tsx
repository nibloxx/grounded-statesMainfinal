"use client";

import React, { useState } from "react";
import { ProgressLine, UltimateLocationSlider } from "../shared";
import { LocationItem } from "@/types";

interface UltimateLocationProps {
  locations: LocationItem[];
}

const UltimateLocation: React.FC<UltimateLocationProps> = ({ locations }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="pt-32 pb-48 md:pb-54">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-16 md:mb-24 flex items-end justify-center gap-2">
          <p className="font-normal text-[32px] leading-[50px] md:text-[59px] md:leading-[80px] tracking-[-0.01em] text-center uppercase font-gfsDidot text-[#313131]">
            <span className="italic md:text-[40px]">THE</span> ULTIMATE{" "}
            <span className="italic md:text-[40px]">LOCATION</span>
          </p>
        </div>

        {/* Location Slider */}
        <UltimateLocationSlider
          items={locations}
          onSlideChange={handleSlideChange}
        />
      </div>
      <div className="md:hidden mt-12 max-w-[193px] mx-auto">
        <ProgressLine
          totalSlides={locations.length}
          currentSlide={currentSlide}
          lineColor="#DAD9D7"
          fillColor="#82847F"
          height="2px"
        />
      </div>
    </section>
  );
};

export default UltimateLocation;
