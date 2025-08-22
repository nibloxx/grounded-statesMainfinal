"use client";

import React from "react";
import Image from "next/image";
import { CenterModeSlider, ImageSlider } from "@/components/shared";
import ProjectCard from "./ProjectCard";
import { PROJECTS_DATA } from "@/constants";
import { ProjectItem } from "@/types";

const ProjectsSection: React.FC = () => {
  const projects: ProjectItem[] = PROJECTS_DATA;

  // Custom card renderer function
  const renderProjectCard = (project: any, index: number) => (
    <ProjectCard project={project} index={index} />
  );

  return (
    <section className="py-16 md:py-32 overflow-hidden">
      <div className="container mx-auto ">
        {/* Heading Section */}
        <div className="text-center mb-12 md:mb-24">
          <h2 className="hidden md:block mb-6 property-gallery-heading  gfs-didot-regular text-[#313131]">
            <span className="text-3xl md:text-[40px] tracking-[-0.01em] leading-[80px] font-medium  italic ">DISCOVER</span>
            <span className="text-3xl md:text-[59px] tracking-[-0.01em] leading-[80px] font-medium text-fill-text-bg">
              {" "}
              SOME{" "}
            </span>
            <span className="text-3xl md:text-4xl font-medium italic "> OF</span>
            <br />
            <span className="text-3xl md:text-4xl font-normal italic ">
              {" "}
              OUR
            </span>
            <span className="text-3xl md:text-[59px] tracking-[-0.01em] leading-[80px] font-medium not-italic text-fill-text-bg">
              {" "}
              PROJECTS
            </span>
          </h2>


          <p className="md:hidden max-w-[345px] mx-auto text-[32px] leading-[50px] tracking-[-0.01em] text-center uppercase italic font-normal text-[#000000] mb-6 gfs-didot-regular">
            DISCOVER <span className="not-italic">SOME</span> OF OUR{" "}
            <span className="not-italic">PROJECTS</span>
          </p>

          <p className="text-[11px] leading-[18px] md:text-[14px] text-[#545552] max-w-[346px] font-medium tracking-wide md:max-w-[620px] mx-auto md:leading-[24px] text-justify md:text-center libre-baskerville-regular ">
            Step inside our portfolio and discover what sets each of our
            properties apart. From natural textures to flowing layouts, every
            detail has been curated to create a living experience that feels as
            effortless as it is unforgettable.
          </p>
        </div>

        {/* Projects Slider using shared ImageSlider */}
      </div>
      <div className="pl-4 md:pl-0 overflow-hidden">
        <ImageSlider
          items={projects}
          renderCard={renderProjectCard}
          slidesPerView={{ mobile: 1.2, tablet: 2.5, desktop: 3.2 }}
          spaceBetween={24}
          autoplayDelay={0}
          marqueeMode={true}
          loop={true}
          showPagination={false}
          showNavigation={false}
          className="projects-swiper md:px-[20px] md:mx-[-20px]"
        />
      </div>
    </section>
  );
};

export default ProjectsSection;
