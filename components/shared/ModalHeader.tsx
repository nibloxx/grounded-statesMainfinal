"use client";

import React from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import Link from "next/link";

interface ModalHeaderProps {
  onClose?: () => void; // made optional
}

const ModalHeader: React.FC<ModalHeaderProps> = () => {
  return (
    <div className="flex justify-between items-center px-6 py-4">
      <div className="flex justify-center items-center w-full">
        <Link href="/" passHref>
          <Image
            src="/images/grounded-estates-logo.png"
            alt="logo"
            width={500}
            height={500}
            className="w-full md:w-[330px] h-auto cursor-pointer"
          />
        </Link>
      </div>
      {/* <div className='border border-[#585856] p-[0.5px] rounded-full'>
                <button
                    onClick={onClose}
                    className="w-6 h-6 rounded-full bg-[#8B8B8B66] flex items-center justify-center shadow-md  transition-colors"
                >
                    <IoClose className="w-5 h-5 text-white" />
                </button>
            </div> */}
    </div>
  );
};

export default ModalHeader;
