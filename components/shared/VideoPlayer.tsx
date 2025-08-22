"use client";
import React, { useRef, useState, useEffect } from "react";
import { FaGripLinesVertical } from "react-icons/fa6";
import { IoPlaySharp } from "react-icons/io5";
import CircleOutline from "./CircleOutline";

interface VideoPlayerProps {
  commingSoon: boolean;
  blurImage?: string;
  src?: string;
  alt?: string;
  className?: string;
  buttonPosition?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "center";
  buttonSize?: "sm" | "md" | "lg";
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  commingSoon = false,
  blurImage = "",
  src = "",
  alt = "Video",
  className = "",
  buttonPosition = "bottom-right",
  buttonSize = "md",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (commingSoon || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            // Autoplay when visible
            if (videoRef.current) {
              videoRef.current.play().catch((error) => {
                console.error("Autoplay failed:", error);
              });
              setIsPlaying(true);
            }
          } else {
            setIsVisible(false);
            // Pause when not visible
            if (videoRef.current) {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of element is visible
      }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
    };
  }, [commingSoon]);

  const togglePlay = () => {
    if (commingSoon) return;
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((error) => {
          console.error("Play failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-0 right-0",
    "bottom-left": "bottom-4 left-4",
    center: "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
  };

  const buttonSizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  };

  if (commingSoon) {
    return (
      <div className={`relative ${className}`}>
        <img
          src={blurImage || ""}
          alt={alt}
          className="w-full h-full object-contain blur-sm"
        />
        <div className="absolute top-10 left-1/2 -translate-x-1/2 text-white text-[10px] tracking-widest uppercase libre-baskerville-regular">
          Coming Soon
        </div>
        <CircleOutline
          text="soon"
          className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2"
          size="xxl"
        />

        <button
          type="button"
          onClick={togglePlay}
          className={`
                        ${buttonSizeClasses[buttonSize]}
                        ${positionClasses[buttonPosition]}
                        absolute
                        right-20
                        text-white 
                        transition-all 
                        duration-300
                        flex
                        items-center
                        justify-center
                        z-10
                        opacity-90
                        cursor-default
                    `}
          aria-disabled
        >
          {isPlaying ? (
            <FaGripLinesVertical size={20} />
          ) : (
            <IoPlaySharp size={20} />
          )}
        </button>
      </div>
    );
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        onEnded={handleVideoEnd}
        muted
        playsInline // Important for iOS autoplay
        loop // ✅ loops automatically
        preload="none" // ✅ Don't preload video data
      />
      {/* Black overlay with 35% opacity */}
      <div className="absolute inset-0 bg-black/35"></div>
      {/* <button
        onClick={togglePlay}
        className={`
                    ${buttonSizeClasses[buttonSize]}
                    ${positionClasses[buttonPosition]}
                    absolute
                    text-white 
                    transition-all 
                    duration-300
                    flex
                    items-center
                    justify-center
                    z-10
                `}
      >
        {isPlaying ? (
          <FaGripLinesVertical size={20} />
        ) : (
          <IoPlaySharp size={20} />
        )}
      </button> */}
    </div>
  );
};

export default VideoPlayer;
