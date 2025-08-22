"use client";

import React, { useState, useEffect, useRef } from "react";
import OptimizedImage from "../shared/OptimizedImage";
import { CgLayoutGrid } from "react-icons/cg";
import { OverviewButton } from "../shared/ClientOverviewButton";
import { MenuItem } from "@/constants/menuData";
import Link from "next/link";

const images = {
  logo: "/images/grounded-estates-logo.png",
  main: "/images/hero-main.png",
  topLeft: "/images/hero-top-left.jpg",
  bottomLeft: "/images/hero-bottom-left.jpg",
  topRight: "/images/hero-top-right.jpg",
  bottomRight: "/images/hero-bottom-right.png",
};

const Hero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;

        // Calculate scroll progress within this section
        // Start animation when section is 30% visible, complete when 70% scrolled
        const startThreshold = 0.3;
        const endThreshold = 0.7;

        // Calculate how much of the section is visible
        const visibleRatio = Math.max(
          0,
          Math.min(
            1,
            (windowHeight - sectionTop) / (windowHeight + sectionHeight)
          )
        );

        // Apply thresholds to create a more controlled animation
        const scrollProgress = Math.max(
          0,
          Math.min(
            1,
            (visibleRatio - startThreshold) / (endThreshold - startThreshold)
          )
        );

        setScrollY(scrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // handleScroll(); // Initial call

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (item: MenuItem) => {
    console.log("Menu item clicked:", item);
    // Handle navigation based on item type
    switch (item.type) {
      case "villa":
        // Navigate to villa page
        console.log(`Navigate to villa ${item.code}`);
        break;
      case "community":
        // Navigate to communities page
        console.log("Navigate to communities");
        break;
      case "about":
        // Navigate to about page
        console.log("Navigate to about us");
        break;
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-[800px] md:h-[1000px] lg:h-auto bg-[#F3EEE7] md:bg-[#F9F8F4] flex flex-col justify-center pb-32 md:pb-40 overflow-hidden"
    >
      {/* <div className=""> */}
      <Link href="/">
        <div className="flex justify-center pt-8 md:pb-8">
          <OptimizedImage
            src={images.logo}
            alt="logo"
            width={330}
            height={40}
            className=""
            priority={true}
          />
        </div>
      </Link>
      <div className="h-full grid place-items-center w-full">
        {/* Main Image */}
        <div className="relative max-w-[945px] w-full">
          <div className="lg:w-1/2 md:w-1/3 w-3/5 h-[400px] md:h-[600px] mx-auto">
            <OptimizedImage
              src={images.main}
              alt="Main Living Room"
              width={726}
              height={1171}
              priority={true}
              sizes="(max-width: 768px) 50vw, (max-width: 1024px) 30vw, 40vw"
              className="w-full h-full object-cover"
              quality={100}
            />
          </div>
          {/* Top Left Image */}
          <div
            className="absolute top-4 md:top-16 left-2 md:left-16 w-[85px] h-[106px] md:w-[160px] md:h-[200px] transition-transform duration-500 ease-out"
            style={{
              transform: `translate(${-scrollY * 40}px, ${
                -scrollY * 30
              }px) scale(${1 + scrollY * 0.04})`,
              WebkitTransform: `translate(${-scrollY * 40}px, ${
                -scrollY * 30
              }px) scale(${1 + scrollY * 0.04})`,
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <OptimizedImage
              src={images.topLeft}
              alt="Decor Detail"
              width={160}
              height={200}
              priority={false}
              sizes="(max-width: 768px) 85px, 160px"
              className="object-cover w-full h-full"
              quality={100}
            />
          </div>

          {/* Bottom Left Image */}
          <div
            className="absolute -bottom-8 md:-bottom-32 left-16 md:left-40  w-[93px] h-[115px] md:w-[160px] md:h-[200px] transition-transform duration-500 ease-out"
            style={{
              transform: `translate(${-scrollY * 60}px, ${
                scrollY * 50
              }px) scale(${1 + scrollY * 0.06})`,
              WebkitTransform: `translate(${-scrollY * 60}px, ${
                scrollY * 50
              }px) scale(${1 + scrollY * 0.06})`,
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <OptimizedImage
              src={images.bottomLeft}
              alt="Decor Detail"
              width={160}
              height={200}
              priority={false}
              sizes="(max-width: 768px) 93px, 160px"
              className="object-cover w-full h-full"
              quality={100}
            />
          </div>

          {/* Top Right Image */}
          <div
            className="absolute top-16 md:top-32 right-2 md:right-12  w-[70px]  md:w-[160px] h-[111px] md:h-[200px] transition-transform duration-500 ease-out"
            style={{
              transform: `translate(${scrollY * 50}px, ${
                -scrollY * 25
              }px) scale(${1 + scrollY * 0.05})`,
              WebkitTransform: `translate(${scrollY * 50}px, ${
                -scrollY * 25
              }px) scale(${1 + scrollY * 0.05})`,
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <OptimizedImage
              src={images.topRight}
              alt="Decor Detail"
              width={160}
              height={200}
              priority={false}
              sizes="(max-width: 768px) 70px, 160px"
              className="object-cover w-full h-full"
              quality={100}
            />
          </div>

          {/* Bottom Right Image */}
          <div
            className="absolute -bottom-6 md:-bottom-12 right-12 md:right-36   w-[91px] h-[73px] md:w-[170px] md:h-[120px] transition-transform duration-500 ease-out"
            style={{
              transform: `translate(${scrollY * 60}px, ${
                scrollY * 50
              }px) scale(${1 + scrollY * 0.07})`,
              WebkitTransform: `translate(${scrollY * 60}px, ${
                scrollY * 50
              }px) scale(${1 + scrollY * 0.07})`,
              willChange: 'transform',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <OptimizedImage
              src={images.bottomRight}
              alt="Decor Detail"
              width={170}
              height={120}
              priority={false}
              sizes="(max-width: 768px) 91px, 170px"
              className="object-cover w-full h-full"
              quality={75}
            />
          </div>

          {/* Overview Button */}
          <div className="hidden lg:block fixed top-[40px] right-4 transform -translate-y-1/2 z-[60]">
            <OverviewButton
              className="bg-[#00000066]  backdrop-blur-[10px] hover:bg-black/40 hover:backdrop-blur-xl text-white border-none"
              onMenuItemClick={handleMenuItemClick}
            />
          </div>
        </div>
      </div>
      {/* Overview Button */}
      <div className="lg:hidden fixed bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-auto z-[60]">
        <OverviewButton
          showBorder={false}
          className="bg-[#00000066] backdrop-blur-[10px] hover:bg-black/40 hover:backdrop-blur-xl text-white border-none flex items-center justify-center gap-1 px-4 py-2 rounded-full text-sm"
          onMenuItemClick={handleMenuItemClick}
        />
      </div>
    </section>
  );
};

export default Hero;
