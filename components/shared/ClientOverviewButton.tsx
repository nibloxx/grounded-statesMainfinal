"use client";

import dynamic from 'next/dynamic';

// Client-side only component for interactive button
export const OverviewButton = dynamic(() => import('./OverviewButton'), {
  loading: () => (
    <div className="bg-[#00000066] backdrop-blur-[10px] flex items-center justify-center gap-1 px-4 py-2 text-sm transition rounded-full">
      <span className="text-white text-sm">Overview</span>
      <div className="grid grid-cols-2 gap-0.5 mt-[2px] ms-2">
        <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
        <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
        <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
        <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
      </div>
    </div>
  ),
  ssr: true, // Enable SSR for immediate display
});
