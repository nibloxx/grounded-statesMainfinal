'use client';

import React, { useState, useRef, useEffect } from 'react';
import NavbarMenu from './NavbarMenu';
import { MenuItem } from '@/constants/menuData';

interface OverviewButtonProps {
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
    borderClassName?: string;
    showBorder?: boolean;
    onMenuItemClick?: (item: MenuItem) => void;
}

const OverviewButton: React.FC<OverviewButtonProps> = ({
    onClick,
    className = "",
    children = "Overview",
    borderClassName = "",
    showBorder = true,
    onMenuItemClick
}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const openTimerRef = useRef<number | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Detect mobile device
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024); // lg breakpoint
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Handle click outside to close menu on mobile
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isMobile && isMenuOpen && containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsMenuOpen(false);
            }
        };

        if (isMobile && isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
            return () => document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [isMobile, isMenuOpen]);

    const clearOpenTimer = () => {
        if (openTimerRef.current !== null) {
            window.clearTimeout(openTimerRef.current);
            openTimerRef.current = null;
        }
    };

    const handleButtonClick = () => {
        if (isMobile) {
            // On mobile, toggle immediately
            setIsMenuOpen(prev => !prev);
        } else {
            // On desktop, open immediately
            setIsMenuOpen(true);
        }
        onClick?.();
    };

    const handleMenuClose = () => {
        setIsMenuOpen(false);
    };

    const handleMenuItemClick = (item: MenuItem) => {
        onMenuItemClick?.(item);
    };
    // Check if transparent styling is requested
    const isTransparent = className.includes('bg-transparent') || className.includes('noborder');
    
    // Check if border should be hidden
    const hideBorder = isTransparent || className.includes('border-none');

    // Conditional styling based on transparency and custom border
    const containerClasses = hideBorder
        ? ''
        : showBorder
            ? `${borderClassName || 'border border-[#585856] rounded-full'} transition-colors duration-200 group-hover:border-transparent`
            : '';

    const buttonClasses = isTransparent
        ? `bg-white/20 backdrop-blur-2xl flex items-center justify-center gap-1 px-4 py-2 text-sm rounded-full ${className}`
        : `bg-[#00000066] backdrop-blur-[10px] border flex items-center justify-center gap-1 border-gray-300 px-4 py-2 rounded-full text-sm shadow ${className}`;

    return (
        <div
            ref={containerRef}
            className="relative inline-block group"
            onMouseEnter={!isMobile ? () => {
                clearOpenTimer();
                openTimerRef.current = window.setTimeout(() => setIsMenuOpen(true), 150);
            } : undefined}
            onMouseLeave={!isMobile ? () => {
                clearOpenTimer();
                setIsMenuOpen(false);
            } : undefined}
        >
            {hideBorder ? (
                <button
                    onClick={handleButtonClick}
                    className={`${buttonClasses} transition-all duration-500 ease-out group-hover:pr-20 ${isMenuOpen ? 'opacity-0 scale-95 translate-y-1 pointer-events-none' : 'opacity-100 scale-100'}`}
                >
                    {children}
                    <div className="grid grid-cols-2 gap-0.5 mt-[2px] ms-2">
                        <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                        <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                        <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                        <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                    </div>
                </button>
            ) : (
                <div className={containerClasses}>
                    <button
                        onClick={handleButtonClick}
                        className={`${buttonClasses} transition-all duration-500 ease-out group-hover:pr-20 ${isMenuOpen ? 'opacity-0 scale-95 translate-y-1 pointer-events-none' : 'opacity-100 scale-100'}`}
                    >
                        {children}
                        <div className="grid grid-cols-2 gap-0.5 mt-[2px] ms-2">
                            <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                            <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                            <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                            <div className="w-[3px] h-[3px] bg-white rounded-full"></div>
                        </div>
                    </button>
                </div>
            )}

            {/* Navbar Menu - dropup on mobile/tablet, replace on desktop */}
            <div
                className={`absolute cursor-pointer right-0 transition-all duration-500 ease-out z-50
                bottom-full mb-2 origin-bottom-right 
                md:bottom-full md:mb-2 md:origin-bottom-right 
                lg:top-0 lg:mb-0 lg:origin-top-right ${isMenuOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
            >
                <NavbarMenu
                    isOpen={isMenuOpen}
                    onClose={handleMenuClose}
                    // onItemClick={handleMenuItemClick}
                    inline
                    className="shadow-lg"
                    title="Overview"
                />
            </div>
        </div>
    );
};

export default OverviewButton; 