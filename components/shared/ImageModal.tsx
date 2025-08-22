"use client";

import React, { useRef } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

interface ImageModalProps {
  images: Array<{ src: string; alt: string; title: string }>;
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  if (currentIndex < 0 || currentIndex >= images.length) return null;

  const currentImage = images[currentIndex];

  const handleOverlayClick = (e: React.MouseEvent) => {
     if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center p-4"
      onClick={handleOverlayClick} // close on background click
    >
      {/* Modal Content */}
      <div
        ref={contentRef}
        className="relative flex items-center justify-center"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking on image area
      >
        {/* Image Container with Navigation */}
        <div className="relative inline-block">
          <img
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-[90vw] max-h-[90vh] object-contain cursor-pointer"
            onClick={onClose}
          />
          
          {/* Prev Button - positioned relative to image */}
          {currentIndex > 0 && (
            <button
              onClick={onPrev}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all duration-200 hover:scale-110"
              aria-label="Previous image"
            >
              <BiChevronLeft size={28} />
            </button>
          )}

          {/* Next Button - positioned relative to image */}
          {currentIndex < images.length - 1 && (
            <button
              onClick={onNext}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 p-3 rounded-full bg-black/60 text-white hover:bg-black/80 transition-all duration-200 hover:scale-110"
              aria-label="Next image"
            >
              <BiChevronRight size={28} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
