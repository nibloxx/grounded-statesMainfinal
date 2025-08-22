"use client";

import React from "react";
import { CardsSection, ModalHeader, OverviewButton } from "@/components/shared";
import { useRouter } from "next/navigation";

type UserType = "investor" | "client" | "broker";

export default function RegisterPage() {
  const router = useRouter();

  const handleCardClick = (userType: UserType) => {
    router.push(`/register/${userType}`);
  };

  return (
    <div className="min-h-screen bg-[#F9F8F4]">
      <ModalHeader />

      <div className="max-w-7xl mx-auto w-full px-6 py-12">
        <CardsSection onCardClick={handleCardClick} />
      </div>

      {/* Overview Button - Desktop */}
      <div className="hidden lg:block fixed top-[40px] right-4 transform -translate-y-1/2 z-[60]">
        <OverviewButton className="bg-[#00000066] backdrop-blur-[10px] hover:bg-black/40 hover:backdrop-blur-xl text-white border-none" />
      </div>
      
      {/* Overview Button - Mobile */}
      <div className="fixed bottom-0 z-[60] left-1/2 -translate-x-1/2 lg:hidden flex justify-center transform -translate-y-1/2">
        <OverviewButton
          showBorder={false}
          className="bg-[#00000066] backdrop-blur-[10px] hover:bg-black/40 hover:backdrop-blur-xl text-white border-none flex items-center justify-center gap-1 px-4 py-2 rounded-full text-sm"
        />
      </div>
    </div>
  );
}
