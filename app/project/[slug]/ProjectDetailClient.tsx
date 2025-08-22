// "use client";

// import React, { useState } from "react";
// import {
//   ImageSlider,
//   OverviewButton,
//   ColonButton,
//   VideoPlayer,
//   Footer,
// } from "@/components/shared";
// import {
//   PropertyDescription,
//   ProjectFeatures,
//   AboutProperty,
//   DesigningHomes,
//   VillaDetails,
// } from "@/components/project-detail";
// import {
//   CommunityHero,
//   LuxuryDetailsSection,
//   PeacefulnessSection,
// } from "@/components";
// import { ProjectHeroImage, ProjectImage, ProjectItem } from "@/types";
// import Link from "next/link";

// interface ProjectDetailClientProps {
//   project: ProjectItem;
// }

// const ProjectDetailClient: React.FC<ProjectDetailClientProps> = ({
//   project,
// }) => {
//   const [activeSlideIndex, setActiveSlideIndex] = useState(0);

//   // Use project images if available, otherwise fallback to single image
//   const projectHeroImages: ProjectHeroImage[] = project.heroImages;

//   // Add id property to match SliderItem interface
//   const images = projectHeroImages.map((image, index) => ({
//     ...image,
//     id: index + 1,
//   }));

//   // Handle slide change
//   const handleSlideChange = (swiper: any) => {
//     setActiveSlideIndex(swiper.activeIndex);
//   };

//   // Custom card renderer for project detail images
//   const renderProjectImageCard = (item: any, index: number) => {
//     const image = item as ProjectImage & { id: number };

//     return (
//       <div className="relative w-full md:me-2">
//         <img
//           src={image.src}
//           alt={image.alt}
//           className={`w-[430px] md:w-[591px] lg:w-[891px] xl:w-full h-full lg:h-screen object-cover ${
//             image.blur ? "blur-sm" : ""
//           }`}
//         />

//         {/* Overlay Content for each slide */}
//         <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
//       </div>
//     );
//   };

//   return (
//     <div className="relative min-h-screen">
//       <Link href="/" >
//         <div className="absolute z-10 top-8 md:top-6 left-1/2 transform -translate-x-1/2">
//           <img
//             src="/images/grounded-estates-logo.png"
//             alt="Grounded Estates"
//             className="h-[36px] w-[297px] md:h-16 object-contain"
//           />
//         </div>
//       </Link>
//       {/* Hero Section with Image Slider */}
//       <div className="relative h-[850px] md:h-[670px]  lg:h-screen">
//         <ImageSlider
//           items={images}
//           renderCard={renderProjectImageCard}
//           slidesPerView={{ mobile: 1, tablet: 1.3, desktop: 1.15 }}
//           spaceBetween={0}
//           autoplayDelay={0}
//           showPagination={false}
//           showNavigation={false}
//           className="h-full"
//           onSlideChange={handleSlideChange}
//           // mouseWheel
//         />
//         <div className="hidden md:block absolute bottom-16 left-20 text-white z-50">
//           <p className="libre-baskerville-regular text-xs text-white font-light tracking-widest mb-1 ">
//             {project.location}
//           </p>
//           <p className="text-lg md:text-2xl leading-6 font-medium tracking-widest libre-baskerville-regular">
//             {project.propertyName || `${project.location} Villa`}
//           </p>
//         </div>
//         {/* Overview Button - Desktop fixed: right middle */}
//         <div className="hidden lg:block fixed top-20 right-4 transform -translate-y-1/2 pointer-events-auto z-50">
//           <OverviewButton className="bg-[#00000066] backdrop-blur-[10px] hover:bg-black hover:bg-black/40 hover:backdrop-blur-xl text-white noborder">
//             Overview
//           </OverviewButton>
//         </div>

//         {/* Overview Button - Mobile fixed: bottom center */}
//         <div className="lg:hidden fixed bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-auto z-50">
//           <OverviewButton className="bg-[#D9D9D966] backdrop-blur-[10px] hover:bg-black text-white noborder">
//             Overview
//           </OverviewButton>
//         </div>

//         {/* Colon Button - Medium and above: bottom center */}
//         <div className="hidden lg:block absolute bottom-6 left-1/2 transform -translate-x-1/2 pointer-events-auto z-10">
//           <ColonButton onClick={() => console.log("Colon button clicked")} />
//         </div>
//       </div>

//       {/* Property Description Section */}
//       {project.description && <PropertyDescription project={project} />}

//       {/* Project Features Section */}
//       {project.features && <ProjectFeatures features={project.features} />}

//       {project.communityData && (
//         <div className="container mx-auto px-4 h-[700px] md:h-[700px] lg:h-[600px] mb-8">
//           <CommunityHero
//             image={project.communityData.image}
//             imageAlt={project.communityData.imageAlt}
//             topHeading={project.communityData.topHeading}
//             subHeading1={project.communityData.subHeading1}
//             subHeading2={project.communityData.subHeading2}
//             aboutTitle={project.communityData.aboutTitle}
//             aboutSubtitle={project.communityData.aboutSubtitle}
//             aboutDescription={project.communityData.aboutDescription}
//             circleText={project.communityData.circleText}
//           />
//         </div>
//       )}

//       {/* Peacefulness Section */}
//       {project.peacefulnessSection && (
//         <PeacefulnessSection
//           image={project.peacefulnessSection.image}
//           imageAlt={project.peacefulnessSection.imageAlt}
//           topText={project.peacefulnessSection.topText}
//           mainText={project.peacefulnessSection.mainText}
//           description={project.peacefulnessSection.description}
//         />
//       )}

//       {/* Luxury Details Section */}
//       {project.luxuryDetails && (
//         <LuxuryDetailsSection
//           tagline={project.luxuryDetails.tagline}
//           heading={project.luxuryDetails.heading}
//           description={project.luxuryDetails.description}
//           discoverMoreText={project.luxuryDetails.discoverMoreText}
//           downloadText={project.luxuryDetails.downloadText}
//           images={project.luxuryDetails.images}
//         />
//       )}
//       {/* About Property Section */}
//       {project.aboutProperty && (
//         <AboutProperty
//           heading={project.aboutProperty.heading}
//           subHeading={project.aboutProperty.subHeading}
//           description={project.aboutProperty.description}
//           images={project.aboutProperty.images}
//         />
//       )}

//       {/* Designing Impactful Homes Section */}
//       {project.designingHomes && (
//         <DesigningHomes
//           image={project.designingHomes.image}
//           imageAlt={project.designingHomes.imageAlt}
//           text1={project.designingHomes.text1}
//           text2={project.designingHomes.text2}
//           text3={project.designingHomes.text3}
//         />
//       )}

//       {/* Video Section */}
//       {project.videoSection && (
//         <div className="relative h-[600px] md:h-[700px] lg:h-[800px] mt-16 md:mt-0">
//           <VideoPlayer
//             commingSoon={project.videoSection.commingSoon}
//             blurImage={project.videoSection.blurImage}
//             src={project.videoSection.src || ""}
//             alt={project.videoSection.alt}
//             className={project.videoSection.className || "w-full h-full"}
//             buttonPosition={
//               project.videoSection.buttonPosition || "bottom-right"
//             }
//             buttonSize={project.videoSection.buttonSize || "lg"}
//           />
//         </div>
//       )}

//       {/* Villa Details Section */}
//       {project.villaDetails && <VillaDetails data={project.villaDetails} />}
//       <Footer />
//     </div>
//   );
// };

// export default ProjectDetailClient;

"use client";

import React, { useState, useRef, useEffect } from "react";
import {
  ImageSlider,
  OverviewButton,
  ColonButton,
  VideoPlayer,
  Footer,
} from "@/components/shared";
import {
  PropertyDescription,
  ProjectFeatures,
  AboutProperty,
  DesigningHomes,
  VillaDetails,
} from "@/components/project-detail";
import {
  CommunityHero,
  LuxuryDetailsSection,
  PeacefulnessSection,
} from "@/components";
import { ProjectHeroImage, ProjectImage, ProjectItem } from "@/types";
import Link from "next/link";
import Image from "next/image";

interface ProjectDetailClientProps {
  project: ProjectItem;
}

const ProjectDetailClient: React.FC<ProjectDetailClientProps> = ({
  project,
}) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState<any>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const heroSectionRef = useRef<HTMLDivElement>(null);

  // Reset slider when leaving the hero section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // When the hero section is no longer visible and we have a swiper instance
        if (
          !entry.isIntersecting &&
          swiperInstance &&
          (activeSlideIndex > 0 || scrollProgress > 0)
        ) {
          // Reset slider to first slide
          swiperInstance.slideTo(0, 0); // Instant transition (0ms)
          setActiveSlideIndex(0);
          setIsAtEnd(false);
          setScrollProgress(0);
        }
      },
      {
        threshold: 0.1, // Trigger when 10% of the hero section is visible
        rootMargin: "0px 0px -50px 0px", // Add some margin to trigger slightly earlier
      }
    );

    if (heroSectionRef.current) {
      observer.observe(heroSectionRef.current);
    }

    return () => {
      if (heroSectionRef.current) {
        observer.unobserve(heroSectionRef.current);
      }
    };
  }, [swiperInstance, activeSlideIndex, scrollProgress]);

  // Use project images if available, otherwise fallback to single image
  const projectHeroImages: ProjectHeroImage[] = project.heroImages;

  // Add id property to match SliderItem interface
  const images = projectHeroImages.map((image, index) => ({
    ...image,
    id: index + 1,
  }));

  // Handle slide change
  const handleSlideChange = (swiper: any) => {
    setActiveSlideIndex(swiper.activeIndex);
    setIsAtEnd(swiper.isEnd);
    setSwiperInstance(swiper);
  };

  // Handle progress change to detect scroll direction
  const handleProgress = (swiper: any, progress: number) => {
    // Update scroll progress for the ColonButton animation, but limit to max 1.0
    // Only update if we're not at the end, or if progress is decreasing
    const clampedProgress = Math.min(progress, 1.0);
    
    if (!isAtEnd || progress < scrollProgress) {
      setScrollProgress(clampedProgress);
    }

    // If progress goes back to 0 or very close to 0 and we were at the end, reset to first slide
    if (progress < 0.1 && isAtEnd && swiper.activeIndex > 0) {
      swiper.slideTo(0, 300);
      setActiveSlideIndex(0);
      setIsAtEnd(false);
    }
  };

  // Custom card renderer for project detail images
  const renderProjectImageCard = (item: any, index: number) => {
    const image = item as ProjectImage & { id: number };

    return (
      <div className="relative w-full md:me-2">
        <img
          src={image.src}
          alt={image.alt}
          className={`w-[430px] md:w-[591px] lg:w-[891px] xl:w-[1200px] h-full lg:h-screen object-cover ${
            image.blur ? "blur-sm" : ""
          }`}
        />

        {/* Overlay Content for each slide */}
        <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
      </div>
    );
  };

  return (
    <div className="relative min-h-screen">
      <Link href={"/"}>
        <div className="absolute z-10 top-8 md:top-6 left-1/2 transform -translate-x-1/2">
          <Image
            src="/images/grounded-estates-logo.png"
            alt="Grounded Estates"
            width={330}
            height={40}
            className="h-full  object-contain"
          />
        </div>
      </Link>
      {/* Hero Section - Mobile: Single Image */}
      <div
        ref={heroSectionRef}
        className="relative h-[850px] md:h-[670px] lg:h-screen"
      >
        {/* Mobile Version - First Image Only */}
        <div className="block md:hidden h-full w-full">
          <div className="relative w-full h-full">
            <img
              src={images[0]?.src}
              alt={images[0]?.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>
          </div>
        </div>

        {/* Desktop Version - Image Slider */}
        <div className="hidden md:block h-full">
          <ImageSlider
            items={images}
            renderCard={renderProjectImageCard}
            slidesPerView={{ mobile: 1, tablet: 1.3, desktop: 1.15 }}
            spaceBetween={0}
            autoplayDelay={0}
            showPagination={false}
            showNavigation={false}
            className="h-full"
            onSlideChange={handleSlideChange}
            onProgress={handleProgress}
            mouseWheel
            freeMode={true}
            loop={false}
          />
        </div>
        {/* Project Info - Desktop */}
        <div className="hidden md:block absolute bottom-16 left-20 text-white z-50">
          <p className="libre-baskerville-regular text-xs text-white font-light tracking-widest mb-1 ">
            {project.location}
          </p>
          <p className="text-lg md:text-2xl leading-6 font-medium tracking-widest libre-baskerville-regular">
            {project.propertyName || `${project.location} Villa`}
          </p>
        </div>

        {/* Project Info - Mobile */}
        <div className="block md:hidden absolute bottom-16 left-6 text-white z-50">
          <p className="libre-baskerville-regular text-xs text-white font-light tracking-widest mb-1 ">
            {project.location}
          </p>
          <p className="text-lg leading-6 font-medium tracking-widest libre-baskerville-regular">
            {project.propertyName || `${project.location} Villa`}
          </p>
        </div>
        {/* Overview Button - Desktop fixed: right middle */}
        <div className="hidden lg:block fixed top-[40px] right-4 transform -translate-y-1/2 pointer-events-auto z-[60]">
          <OverviewButton className="bg-[#00000066] backdrop-blur-[10px] hover:bg-black/40 hover:backdrop-blur-xl text-white border-none">
            Overview
          </OverviewButton>
        </div>

        {/* Overview Button - Mobile fixed: bottom center */}
        <div className="fixed bottom-0 z-[60] left-1/2 -translate-x-1/2 lg:hidden flex justify-center transform -translate-y-1/2">
          <OverviewButton
            showBorder={false}
            className="bg-[#00000066] backdrop-blur-[10px] hover:bg-black/40 hover:backdrop-blur-xl text-white border-none flex items-center justify-center gap-1 px-4 py-2 rounded-full text-sm"
          >
            Overview
          </OverviewButton>
        </div>

        {/* Colon Button - Medium and above: bottom center */}
        <div className="hidden lg:block absolute bottom-6 left-1/2 transform -translate-x-1/2 pointer-events-auto z-10">
          <ColonButton
            classNametop={`${
              isAtEnd ? "transition-all duration-500 border-black bg-black" : ""
            }`}
            className={`${
              isAtEnd ? "!mb-0 mt-5  transition-all duration-500" : ""
            }`}
            onClick={() => console.log("Colon button clicked")}
            scrollProgress={scrollProgress}
          />
        </div>
      </div>

      {/* Property Description Section */}
      {project.description && <PropertyDescription project={project} />}

      {/* Project Features Section */}
      {project.features && <ProjectFeatures features={project.features} />}

      {project.communityData && (
        // <div className="container mx-auto px-4 h-[700px] md:h-[700px] lg:h-[600px] mb-8">
        <div className="mx-auto px-4 h-[700px] md:h-[700px] lg:h-[800px] mb-8">

        <CommunityHero
            image={project.communityData.image}
            imageAlt={project.communityData.imageAlt}
            topHeading={project.communityData.topHeading}
            subHeading1={project.communityData.subHeading1}
            subHeading2={project.communityData.subHeading2}
            aboutTitle={project.communityData.aboutTitle}
            aboutSubtitle={project.communityData.aboutSubtitle}
            aboutDescription={project.communityData.aboutDescription}
            circleText={project.communityData.circleText}
          />
        </div>
      )}

      {/* Peacefulness Section */}
      {project.peacefulnessSection && (
        <PeacefulnessSection
          // image={project.peacefulnessSection.image}
          mainImage={project.peacefulnessSection.mainImage}
          topRight={project.peacefulnessSection.topRight}
          rightCenter={project.peacefulnessSection.rightCenter}
          bottomRight={project.peacefulnessSection.bottomRight}
          topLeft={project.peacefulnessSection.topLeft}
          bottomLeft={project.peacefulnessSection.bottomLeft}
          leftCenter={project.peacefulnessSection.leftCenter}
          topCenter={project.peacefulnessSection.topCenter}
          bottomCenter={project.peacefulnessSection.bottomCenter}
          
          imageAlt={project.peacefulnessSection.imageAlt}
          topText={project.peacefulnessSection.topText}
          mainText={project.peacefulnessSection.mainText}
          description={project.peacefulnessSection.description}
        />
      )}

      {/* Luxury Details Section */}
      {project.luxuryDetails && (
        <LuxuryDetailsSection
          tagline={project.luxuryDetails.tagline}
          heading={project.luxuryDetails.heading}
          description={project.luxuryDetails.description}
          discoverMoreText={project.luxuryDetails.discoverMoreText}
          downloadText={project.luxuryDetails.downloadText}
          images={project.luxuryDetails.images}
        />
      )}
      {/* About Property Section */}
      {project.aboutProperty && (
        <AboutProperty
          heading={project.aboutProperty.heading}
          subHeading={project.aboutProperty.subHeading}
          description={project.aboutProperty.description}
          images={project.aboutProperty.images}
        />
      )}

      {/* Designing Impactful Homes Section */}
      {project.designingHomes && (
        <DesigningHomes
          image={project.designingHomes.image}
          imageAlt={project.designingHomes.imageAlt}
          text1={project.designingHomes.text1}
          text2={project.designingHomes.text2}
          text3={project.designingHomes.text3}
        />
      )}

      {/* Video Section */}
      {project.videoSection && (
        <div className="relative h-[600px] md:h-[700px] lg:h-[800px] mt-16 md:mt-0">
          <VideoPlayer
            commingSoon={project.videoSection.commingSoon}
            blurImage={project.videoSection.blurImage}
            src={project.videoSection.src || ""}
            alt={project.videoSection.alt}
            className={project.videoSection.className || "w-full h-full"}
            buttonPosition={
              project.videoSection.buttonPosition || "bottom-right"
            }
            buttonSize={project.videoSection.buttonSize || "lg"}
          />
        </div>
      )}

      {/* Villa Details Section */}
      {project.villaDetails && <VillaDetails data={project.villaDetails} />}
      <Footer />
    </div>
  );
};

export default ProjectDetailClient;
