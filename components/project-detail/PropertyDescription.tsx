"use client";
import React, { useState } from "react";
import { ProjectItem } from "@/types";
import { CenterModeSlider, ImageSlider, ProgressLine } from "../shared";
import { ProjectCard, PropertyCard } from "../home";

interface PropertyDescriptionProps {
  project: ProjectItem;
}

const PropertyDescription: React.FC<PropertyDescriptionProps> = ({
  project,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };
  // Custom card renderer function
  const renderCard = (property: any, index: number) => {
    return <PropertyCard property={property} index={index} />;
  };
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-[346px] md:max-w-[730px] mx-auto text-center">
          {/* Location */}
          <p className="text-[10px] leading-[19px] tracking-[0.15em] uppercase text-[#000000] mb-3 md:mb-5 libre-baskerville-regular">
            {project.country}
          </p>

          {/* Property Name */}
          <h2 className="max-w-[331px] md:max-w-[633px] mx-auto text-[20px] leading-[19px] tracking-[0.05em] md:text-[27px] text-[#000000] mb-10 libre-baskerville-regular">
            {project.propertyName || `${project.location} Villa`}
          </h2>

          {/* Description */}
          <div className="text-justify mt-16 md:mt-0 md:text-center">
            <p className="text-[11px] leading-[20px] md:text-[14px] md:leading-[24px] md:tracking-[0.01em] text-[#545552] libre-baskerville-regular">
              {project.description}
            </p>
          </div>
        </div>
      </div>

      <div className="overflow-hidden mt-14 md:mt-28">
        <CenterModeSlider
          items={
            project?.images?.map((project, index) => ({
              ...project,
              id: index + 1,
              image: project.src,
              alt: project.alt,
              title: project.title,
            })) || []
          }
          renderCard={renderCard}
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
          // responsive={[
          //     {
          //         breakpoint: 1024,
          //         settings: {
          //             slidesToShow: 4,
          //             slidesToScroll: 1,
          //             centerMode: true,
          //             centerPadding: "100px",
          //             dots: false,
          //             arrows: true,
          //         }
          //     },
          //     {
          //         breakpoint: 768,
          //         settings: {
          //             slidesToShow: 3,
          //             slidesToScroll: 1,
          //             centerMode: true,
          //             centerPadding: "100px",
          //             dots: false,
          //             arrows: false,
          //         }
          //     },
          //     {
          //         breakpoint: 480,
          //         settings: {
          //             slidesToShow: 1,
          //             slidesToScroll: 1,
          //             centerMode: true,
          //             centerPadding: "40px",
          //             dots: false,
          //             arrows: false,
          //         }
          //     }
          // ]}
          responsive={[
            {
              breakpoint: 5000,
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
      </div>
      <div className="md:hidden flex items-center justify-center gap-2 mt-24 w-3/5 mx-auto">
        <div className="w-full">
          <ProgressLine
            totalSlides={project?.images ? project?.images?.length : 0}
            currentSlide={currentSlide}
          />
        </div>
      </div>
    </section>
  );
};

export default PropertyDescription;
