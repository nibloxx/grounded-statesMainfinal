'use client';

import { MenuItem, menuItems } from '@/constants/menuData';
import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { Fragment } from 'react';
import { motion } from 'framer-motion';

interface NavbarMenuProps {
    isOpen: boolean;
    onClose: () => void;
    inline?: boolean; // when true, render as inline card (no Dialog/backdrop)
    className?: string; // extra classes for inline wrapper positioning
    title?: string; // optional title override
}

const NavbarMenu: React.FC<NavbarMenuProps> = ({ isOpen, onClose, inline = false, className = '', title = 'Overview' }) => {
    const router = useRouter();
    if (!isOpen) return null;

    const handleItemClick = (item: MenuItem) => {
        if (item.link) {
            router.push(item.link);
        }
        // onItemClick?.(item);
        // onClose();
    };

    const handleClose = () => {
        onClose();
    };

    const getStatusBadge = (status: 'new' | 'soon') => {
        const baseClasses = "px-2 py-[1px] rounded-full text-xs text-white";
        const statusClasses = status === 'new'
            ? "bg-transparent border border-[#A4A59B] text-[#A4A59B]"
            : "bg-gray-500";

        return (
            <span className={`${baseClasses} ${statusClasses}`}>
                {status}
            </span>
        );
    };

    const CardContent = (
        <motion.div 
            className="bg-black/40 rounded-xl p-3 w-60"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{ backdropFilter: "blur(24px)" }}
        >
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-white text-sm">{title}</h2>
                <div className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
            </div>
            <div className="space-y-3 overflow-y-auto">
                {menuItems.map((item, index) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ 
                            duration: 0.3, 
                            delay: index * 0.1,
                            ease: "easeOut" 
                        }}
                    >
                        {item.type === 'about' ? (
                            <button
                                onClick={() => handleItemClick(item)}
                                className="w-full bg-[#FFFFFF66] hover:bg-gray-400 text-white px-4 py-3 rounded-lg text-sm font-medium transition-colors duration-200 cursor-pointer"
                            >
                                {item.title}
                            </button>
                        ) : (
                            <button
                                onClick={() => handleItemClick(item)}
                                className="w-full flex items-center gap-3 rounded-lg hover:bg-white/10 transition-colors duration-200 text-left cursor-pointer"
                            >
                                {item.image && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ 
                                            duration: 0.4, 
                                            delay: index * 0.1 + 0.2,
                                            ease: "easeOut" 
                                        }}
                                    >
                                        <FadeInImage src={item.image} alt={item.title} />
                                    </motion.div>
                                )}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                        <span className="text-white text-sm font-medium me-3">
                                            {item.title}
                                            {item.code && ` • ${item.code}`}
                                        </span>
                                        {item.status && getStatusBadge(item.status)}
                                    </div>
                                </div>
                            </button>
                        )}
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );

    if (inline) {
        return (
            <div className={className}>{CardContent}</div>
        );
    }

    return (
        <div className='relative'>
            <Transition show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-[9999]" onClose={handleClose}>
                    <div className="fixed inset-0">
                        <div
                            className="absolute inset-0"
                            onClick={onClose}
                        />
                        <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
                            {CardContent}
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    );
};

export default NavbarMenu; 
const FadeInImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="w-14 h-14 rounded-lg overflow-hidden"
    >
      <Image
        src={src}
        alt={alt}
        width={56}
        height={56}
        className="w-full h-full object-cover"
        priority
        loading="eager"
      />
    </motion.div>
  );
};