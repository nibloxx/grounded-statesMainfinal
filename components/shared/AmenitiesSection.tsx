"use client";

import React, { useState, useEffect, useRef } from "react";
import { ProgressLine } from "@/components/shared";
import { AmenityItem } from "@/types";

interface AmenitiesSectionProps {
  amenities: AmenityItem[];
}

const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ amenities }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //     if (typeof window !== 'undefined' && amenities.length > 1) {
  //         const { gsap } = require('gsap');
  //         const { ScrollTrigger } = require('gsap/ScrollTrigger');

  //         gsap.registerPlugin(ScrollTrigger);

  //         const container = containerRef.current;
  //         const textContainer = textRef.current;

  //         if (container && textContainer) {
  //             // Clear any existing ScrollTriggers
  //             ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());

  //             let lastTextIndex = -1;

  //             // Pin the section for full screen effect
  //             const st = ScrollTrigger.create({
  //                 trigger: sectionRef.current,
  //                 start: "top top",
  //                 end: `+=${window.innerHeight * amenities.length}`,
  //                 pin: true,
  //                 pinSpacing: true,
  //                 scrub: 1,
  //                 onUpdate: (self: any) => {
  //                     const progress = self.progress;
  //                     const totalSlides = amenities.length;

  //                     // Calculate which slide should be active
  //                     let activeIndex = 0;
  //                     if (progress > 0.5 && totalSlides > 1) {
  //                         activeIndex = 1;
  //                     }
  //                     if (progress >= 1) {
  //                         activeIndex = totalSlides - 1;
  //                     }

  //                     // Update progress indicator
  //                     setCurrentSlide(activeIndex);

  //                     // Animate images - only between first and second
  //                     if (totalSlides >= 2) {
  //                         const firstImage = container.querySelector(`[data-slide="0"]`) as HTMLElement;
  //                         const secondImage = container.querySelector(`[data-slide="1"]`) as HTMLElement;

  //                         if (firstImage && secondImage) {
  //                             if (progress <= 0.5) {
  //                                 // First half - transition from slide 0 to slide 1
  //                                 const slideProgress = progress * 2; // 0 to 1
  //                                 gsap.set(firstImage, { yPercent: -100 * slideProgress });
  //                                 gsap.set(secondImage, { yPercent: 100 - (100 * slideProgress) });
  //                             } else {
  //                                 // Second half - stay on slide 1
  //                                 gsap.set(firstImage, { yPercent: -100 });
  //                                 gsap.set(secondImage, { yPercent: 0 });
  //                             }
  //                         }
  //                     }

  //                     // Update text content
  //                     if (activeIndex !== lastTextIndex) {
  //                         lastTextIndex = activeIndex;

  //                         const title = textContainer.querySelector('.amenity-title') as HTMLElement;
  //                         const subtitle = textContainer.querySelector('.amenity-subtitle') as HTMLElement;
  //                         const description = textContainer.querySelector('.amenity-description') as HTMLElement;

  //                         if (title && subtitle && description && amenities[activeIndex]) {
  //                             gsap.to([title, subtitle, description], {
  //                                 opacity: 0.4,
  //                                 duration: 0.2,
  //                                 onComplete: () => {
  //                                     title.textContent = amenities[activeIndex].title;
  //                                     subtitle.textContent = amenities[activeIndex].subtitle;
  //                                     description.textContent = amenities[activeIndex].description;
  //                                     gsap.to([title, subtitle, description], {
  //                                         opacity: 1,
  //                                         duration: 0.3
  //                                     });
  //                                 }
  //                             });
  //                         }
  //                     }
  //                 }
  //             });

  //             return () => {
  //                 st.kill();
  //             };
  //         }
  //     }
  // }, [amenities]);

  useEffect(() => {
    if (typeof window !== "undefined" && amenities.length > 1) {
      const { gsap } = require("gsap");
      const { ScrollTrigger } = require("gsap/ScrollTrigger");

      gsap.registerPlugin(ScrollTrigger);

      const container = containerRef.current;
      const textContainer = textRef.current;

      if (container && textContainer) {
        // Clear old triggers
        ScrollTrigger.getAll().forEach((trigger: any) => trigger.kill());

        let lastTextIndex = -1;

        // Desktop animation only
        const isDesktop = window.innerWidth >= 768;

        const st = ScrollTrigger.create({
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${window.innerHeight * amenities.length}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          onUpdate: (self: any) => {
            const progress = self.progress;
            const totalSlides = amenities.length;

            if (isDesktop) {
              // Desktop: Smooth slide-up animation with delayed start
              const slides = container.querySelectorAll(
                "[data-slide]"
              ) as NodeListOf<HTMLElement>;

              // Calculate which transition we're in
              const currentTransition = Math.floor(progress * (totalSlides - 1));
              const rawTransitionProgress = (progress * (totalSlides - 1)) - currentTransition;
              
              // Add delay: animation starts at 30% of scroll progress for each section
              const animationStartThreshold = 0.3;
              const adjustedTransitionProgress = Math.max(0, (rawTransitionProgress - animationStartThreshold) / (1 - animationStartThreshold));
              
              slides.forEach((slide, i) => {
                if (i < currentTransition) {
                  // Previous slides: moved up and hidden
                  gsap.set(slide, { yPercent: -100 });
                } else if (i === currentTransition) {
                  // Current slide: stays visible longer, then gets pushed up
                  if (rawTransitionProgress < animationStartThreshold) {
                    gsap.set(slide, { yPercent: 0 }); // Stay visible
                  } else {
                    gsap.set(slide, { yPercent: -100 * adjustedTransitionProgress });
                  }
                } else if (i === currentTransition + 1) {
                  // Next slide: starts coming up after delay
                  if (rawTransitionProgress < animationStartThreshold) {
                    gsap.set(slide, { yPercent: 100 }); // Stay hidden
                  } else {
                    gsap.set(slide, { yPercent: 100 - (100 * adjustedTransitionProgress) });
                  }
                } else {
                  // Future slides: waiting below
                  gsap.set(slide, { yPercent: 100 });
                }
              });

              // Determine current text index - change when next image is 50% visible
              let textIndex = currentTransition;
              if (rawTransitionProgress >= animationStartThreshold) {
                const imageVisibilityProgress = adjustedTransitionProgress;
                // Change text when new slide is 50% visible
                if (imageVisibilityProgress >= 0.5 && currentTransition + 1 < totalSlides) {
                  textIndex = currentTransition + 1;
                }
              }
              
              setCurrentSlide(textIndex);

              // Animate text when index changes
              if (textIndex !== lastTextIndex) {
                lastTextIndex = textIndex;

                const title = textContainer.querySelector(
                  ".amenity-title"
                ) as HTMLElement;
                const subtitle = textContainer.querySelector(
                  ".amenity-subtitle"
                ) as HTMLElement;
                const description = textContainer.querySelector(
                  ".amenity-description"
                ) as HTMLElement;

                if (title && subtitle && description && amenities[textIndex]) {
                  gsap.to([title, subtitle, description], {
                    opacity: 0.4,
                    duration: 0.2,
                    onComplete: () => {
                      title.textContent = amenities[textIndex].title;
                      subtitle.textContent = amenities[textIndex].subtitle;
                      description.textContent = amenities[textIndex].description;
                      gsap.to([title, subtitle, description], {
                        opacity: 1,
                        duration: 0.3,
                      });
                    },
                  });
                }
              }
            } else {
              // Mobile: keep existing discrete behavior
              const activeIndex = Math.min(
                Math.floor(progress * totalSlides),
                totalSlides - 1
              );
              setCurrentSlide(activeIndex);

              const slides = container.querySelectorAll(
                "[data-slide]"
              ) as NodeListOf<HTMLElement>;

              slides.forEach((slide, i) => {
                if (i < activeIndex) {
                  gsap.set(slide, { yPercent: -100 }); // moved up
                } else if (i === activeIndex) {
                  gsap.set(slide, { yPercent: 0 }); // current
                } else {
                  gsap.set(slide, { yPercent: 100 }); // waiting below
                }
              });

              // Mobile text change
              if (activeIndex !== lastTextIndex) {
                lastTextIndex = activeIndex;

                const title = textContainer.querySelector(
                  ".amenity-title"
                ) as HTMLElement;
                const subtitle = textContainer.querySelector(
                  ".amenity-subtitle"
                ) as HTMLElement;
                const description = textContainer.querySelector(
                  ".amenity-description"
                ) as HTMLElement;

                if (title && subtitle && description && amenities[activeIndex]) {
                  gsap.to([title, subtitle, description], {
                    opacity: 0.4,
                    duration: 0.2,
                    onComplete: () => {
                      title.textContent = amenities[activeIndex].title;
                      subtitle.textContent = amenities[activeIndex].subtitle;
                      description.textContent = amenities[activeIndex].description;
                      gsap.to([title, subtitle, description], {
                        opacity: 1,
                        duration: 0.3,
                      });
                    },
                  });
                }
              }
            }
          },
        });

        return () => {
          st.kill();
        };
      }
    }
  }, [amenities]);

  return (
    <section ref={sectionRef} className="h-screen relative">
      <div className="h-full grid grid-cols-1 md:grid-cols-5 items-center">
        {/* Left Column - Text Content */}
        <div
          ref={textRef}
          className="relative md:col-span-2 bg-[#F3EEE7] w-full h-full flex flex-col items-center justify-around md:justify-center"
        >
          <div className="space-y-2 md:space-y-4 px-4">
            <h3 className="amenity-title text-[10px] leading-[19px] tracking-[0.12em] uppercase text-[#646361] libre-baskerville-regular">
              {amenities[0]?.title}
            </h3>
            <h2 className="amenity-subtitle text-[14px] leading-[25px] md:text-[18px] md:leading-[19px] tracking-[0] text-[#313131] libre-baskerville-regular">
              {amenities[0]?.subtitle}
            </h2>
            <p className="amenity-description max-w-[434px] text-[11px] leading-[18px] md:text-[12px] md:leading-[20px] tracking-[0.005em] text-[#313131] libre-baskerville-regular">
              {amenities[0]?.description}
            </p>
          </div>

          {/* Progress Line */}
          <div className="md:hidden w-full px-8 mt-10 mb-8">
            <ProgressLine
              totalSlides={amenities.length}
              currentSlide={currentSlide}
              lineColor="#DAD9D7"
              fillColor="#313131"
              height="2px"
            />
          </div>
          <div className="hidden md:block px-5 w-full lg:w-[434px] lg:mx-auto absolute bottom-16">
            <ProgressLine
              totalSlides={amenities.length}
              currentSlide={currentSlide}
              lineColor="#DAD9D7"
              fillColor="#0e0505"
              height="2px"
            />
          </div>
        </div>

        {/* Right Column - Images Stack */}
        <div
          ref={containerRef}
          className="md:col-span-3 relative h-full overflow-hidden"
        >
          {amenities.map((item, index) => (
            <div
              key={index}
              data-slide={index}
              className="absolute inset-0 w-full h-full"
              style={{ zIndex: amenities.length - index }}
            >
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AmenitiesSection;
