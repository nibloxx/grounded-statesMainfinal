"use client";

import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CenterModeSlider.css";
import ImageModal from "./ImageModal";

interface SliderItem {
  id: number;
  image: string;
  alt: string;
  title: string;
  [key: string]: any;
}

interface CenterModeSliderProps {
  items: SliderItem[];
  renderCard?: (item: SliderItem, index: number) => React.ReactNode;
  slidesToShow?: number;
  centerMode?: boolean;
  centerPadding?: string;
  autoplay?: boolean;
  autoplaySpeed?: number;
  dots?: boolean;
  arrows?: boolean;
  infinite?: boolean;
  speed?: number;
  className?: string;
  gap?: number;
  responsive?: Array<{
    breakpoint: number;
    settings: {
      slidesToShow?: number;
      slidesToScroll?: number;
      centerMode?: boolean;
      centerPadding?: string;
      dots?: boolean;
      arrows?: boolean;
    };
  }>;
  onSlideChange?: (index: number) => void;
}

const CenterModeSlider: React.FC<CenterModeSliderProps> = ({
  items,
  renderCard,
  slidesToShow = 3,
  centerMode = true,
  centerPadding = "60px",
  autoplay = false,
  autoplaySpeed = 3000,
  dots = false,
  arrows = false,
  infinite = true,
  speed = 500,
  className = "",
  gap = 20,
  responsive = [],
  onSlideChange,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  //   const sliderRef = useRef<Slider>(null);
  const sliderRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640); // match your mobile bp
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = (e: React.MouseEvent, index: number) => {
    const target = e.target as HTMLElement;
    const slider = sliderRef.current;
    if (!slider) return;

    // Check if click is on a partially visible item (navigation)
    const sliderWidth = target.closest(".slick-list")?.clientWidth || 0;
    const itemRect = target.closest(".slick-slide")?.getBoundingClientRect();

    if (itemRect) {
      const isLeftEdge = itemRect.left < 0;
      const isRightEdge = itemRect.right > sliderWidth;

      if (isLeftEdge) {
        slider.slickPrev();
        return;
      }
      if (isRightEdge) {
        slider.slickNext();
        return;
      }
    }

    // Modal functionality disabled
    setActiveIndex(index);
    setIsModalOpen(true);
  };

  const handleNext = () => {
    if (activeIndex < items.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const defaultRenderCard = (item: SliderItem) => (
    <div className="relative h-full">
      <div className="aspect-[3/4] w-full overflow-hidden rounded-lg">
        <img
          src={item.image}
          alt={item.alt}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-start mt-2 text-black font-medium tracking-wide uppercase text-[10px] libre-baskerville-regular">
        {item.title}
      </p>
    </div>
  );

  const settings = {
    className: `center  ${dots ? "dots-enabled" : ""} ${
      arrows ? "arrows-enabled" : ""
    } ${className}`,
    dots: false,
    infinite,
    speed,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: false,
    centerMode,
    centerPadding,
    arrows: false,
    // draggable: false, // Disable mouse dragging
    // swipe: false, // Disable touch swiping
    // touchMove: false, // Disable touch moving
    draggable: isMobile, // ✅ Enable drag only on mobile
    swipe: isMobile, // ✅ Enable swipe only on mobile
    touchMove: isMobile, // ✅ Enable touch move only on mobile
    focusOnSelect: false,
    accessibility: false, // Disable keyboard navigation
    beforeChange: (current: number, next: number) => {
      if (onSlideChange) onSlideChange(next);
    },

    afterChange: onSlideChange,
    responsive:
      responsive.length > 0
        ? responsive
        : [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: Math.min(3, slidesToShow),
                slidesToScroll: 1,
                centerMode: true,
                centerPadding,
                dots: true,
                arrows: true,
              },
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: Math.min(2, slidesToShow),
                slidesToScroll: 1,
                centerMode: true,
                centerPadding,
                dots: true,
                arrows: false,
              },
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding,
                dots: true,
                arrows: false,
              },
            },
          ],
  };

  // if (!isMounted || items.length === 0) {
  //     return (
  //         <div className={`max-w-7xl mx-auto ${className}`}>
  //             <div className="flex gap-4 h-96">
  //                 {/* Mobile: 1 card, Tablet: 3 cards, Desktop: 4 cards */}
  //                 <div className="w-full md:w-1/3 lg:w-1/4 bg-gray-200 animate-pulse rounded-lg"></div>
  //                 <div className="hidden md:block md:w-1/3 lg:w-1/4 bg-gray-200 animate-pulse rounded-lg"></div>
  //                 <div className="hidden md:block md:w-1/3 lg:w-1/4 bg-gray-200 animate-pulse rounded-lg"></div>
  //                 <div className="hidden lg:block lg:w-1/4 bg-gray-200 animate-pulse rounded-lg"></div>
  //                 <div className="hidden lg:block lg:w-1/4 bg-gray-200 animate-pulse rounded-lg"></div>
  //                 <div className="hidden lg:block lg:w-1/4 bg-gray-200 animate-pulse rounded-lg"></div>
  //             </div>
  //         </div>
  //     );
  // }

  return (
    <>
      <div className={`max-w-7xl mx-auto ${className}`}>
        <Slider ref={sliderRef} {...settings}>
          {items.map((item, index) => (
            <div
              key={item.id || index}
              className="outline-none h-full"
              onClick={(e) => handleClick(e, index)}
            >
              {renderCard ? renderCard(item, index) : defaultRenderCard(item)}
            </div>
          ))}
        </Slider>
      </div>
      {isModalOpen && (
        <ImageModal
          images={items.map((item) => ({
            src: item.image,
            alt: item.alt,
            title: item.title,
          }))}
          currentIndex={activeIndex}
          onClose={() => setIsModalOpen(false)}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
    </>
  );
};

export default CenterModeSlider;
