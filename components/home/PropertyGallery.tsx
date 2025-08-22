"use client";

import React, { useState } from "react";
import {
  CenterModeSlider,
  ImageSlider,
  ProgressLine,
} from "@/components/shared";
import PropertyCard from "./PropertyCard";
const properties = [
  {
    id: 1,
    src: "/images/gallery/property-3.png",

    alt: "Luxury bathroom with double vanity and freestanding bathtub",
    title: "Master Bathroom",
    width: "64",
    height: "xl",
  },
  {
    id: 2,
    src: "/images/gallery/property-4.png",
    alt: "Serene bedroom with large bed and TV console",
    title: "Master Bedroom",
    width: "64",
    height: "sm",
  },
  {
    id: 3,
    src: "/images/gallery/property-9.jpg",
    alt: "Modern dining area with sculptural light fixture",
    title: "Dining Area",
    width: "64",
    height: "xl",
  },
  {
    id: 4,
    src: "/images/gallery/property-4.png",
    alt: "Minimalist walk-in shower with glass panels",
    title: "Walk-in Shower",
    width: "64",
    height: "md",
  },
  {
    id: 5,
    src: "/images/gallery/property-1.png",
    alt: "Luxury bathroom with double vanity and freestanding bathtub",
    title: "Master Bathroom",
    width: "64",
    height: "xl",
  },
  {
    id: 6,
    src: "/images/gallery/property-9.jpg",
    alt: "Serene bedroom with large bed and TV console",
    title: "Master Bedroom",
    width: "64",
    height: "sm",
  },
  {
    id: 7,
    src: "/images/gallery/property-1.png",
    alt: "Modern dining area with sculptural light fixture",
    title: "Dining Area",
    width: "64",
    height: "xl",
  },
  {
    id: 8,
    src: "/images/gallery/property-2.png",
    alt: "Minimalist walk-in shower with glass panels",
    title: "Walk-in Shower",
    width: "64",
    height: "sm",
  },
];
const PropertyGallery: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  // Custom card renderer function
  const renderPropertyCard = (property: any, index: number) => {
    return <PropertyCard property={property} index={index} />;
  };

  return (
    <section className="py-16 md:py-24 ">
      <div className="container relative mx-auto px-4">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-[#000000] mb-6 gfs-didot-regular hidden md:block">
            <span className="text-[32px]  italic">DEVELOPING</span>
            <span className="text-[48px] font-medium  text-fill-text-bg">
              {" "}
              HOMES{" "}
            </span>
            <span className="text-[32px] font-thin italic"> IN</span>
            <br />
            <span className="text-[32px] font-normal italic"> THE</span>
            <span className="text-[48px] font-medium not-italic  text-fill-text-bg">
              {" "}
              HEART
            </span>
            <span className="text-[32px] font-normal italic"> OF</span>
            <span className="text-[48px] font-medium not-italic  text-fill-text-bg">
              {" "}
              DUBAI
            </span>
          </h2>

          <h2 className="text-[#000000] text-[32px] mb-6 gfs-didot-regular block md:hidden">
            <span className="text-[32px]  italic">DEVELOPING</span>
            <span className="text-[32px] font-medium"> HOMES </span>
            <br />
            <span className="text-[32px] font-normal italic">IN THE</span>
            <span className="text-[32px] font-medium not-italic"> HEART</span>
            <span className="text-[32px] font-normal italic"> OF</span>
            <span className="text-[32px] font-medium not-italic"> DUBAI</span>
          </h2>

          <p className="text-sm text-[#545552] max-w-xl mx-auto text-start md:text-center leading-6 tracking-[0.01em] libre-baskerville-regular ">
            Every space we create begins with a feeling, a sense of belonging,
            of calm, of home. Grounded Estates designs each residence as a
            personal sanctuary, where thoughtful details and natural harmony
            come together to create something truly meaningful.
          </p>
        </div>

        {/* Image Slider */}
      </div>
      <div className="overflow-hidden">
        <div className="-ml-4 md:-ml-2 ">
          <CenterModeSlider
            items={properties.map((property, index) => ({
              ...property,
              id: index + 1,
              image: property.src,
              title: property.title,
            }))}
            renderCard={renderPropertyCard}
            slidesToShow={4}
            centerMode={true}
            infinite={true}
            centerPadding="100px"
            autoplay={false}
            autoplaySpeed={0}
            dots={false}
            gap={30}
            arrows={false}
            className="property-gallery-slider"
            responsive={[
              {
                breakpoint: 5000,
                settings: {
                  slidesToShow: 7.6,
                  slidesToScroll: 1,
                  centerMode: true,
                  centerPadding: "0px",
                  dots: false,
                  arrows: false,
                },
              },
              {
                breakpoint: 3200,
                settings: {
                  slidesToShow: 6.6,
                  slidesToScroll: 1,
                  centerMode: true,
                  centerPadding: "0px",
                  dots: false,
                  arrows: false,
                },
              },
              {
                breakpoint: 1800,
                settings: {
                  slidesToShow: 5.6,
                  slidesToScroll: 1,
                  centerMode: true,
                  centerPadding: "0px",
                  dots: false,
                  arrows: false,
                },
              },
              {
                breakpoint: 1200,
                settings: {
                  slidesToShow: 5.5,
                  slidesToScroll: 1,
                  centerMode: true,
                  centerPadding: "0px",
                  dots: false,
                  arrows: false,
                },
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 1,
                  centerMode: true,
                  centerPadding: "100px",
                  dots: false,
                  arrows: true,
                },
              },
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  centerMode: true,
                  centerPadding: "100px",
                  dots: false,
                  arrows: false,
                },
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: true,
                  centerPadding: "40px",
                  dots: false,
                  arrows: false,
                },
              },
            ]}
            onSlideChange={handleSlideChange}
          />
          <div className="md:hidden flex items-center justify-center gap-2 mt-24 w-3/5 mx-auto">
            <div className="w-full">
              <ProgressLine
                totalSlides={properties.length}
                currentSlide={currentSlide}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyGallery;
