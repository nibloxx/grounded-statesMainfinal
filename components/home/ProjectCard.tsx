// "use client";
// import React from "react";
// import CircleOutline from "@/components/shared/CircleOutline";
// import { InteractiveElement, PlusCircle } from "@/components/shared";
// import { ProjectItem } from "@/types";
// import { useRouter } from "next/navigation";

// interface ProjectCardProps {
//   project: ProjectItem;
//   index: number;
// }

// const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
//   const router = useRouter();

//   const handleProjectClick = () => {
//     router.push(`/project/${project.id}`);
//   };

//   return (
//     <div className="md:me-2 relative group md:cursor-pointer">
//       {/* Project Card */}
//       <div className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
//         {/* Image with overlay text */}
//         <div className="relative h-[437px] md:h-[605px]">
//           <img
//             src={project.image}
//             alt={project.alt}
//             className="w-[309px] md:w-[462px] h-full object-cover"
//           />

//           {/* Overlay gradient for better text readability */}
//           <div className="hidden md:block absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />

//           {/* Text overlay at the top */}
//           <div className="mt-5 md:mt-0 absolute top-0 left-0 right-0 px-4 grid grid-cols-[1fr_2fr_1fr] items-center">
//             {/* Column 1: Sequence Number */}
//             <div className="flex items-center relative py-2">
//               <span className="text-[36px] leading-[40px] tracking-[-0.01em] md:text-5xl drop-shadow-lg text-fill-text-bg gfs-didot-regular">
//                 {String(project.id).padStart(2, "0")}.
//               </span>
//               {/* Vertical border that extends to bottom */}
//               <div className="absolute left-full top-0 bottom-0 w-px bg-[#F9F8F4]"></div>
//             </div>

//             {/* Column 2: Location Name */}
//             <div className="flex justify-end">
//               <span className="text-[12px] leading-[19px] font-normal tracking-[0.15em] md:text-[10px] md:font-medium text-white uppercase md:tracking-wide libre-baskerville-regular text-center">
//                 {project.propertyName}
//               </span>
//             </div>

//             {/* Column 3: Interactive Element */}
//             <div className="hidden md:flex justify-end">
//               <div className="border border-white p-[2px] rounded-full">
//                 <div className="w-12 h-4 bg-white backdrop-blur-sm rounded-full flex items-center justify-end">
//                   <div className="flex space-x-1 me-2">
//                     <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
//                     <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Bottom border that connects with vertical border */}
//             <div className="absolute bottom-0 left-0 right-0 h-px bg-[#F9F8F4]"></div>
//           </div>

//           {/* Property Name (if available)
//                     {project.propertyName && (
//                         <div className="hidden md:block absolute bottom-4 left-4 right-4">
//                             <p className="text-white text-sm font-medium drop-shadow-lg">
//                                 {project.propertyName}
//                             </p>
//                         </div>
//                     )} */}

//           <div className="md:hidden absolute bottom-4 right-4">
//             <img
//               src="/images/projectsIcon.png"
//               alt={project.alt}
//               className="w-full h-full object-contain"
//             />
//           </div>
//           {/* Hover overlay */}
//           <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

//           {/* CircleOutline on hover */}
//           <div className="hidden md:block">
//             <div className="flex absolute inset-0 items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//               <CircleOutline
//                 size="lg"
//                 text="open"
//                 className="z-10"
//                 onClick={() => handleProjectClick()}
//               />
//             </div>
//           </div>
//           <div className="block md:hidden absolute bottom-4 right-4">
//             <PlusCircle size="sm" onClick={() => handleProjectClick()} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectCard;

"use client";
import React, { useState } from "react";
import Image from "next/image";
import CircleOutline from "@/components/shared/CircleOutline";
import { InteractiveElement, PlusCircle } from "@/components/shared";
import { ProjectItem } from "@/types";
import { useRouter } from "next/navigation";

interface ProjectCardProps {
  project: ProjectItem;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const router = useRouter();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  // const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  //   const rect = e.currentTarget.getBoundingClientRect();
  //   setMousePosition({
  //     x: e.clientX - rect.left,
  //     y: e.clientY - rect.top,
  //   });
  // };

  const handleProjectClick = () => {
    router.push(`/project/${project.slug}`);
  };

  return (
    <div
      className="md:me-2 relative group "
      // onMouseMove={handleMouseMove}
      // onMouseEnter={() => setIsHovering(true)}
      // onMouseLeave={() => setIsHovering(false)}
    >
      {/* Project Card */}
      <div className="bg-white border  border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
        {/* Image with overlay text */}
        <div
          onClick={handleProjectClick}
          className="relative cursor-open h-[437px] md:h-[605px]"
        >
          <Image
            src={project.image}
            alt={project.alt}
            width={462}
            height={605}
            loading="lazy"
            sizes="(max-width: 768px) 309px, 462px"
            className="w-[309px] md:w-[462px] h-full object-cover"
          />

          {/* Overlay gradient for better text readability */}
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,rgba(0,0,0,0.45)_100%)]" />

          {/* Text overlay at the top */}
          <div className="mt-5 md:mt-0 absolute top-0 left-0 right-0 px-4 grid grid-cols-[auto_1fr_auto] items-center gap-6">
            {/* Column 1: Sequence Number */}
            <div className="flex items-center relative py-2">
              <span className="text-[36px] leading-[40px] tracking-[-0.01em] md:text-5xl drop-shadow-lg text-fill-text-bg-all-devices gfs-didot-regular">
                {String(project.id).padStart(2, "0")}.
              </span>
              {/* Vertical border that extends to bottom */}
              <div className="absolute left-full ml-3 top-0 bottom-0 w-px bg-white/50"></div>
            </div>

            {/* Column 2: Location Name */}
            <div className="flex justify-start">
              <span className="text-[12px] leading-[19px] font-normal tracking-[0.15em] md:text-[10px] md:font-medium text-white uppercase md:tracking-wide libre-baskerville-regular text-center">
                {project.propertyName}
              </span>
            </div>

            {/* Column 3: Interactive Element */}
            <div className="hidden md:flex justify-end">
              <div className="border border-white p-[2px] rounded-full">
                <div className="w-12 h-4 bg-white backdrop-blur-sm rounded-full flex items-center justify-end">
                  <div className="flex space-x-1 me-2">
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                    <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom border that connects with vertical border */}
            <div className="absolute bottom-0 left-4 right-4 h-px bg-white/50"></div>
          </div>

          <div className="md:hidden absolute bottom-4 right-4">
            <img
              src="/images/projectsIcon.png"
              alt={project.alt}
              className="w-full h-full object-contain"
            />
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />

          {/* CircleOutline on hover - now follows mouse position */}
          <div className="hidden md:block absolute inset-0 items-center justify-center opacity-0 transition-opacity duration-300 pointer-events-none">
            <CircleOutline
              size="lg"
              text="open"
              className="z-10 opacity-0"
              onClick={() => handleProjectClick()}
            />
            {/* {isHovering && (
              <div
                className="fixed pointer-events-none z-50" // Changed to fixed positioning
                style={{
                  left: `${mousePosition.x}px`,
                  top: `${mousePosition.y}px`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <CircleOutline size="lg" text="open" />
              </div>
            )} */}
          </div>

          <div className="block md:hidden absolute bottom-4 right-4">
            <PlusCircle size="sm" onClick={handleProjectClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
