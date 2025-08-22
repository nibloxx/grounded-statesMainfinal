"use client";

import React from "react";
import Image from "next/image";
import logo from "../../public/images/grounded-estates-logo.png";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FiMessageCircle } from "react-icons/fi";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  const handleMapClick = () => {
    console.log("Map button clicked"); // Debug log
    const address = "Jumeirah Golf Estates, Dubai, UAE";
    const encodedAddress = encodeURIComponent(address);
    
    // Always use Google Maps for better compatibility
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;
    
    try {
      window.open(googleMapsUrl, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error('Error opening map:', error);
      // Fallback - direct navigation
      window.location.href = googleMapsUrl;
    }
  };

  return (
    <footer className=" text-black pb-8 px-8 bg-mobileFooter md:bg-desktopFooter bg-no-repeat bg-cover bg-center">
      {/* <div className="skin-shade-overlay -z-20"></div> */}
      <div className="md:container mx-auto z-50">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-y-4 md:gap-y-52">
          {/* Top Row */}
          <div className="md:col-span-12 py-6">
            {/* Mobile Layout */}
            <div className="flex flex-col space-y-6 md:hidden">
              {/* Logo - Full Row */}
              <div className="w-full flex justify-center">
                <Image src={logo} width={330} height={40} alt="Logo" />
              </div>

              {/* Navigation - Space Between */}
              <div className="flex justify-between items-start text-[10px] leading-[19px] tracking-[0.12em] text-[#646361] uppercase">
                <div className="space-y-1">
                  <h2 className="font-helvetica">Home</h2>
                  <h2 className="font-helvetica">Set A Meeting</h2>
                </div>
                <div className="space-y-1 text-right">
                  <h2 className="font-helvetica">Contact</h2>
                  <button
                    onClick={() => router.push("/register")}
                    className="font-helvetica hover:text-gray-600 transition-colors cursor-pointer"
                  >
                    REGISTER MY INTEREST
                  </button>
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex justify-between items-start text-[10px] leading-[19px] tracking-[0.12em] text-[#313131] uppercase">
              {/* Left */}
              <div className="space-y-1">
                <h2 className="libre-baskerville-regular">Contact</h2>
                <button
                  onClick={() => router.push("/register")}
                  className="libre-baskerville-regular hover:text-gray-600 transition-colors cursor-pointer"
                >
                    REGISTER MY INTEREST
                    </button>
              </div>

              {/* Center Logo */}
              <div className="w-[330px] h-[40px] flex justify-center items-center">
                <Image src={logo} width={330} height={40} alt="Logo" />
              </div>

              {/* Right */}
              <div className="text-right space-y-1">
                <h2 className="libre-baskerville-regular">Home</h2>
                <h2 className="libre-baskerville-regular">Set A Meeting</h2>
              </div>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="md:col-span-12">
            {/* Mobile Layout */}
            <div className="flex flex-col space-y-24 md:hidden">
              {/* Projects & Communities Buttons - Space Between */}
              <div className="flex justify-between gap-8">
                <Button
                  variant="secondary"
                  size="sm"
                  className="w-full uppercase leading-[19px] text-[10px] tracking-[0.12em] libre-baskerville-regular rounded-[3px] !text-[#B6B6B6] border border-[#B6B6B6] bg-[#F3EEE7] h-[32px]"
                >
                  Projects
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  className="w-full uppercase text-[10px] leading-[19px] tracking-[0.12em] libre-baskerville-regular rounded-[3px] h-[32px] !text-[#F9F8F4] bg-[#B6B6B6]"
                >
                  Communities
                </Button>
              </div>

              {/* Dubai Section - Start Alignment */}
              <div className="space-y-4">
                <h2 className="text-[25px] gfs-didot-regular tracking-[-0.01em] uppercase text-[#313131] font-normal leading-[13px]">
                  Dubai, UAE
                </h2>

                <div className="flex gap-3 items-center">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleMapClick}
                    className="w-auto text-[10px] leading-[19px] tracking-[0.12em] uppercase libre-baskerville-regular rounded-[3px] h-[32px] !bg-[#B6B6B6] !text-[#F9F8F4]"
                  >
                    See on map
                  </Button>
                  {/* <div className="flex gap-2">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            icon={FaInstagram}
                                            className="w-8 h-8 p-0 rounded-full"
                                        />
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            icon={FiMessageCircle}
                                            className="w-8 h-8 p-0 rounded-full"
                                        />
                                    </div> */}
                </div>
              </div>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex justify-between items-end w-full">
              {/* Left Section */}
              <div className="space-y-4">
                <h2 className="text-[25px] gfs-didot-regular tracking-[-0.01em] uppercase text-[#313131] font-normal leading-[13px]">
                  Dubai, UAE
                </h2>

                <div className="flex gap-3 items-center">
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={handleMapClick}
                    className="w-auto text-[10px] leading-[19px] text-[#F9F8F4] h-[32px] tracking-[0.12em] uppercase libre-baskerville-regular rounded-[3px] bg-[#B6B6B6]"
                  >
                    See on map
                  </Button>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      icon={FaInstagram}
                      className="w-10 h-10 p-0 rounded-full border border-[#B6B6B6]"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      icon={FaWhatsapp}
                      className="w-10 h-10 p-0 rounded-full border border-[#B6B6B6]"
                    />
                  </div>
                </div>
              </div>

              {/* Right buttons */}
              <div className="flex gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  className="uppercase leading-[19px] text-[10px] tracking-[0.12em] libre-baskerville-regular rounded-[3px] border border-[#B6B6B6] bg-[#F3EEE7] text-[#B6B6B6] h-[32px]"
                >
                  Projects
                </Button>
                <Button
                  variant="primary"
                  size="sm"
                  className="uppercase leading-[19px] text-[10px] tracking-[0.12em] libre-baskerville-regular rounded-[3px] bg-[#B6B6B6] text-[#F9F8F4] h-[32px]"
                >
                  Communities
                </Button>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="text-[#B6B6B6] font-normal mt-10 flex flex-col md:flex-row justify-between items-start md:items-center border-t border-[#DAD9D7] pt-4 not-italic text-[10px] leading-[19px] tracking-[0.12em] uppercase libre-baskerville-regular space-y-2 md:space-y-0">
              <span>©Grounded Estate - All Rights Reserved</span>
              <span>Privacy Policy – Terms of Use</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
