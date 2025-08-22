"use client";

import React from "react";
import Button from "./Button";

interface CardProps {
  title: string;
  heading: string;
  description: string;
  buttonText: string;
  buttonVariant?: "primary" | "secondary" | "outline" | "ghost";
}

type UserType = "investor" | "client" | "broker";

interface CardsSectionProps {
  onCardClick: (userType: UserType) => void;
}

const cardData = [
  {
    title: "YOU ARE",
    heading: "AN INVESTOR.",
    description:
      "Connect with our team to explore how your investment can help shape timeless spaces, grounded in vision, value, and lasting impact.",
    buttonText: "GET IN TOUCH WITH OUR TEAM",
    buttonVariant: undefined,
    userType: "investor" as UserType,
  },
  {
    title: "YOU ARE",
    heading: "A CLIENT.",
    description:
      "Connect with us to learn about future launches, quiet places of belonging, thoughtfully crafted for those who value beauty, stillness, and home.",
    buttonText: "GET NOTIFIED OF OUR NEXT LAUNCH",
    buttonVariant: "outline" as const,
    userType: "client" as UserType,
  },
  {
    title: "YOU ARE",
    heading: "A BROKER.",
    description:
      "If our vision speaks to you, we invite you to connect. Join us in sharing homes shaped by intention, and built for a life well lived.",
    buttonText: "BECOME A REGISTERED PARTNER",
    buttonVariant: undefined,
    userType: "broker" as UserType,
  },
];

const Card: React.FC<
  CardProps & { userType: UserType; onCardClick: (userType: UserType) => void }
> = ({
  title,
  heading,
  description,
  buttonText,
  buttonVariant,
  userType,
  onCardClick,
}) => {
  return (
    <div className="bg-[#F3EEE7] rounded-lg px-4 py-6 xl:py-8 xl:px-10 flex flex-col h-[400px] md:h-[460px]">
      <div className="mb-4">
        <p className="text-xs font-normal leading-[13px] text-[#313131] libre-baskerville-regular mb-2">
          {title}
        </p>
        <h3 className="text-xl lg:text-[30px] font-bold text-black libre-baskerville-regular text-fill-text-bg-dubai">
          {heading}
        </h3>
      </div>
      <p className="text-[12px] tracking-tight font-normal  text-[#313131] leading-[20px] flex-1 mb-6 libre-baskerville-regular">
        {description}
      </p>
      <Button
        size="xs"
        variant={buttonVariant}
        className=" w-full py-2 bg-[#B6B6B6]  uppercase text-[9px] tracking-wider libre-baskerville-regular rounded-sm"
        onClick={() => onCardClick(userType)}
      >
        {buttonText}
      </Button>
    </div>
  );
};

const CardsSection: React.FC<CardsSectionProps> = ({ onCardClick }) => {
  return (
    <>
      {/* Heading Section */}
      <div className="text-center space-y-12 mb-16">
        <span className="me-7 text-3xl tracking-[-0.01em] md:text-[40px] text-[#313131] gfs-didot-regular-italic leading-[80px]">
          TAKE
        </span>
        <span className="me-4 text-3xl tracking-[0.06em] leading-[80px] md:text-[59px] gfs-didot-regular text-fill-text-bg-1">
          PART
        </span>
        <span className="me-4 text-3xl tracking-[-0.01em] md:text-[40px] text-[#313131] gfs-didot-regular-italic leading-[80px]">
          OF THE
        </span>
        <br />
        <span className="me-4 text-3xl tracking-[-0.01em] md:text-[40px] text-[#313131] gfs-didot-regular-italic leading-[80px]">
          GROUNDED ESTATES
        </span>
        <span className="me-4 text-3xl md:text-6xl text-fill-custom gfs-didot-regular mb-6 leading-tight text-fill-text-bg-1">
          FAMILY
        </span>
        <p className="text-[14px] font-normal leading-[24px] tracking-[-0.01em] text-[#313131] max-w-xl mx-auto mb-12 libre-baskerville-regular">
          We welcome those who share our quiet vision of place and purpose. If
          you feel aligned with our way of building and being, reach out.
          Together, we&apos;ll shape spaces with meaning and write the next
          chapter of Dubai&apos;s living landscape.
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 h-[460px]">
        {cardData.map((item, index) => (
          <Card key={index} {...item} onCardClick={onCardClick} />
        ))}
      </div>
    </>
  );
};

export default CardsSection;
