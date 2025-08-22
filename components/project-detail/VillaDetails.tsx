'use client';
import { VillaDetailsData } from "@/types";
import React, { useState } from "react";
import { CircleOutline } from "../shared";

interface VillaDetailsProps {
  data?: VillaDetailsData;
}

const VillaDetails: React.FC<VillaDetailsProps> = ({ data }) => {
  const [activeTab, setActiveTab] = useState<string>(
    data?.layoutTabs?.[0] || ""
  );

  // Get the corresponding floor plan image based on active tab
  const getFloorPlanImage = () => {
    if (!data) return "";

    // You can modify this logic based on how you store floor plan images in your data
    if (activeTab === "Ground Floor") {
      return data.groundFloorImage || data.floorPlanImage;
    } else if (activeTab === "First Floor") {
      return data.firstFloorImage || data.floorPlanImage;
    }
    return data.floorPlanImage;
  };

  return (
    <div className="min-h-screen pt-16 mb-24">
      {/* Header Section */}
      {data?.headerLocation && (
        <section className="px-4 py-16 md:py-24">
          <div className="max-w-[355px] md:max-w-[730px] mx-auto text-center">
            <p className="text-[10px] leading-[19px] tracking-[0.15em] text-[#000000] uppercase mb-3 md:mb-5 libre-baskerville-regular">
              {data?.headerLocation}
            </p>
            <h1 className="max-w-[331px] md:max-w-[633px] mx-auto text-[20px] leading-[19px] tracking-[0.05em] md:text-[27px] text-[#000000] mb-10 libre-baskerville-regular">
              {data?.headerTitle}
            </h1>
            <p className="text-[11px] leading-[20px] md:text-[14px] md:leading-[24px] md:tracking-[0.01em] text-[#545552] libre-baskerville-regular text-justify mt-16 md:mt-0 md:text-center">
              {data?.headerDescription}
            </p>
          </div>
        </section>
      )}

      {data?.floorPlanImage && (
        <>
          {/* Villa Layout Section */}
          <section className="px-4 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-5 lg:gap-6 items-center">
                {/* Floor Plan Image */}
                <div className="lg:col-span-3">
                  <div className="bg-[#F3EEE7] px-8 py-8 md:py-4">
                    <img
                      src={getFloorPlanImage()}
                      alt={data.floorPlanAlt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Layout Content */}
                <div className="h-full lg:col-span-2 bg-[#F3EEE7] p-8 flex flex-col justify-between">
                  <div>
                    <h2 className="text-base font-bold text-[#313131] mb-4 libre-baskerville-regular">
                      {data?.layoutExploreTitle}
                    </h2>
                    <p className="text-[10px] opacity-90 font-medium text-[#646361] uppercase tracking-wider mb-6 libre-baskerville-regular">
                      {data?.layoutExploreSubtitle}
                    </p>
                    <p className="text-xs opacity-80 text-[#313131] leading-relaxed tracking-wide mb-8 libre-baskerville-regular">
                      {data?.layoutExploreDescription}
                    </p>
                  </div>
                  <div>
                    <div className="border-[0.5px] border-[#DAD9D7] my-4 mb-4 md:mb-8"></div>
                    <div className="flex items-end justify-between gap-4">
                      {data?.layoutTabs?.map((tab, idx) => (
                        <button
                          key={idx}
                          onClick={() => setActiveTab(tab)}
                          className={`text-[#313131] text-xs underline underline-offset-8 opacity-90 hover:text-gray-700 transition-colors duration-200 libre-baskerville-regular ${
                            activeTab === tab ? "font-bold" : ""
                          }`}
                        >
                          {tab}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* 3D Exploration Section */}
      <section className="px-4 mt-10 md:mt-4 mb-8 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-5 lg:gap-6 items-center ">
            {/* 3D Content */}
            <div className="h-full lg:col-span-1 bg-[#F3EEE7] p-8 flex flex-col justify-between">
              <div className="max-w-[274px] md:max-w-[440px] mx-auto md:mx-0">
                <h2 className="text-base font-bold text-[#313131] mb-4 libre-baskerville-regular">
                  {data?.threeDSectionTitle}
                </h2>
                <p className="text-[10px] opacity-90 font-medium text-[#646361] uppercase tracking-wider mb-6 libre-baskerville-regular">
                  {data?.threeDSectionSubtitle}
                </p>
                <p className="font-normal text-[11px] leading-[18px] tracking-[0em] md:text-[12px] md:leading-[20px] md:tracking-[0.005em] text-justify md:text-left text-[#313131] mb-4 md:mb-8 libre-baskerville-regular">
                  {data?.threeDSectionDescription}
                </p>
              </div>
              <div>
                <div className="max-w-[274px] md:max-w-[440px] mx-auto md:mx-0 border-[0.5px] border-[#DAD9D7] my-4 mb-4 md:mb-8"></div>
                <div className="max-w-[274px] md:max-w-[440px] mx-auto md:mx-0 flex items-end justify-between gap-4 mb-8 lg:mb-0">
                  <button className="text-[#313131] font-normal text-[12px] md:text-[14px] leading-[25px] tracking-[0.07em] underline underline-offset-8 decoration-[#7C7C7C] hover:text-gray-700 transition-colors duration-200 libre-baskerville-regular md:font-helvetica">
                    {data?.threeDButtonText}
                  </button>
                </div>
              </div>
            </div>

            {/* Image Thumbnail */}
            <div className="lg:col-span-3 relative h-[400px]">
              <div className="bg-[#F3EEE7] h-full">
                <div className="h-full relative group cursor-pointer">
                  {data?.threeDImage && (
                    <img
                      src={data.threeDImage}
                      alt={data.threeDImageAlt}
                      className={`w-full h-full object-cover ${
                        data.commingSoon ? "blur-sm" : ""
                      }`}
                    />
                  )}
                  {data?.commingSoon && (
                    <>
                      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white text-[10px] tracking-widest uppercase libre-baskerville-regular">
                        Coming Soon
                      </div>

                      <CircleOutline
                        text="soon"
                        className="absolute top-1/2 left-[30%] -translate-x-1/2 -translate-y-1/2"
                        size="xxl"
                      />
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VillaDetails;
