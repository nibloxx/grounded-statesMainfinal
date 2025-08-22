"use client";
import React, { useState } from "react";
import ImageSlider from "../shared/ImageSlider";
import ProgressLine from "../shared/ProgressLine";
import { useRouter } from "next/navigation";

interface AboutPropertyProps {
  heading: string;
  subHeading: string;
  description: string;
  headingClassName?: string;
  images: {
    receptionArea?: string;
    familyLivingRoom?: string;
    formalLivingRoom?: string;
    loungeView?: string;
    showKitchen?: string;
    upstairsLounge?: string;
    dinningRoom?: string;
    outsideLounge?: string;
    masterBedroom?: string;
    masterBathroom?: string;
    wineCellar?: string;
    poolHouse?: string;
    entranceHall?: string;
    office?: string;
    outsidePoolArea?: string;
    bedRoom2?: string;
    cinemaRoom?: string;
    villaA10?: string;
    villaA20?: string;
    villaA15?: string;
    ht32?: string;
    carGarrage?: string;
  };
}

const AboutProperty: React.FC<AboutPropertyProps> = ({
  heading,
  subHeading,
  description,
  headingClassName,
  images,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState('');
  const [modalImageAlt, setModalImageAlt] = useState('');
  const router = useRouter();

  // Function to handle project navigation
  const handleProjectNavigation = (imageId: number) => {
    switch (imageId) {
      case 10: // villaA10
        router.push("/project/lime-tree-valley-villa-a10/");
        break;
      case 11: // villaA20
        router.push("/project/lime-tree-valley-villa-a20/");
        break;
      case 12: // villaA15 or ht32
        if (images.ht32) {
          router.push("/project/emirates-hills-villa-ht32/");
        } else if (images.villaA15) {
          router.push("/project/lime-tree-valley-villa-a15/");
        }
        break;
      default:
        break;
    }
  };

  const livingRoomImages = [
    {
      id: 1,
      src: images.familyLivingRoom || images.cinemaRoom || images.carGarrage,
      alt: images.carGarrage
        ? "Car Garrage"
        : images.cinemaRoom
        ? "Cinema Room"
        : "Family Living Room",
      title: images.carGarrage
        ? "Car Garrage"
        : images.cinemaRoom
        ? "Cinema Room"
        : "Family Living Room",
    },
    {
      id: 2,
      src: images.receptionArea || images.formalLivingRoom,
      alt: images.receptionArea ? "Reception Area" : "Formal Living Room",
      title: images.receptionArea ? "Reception Area" : "FORMAL LIVING ROOM",
    },
    {
      id: 3,
      src: images.wineCellar || images.entranceHall || images.loungeView,
      alt: images.wineCellar
        ? "Staircase & Wine Cellar"
        : images.entranceHall
        ? "Staircase & Entrance Hall"
        : "Lounge View",
      title: images.wineCellar
        ? "Wine Cellar"
        : images.entranceHall
        ? "Staircase & Entrance Hall"
        : "Lounge View",
    },
    {
      id: 4,
      src: images.showKitchen || images.poolHouse,
      alt: images.poolHouse ? "Pool House" : "Show Kitchen",
      title: images.poolHouse ? "Pool House" : "KITCHEN",
    },
    {
      id: 5,
      src: images.upstairsLounge,
      alt: "Upstairs Lounge",
      title: "UPSTAIRS LOUNGE",
    },
    {
      id: 6,
      src: images.dinningRoom || images.office,
      alt: images.office ? "Private Office" : "Dining Room",
      title: images.office ? "PRIVATE OFFICE" : "DINING ROOM",
    },
    {
      id: 7,
      src: images.outsideLounge || images.outsidePoolArea,
      alt: images.outsidePoolArea ? "Outside Pool Area" : "Outside Lounge",
      title: images.outsidePoolArea ? "OUTSIDE POOL AREA" : "OUTSIDE LOUNGE",
    },
    {
      id: 8,
      src: images.masterBedroom || images.bedRoom2,
      alt: images.masterBedroom ? "Master Bedroom" : "Bedroom 2",
      title: images.masterBedroom ? "MASTER BEDROOM" : "BEDROOM 2",
    },
    {
      id: 9,
      src: images.masterBathroom,
      alt: "Master Bathroom",
      title: "MASTER BATHROOM",
    },
    {
      id: 10,
      src: images.villaA10,
      alt: "Villa A10",
      title: "Lime Tree Valley, Villa A10",
    },
    {
      id: 11,
      src: images.villaA20,
      alt: "Villa A20",
      title: "Lime Tree Valley, Villa A20",
    },
    {
      id: 12,
      src: images.villaA15 || images.ht32,
      alt: images.ht32
        ? "Emirates Hills, Villa HT32"
        : "Lime Tree Valley, Villa A15",
      title: images.ht32
        ? "Emirates Hills, Villa HT32"
        : "Lime Tree Valley, Villa A15",
    },
    {
      id: 13,
      src: images.loungeView,
      alt: "Lounge View",
      title: "Lounge View",
    },
  ].filter((item) => item.src);

  const handleSlideChange = (swiper: any) => {
    // Use realIndex for looped slides, fallback to activeIndex
    const slideIndex =
      swiper.realIndex !== undefined ? swiper.realIndex : swiper.activeIndex;
    setCurrentSlide(slideIndex);
  };

  const handleImageModalClick = (imageSrc: string, imageAlt: string) => {
    setModalImageSrc(imageSrc);
    setModalImageAlt(imageAlt);
    setIsModalOpen(true);
  };

  const renderLivingRoomCard = (item: any, index: number) => {
    const image = item as {
      id: number;
      src: string;
      alt: string;
      title: string;
    };

    return (
      <div
        onClick={() => handleProjectNavigation(image.id)} // Add click handler
        style={{
          cursor: [10, 11, 12].includes(image.id) ? "pointer" : "default",
        }}
        className="relative w-full"
      >
        <img
          src={image.src}
          alt={image.alt}
          className="w-[332px] md:w-[550px] lg:w-[750px] xl:w-[912px] h-full object-cover rounded-[5px]"
        />
        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 rounded-[5px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.3) 100%)",
          }}
        ></div>
        {/* Image Label */}
        <div className="absolute bottom-4 left-4">
          <p className="text-[#F9F8F4] font-normal text-[12px] md:text-[10px] leading-[19px] tracking-[0.12em] uppercase libre-baskerville-regular">
            {image.title}
          </p>
        </div>
        {/* Interactive Icon */}
        <div className="absolute top-4 right-4 border border-white rounded-full p-[2px]">
          <div 
            className="w-6 h-6 bg-white rounded-full flex items-center justify-center cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              handleImageModalClick(image.src, image.alt);
            }}
          >
            <span className="text-[#545552] text-2xl">+</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className=" py-16 md:py-24">
      <div className="pl-4">
        {/* Text Content Section */}
        <div className="mb-12 md:mb-16">
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12">
            {/* Text Content */}
            <div className="flex-1 md:mx-6">
              <h2 className={`libre-baskerville-regular font-normal text-[18px] leading-[19px] tracking-[0] text-[#313131] mb-3 md:mb-4 normal-case ${headingClassName ?? ''}`}>
                {heading}
              </h2>
              <p className="font-normal text-[14px] leading-[25px] tracking-[0] md:text-[10px] md:leading-[19px] md:tracking-[0.12em]  text-[#313131] md:text-[#646361] mb-3 md:mb-4 libre-baskerville-regular">
                {subHeading}
              </p>
              <p className="max-w-[350px] md:max-w-[430px] font-normal text-[11px] leading-[18px] md:text-[12px] md:leading-[20px] md:tracking-[0.005em] text-justify text-[#313131] libre-baskerville-regular">
                {description}
              </p>
            </div>

            {/* Visual Separator Line */}
            <div className="hidden md:block flex-1 mt-24 md:pe-16 lg:pe-24 xl:pe-32">
              <ProgressLine
                totalSlides={livingRoomImages.length}
                currentSlide={currentSlide}
                lineColor="#DAD9D7"
                fillColor="#82847F"
                height="2px"
              />
            </div>
          </div>
        </div>

        {/* Images Section */}
        <div>
          <div className="h-[267px] md:h-[500px] lg:!h-[540px]">
            <ImageSlider
              items={livingRoomImages}
              renderCard={renderLivingRoomCard}
              slidesPerView={{ mobile: 1.1, tablet: 1.3, desktop: 1.15 }}
              spaceBetween={16}
              autoplayDelay={0}
              showPagination={false}
              showNavigation={false}
              className="h-full"
              onSlideChange={handleSlideChange}
            />
          </div>

          {/* Progress Line */}
          <div className="md:hidden flex items-center justify-center gap-2 mt-24 w-3/5 mx-auto">
            <ProgressLine
              totalSlides={livingRoomImages.length}
              currentSlide={currentSlide}
              lineColor="#DAD9D7"
              fillColor="#646361"
              height="2px"
            />
          </div>
        </div>
      </div>

      {/* Modal pour afficher l'image en plein écran */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[9999]"
          onClick={() => setIsModalOpen(false)}
        >
          <div className="relative max-w-[90vw] max-h-[90vh]">
            <img
              src={modalImageSrc}
              alt={modalImageAlt}
              className="max-w-full max-h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-75 transition-all"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutProperty;