
"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { CircleOutline, InteractiveElement, OverviewButton, VideoPlayer } from "../shared";
import { useRouter } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

const AboutUsHero: React.FC = () => {
  const router = useRouter();
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const [activeHero, setActiveHero] = useState<"first" | "second">("first");
  const textRef = useRef<HTMLHeadingElement>(null);

  const heroImageRef = useRef<HTMLDivElement>(null);

  // Hero section transition effect (mobile + desktop)
  useEffect(() => {
    if (!heroImageRef.current) return;

    const mediaQuery = window.matchMedia("(min-width: 1024px)");

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
            <span
              ref={textRef}
              className="text-white text-center"
              style={{ wordSpacing: "0.5rem" }}
            >
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
      <div className="pb-8 md:pb-12">
        <div className="flex flex-col items-center justify-end h-24 md:h-32">
          {/* Scroll Down - Center Bottom */}
          <div className="text-center">
            {/* Overview Button - Desktop */}
            <div className="hidden lg:block fixed top-[40px] right-4 transform -translate-y-1/2 z-[60]">
              <OverviewButton className="bg-[#00000066] backdrop-blur-[10px] hover:bg-black/40 hover:backdrop-blur-xl text-white border-none" />
            </div>
            {/* Overview Button - Mobile */}
            <div className="fixed bottom-0 z-[60] left-1/2 -translate-x-1/2 lg:hidden flex justify-center transform -translate-y-1/2">
              <OverviewButton
                showBorder={false}
                className="bg-[#00000066] backdrop-blur-[10px] hover:bg-black/40 hover:backdrop-blur-xl text-white border-none flex items-center justify-center gap-1 px-4 py-2 rounded-full text-sm"
              />
            </div>
            <p className="hidden md:block text-white text-xs opacity-80 tracking-[0.15em] uppercase libre-baskerville-regular">
              Scroll Down
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
