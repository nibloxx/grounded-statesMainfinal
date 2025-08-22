"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper/modules";
import type SwiperCore from "swiper";

interface ImageItem {
  id?: number;
  src: string;
  alt: string;
  title: string;
}

interface SliderItem {
  id: number;
  [key: string]: any;
}

interface ImageSliderProps {
  images?: ImageItem[];
  items?: SliderItem[];
  renderCard?: (item: SliderItem, index: number) => React.ReactNode;
  slidesPerView?: {
    mobile?: number;
    tablet?: number;
    desktop?: number;
  };
  spaceBetween?: number;
  autoplayDelay?: number;
  showPagination?: boolean;
  showNavigation?: boolean;
  aspectRatio?: string;
  className?: string;
  marqueeMode?: boolean;
  onSlideChange?: (swiper: any) => void;
  onProgress?: (swiper: any, progress: number) => void;
  mouseWheel?: boolean;
  freeMode?: boolean;
  section?: string;
  loop?: boolean;
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  items,
  renderCard,
  slidesPerView = { mobile: 1, tablet: 3, desktop: 4 },
  spaceBetween = 30,
  autoplayDelay = 5000,
  showPagination = true,
  showNavigation = true,
  aspectRatio = "4/3",
  className = "",
  marqueeMode = false,
  onSlideChange,
  onProgress,
  mouseWheel = false,
  freeMode = false,
  section = "other",
  loop = true,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const swiperRef = useRef<SwiperCore>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSlideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!swiperRef.current || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const clickX = e.clientX - containerRect.left;
    const containerWidth = containerRect.width;
    const clickPosition = clickX / containerWidth;

    if (clickPosition < 0.5) {
      // Clicked on left half - slide left
      swiperRef.current.slidePrev();
    } else {
      // Clicked on right half - slide right
      swiperRef.current.slideNext();
    }
  };

  const data = items || images || [];
  const isCustomCards = !!renderCard && !!items;

  if (!isMounted) {
    return (
      <div className={`max-w-7xl mx-auto ${className}`}>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.slice(0, 4).map((item: any, index: number) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg h-80"
            >
              <div className="w-full h-full bg-gray-200 animate-pulse" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={`mx-auto overflow-hidden relative ${className}`}
      onClick={handleSlideClick}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay, Mousewheel]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView.mobile || 1}
        centeredSlides={false}
        mousewheel={
          mouseWheel
            ? {
                releaseOnEdges: true,
                sensitivity: 1,
                eventsTarget: "container",
              }
            : false
        }
        loop={marqueeMode ? true : (loop && data.length > 0)} // Force loop for marquee mode
        loopAdditionalSlides={marqueeMode ? data.length : (data.length > 3 ? 3 : data.length)}
        loopPreventsSliding={false}
        watchSlidesProgress={true}
        slidesPerGroup={1}
        grabCursor={true}
        allowTouchMove={true}
        freeMode={
          freeMode && !marqueeMode
            ? {
                enabled: true,
                sticky: false,
                momentumRatio: 1,
                momentumVelocityRatio: 1,
              }
            : false
        }
        speed={marqueeMode ? 5000 : freeMode ? 600 : 800} // Much slower speed for smoother loop transitions
        initialSlide={0}
        onSlideChange={onSlideChange}
        onProgress={onProgress}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        navigation={
          showNavigation && !marqueeMode
            ? {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              }
            : false
        }
        pagination={
          showPagination && !marqueeMode
            ? {
                clickable: true,
                el: ".swiper-pagination",
              }
            : false
        }
        autoplay={
          marqueeMode
            ? {
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                reverseDirection: false,
                waitForTransition: false,
                stopOnLastSlide: false,
              }
            : autoplayDelay > 0
            ? {
                delay: autoplayDelay,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
                stopOnLastSlide: false,
              }
            : false
        }
        breakpoints={{
          640: {
            slidesPerView: slidesPerView.mobile || 1,
            spaceBetween: spaceBetween,
          },
          768: {
            slidesPerView: slidesPerView.tablet || 3,
            spaceBetween: spaceBetween,
          },
          1024: {
            slidesPerView: slidesPerView.desktop || 4,
            spaceBetween: spaceBetween,
          },
        }}
        className={`${
          isCustomCards ? "custom-swiper h-full" : "property-swiper"
        } ${marqueeMode ? "marquee-slider" : ""}`}
      >
        {data?.map((item, index) => (
          <SwiperSlide
            className={`${section == "Amenities" ? "" : "!w-auto"}`}
            key={`slide-${(item as any).id || index}`}
          >
            {isCustomCards ? renderCard!(item as SliderItem, index) : (
              <div className="relative group overflow-hidden rounded-lg shadow-lg h-80">
                <img
                  src={(item as ImageItem).src}
                  alt={(item as ImageItem).alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation and Pagination Container */}
      <div className="flex flex-col items-center mt-8 space-y-4">
        {/* Custom Navigation */}
        {showNavigation && (
          <div className="flex justify-center space-x-4">
            <button className="swiper-button-prev bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300">
              <span className="sr-only">Previous</span>
              <div className="w-6 h-6 border-l-2 border-b-2 border-gray-800 transform rotate-45"></div>
            </button>
            <button className="swiper-button-next bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300">
              <span className="sr-only">Next</span>
              <div className="w-6 h-6 border-r-2 border-t-2 border-gray-800 transform rotate-45"></div>
            </button>
          </div>
        )}

        {/* Pagination */}
        {showPagination && (
          <div className="swiper-pagination flex space-x-2"></div>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;