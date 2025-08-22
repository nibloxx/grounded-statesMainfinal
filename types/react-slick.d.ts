declare module 'react-slick' {
    import React from 'react';
    
    export interface Settings {
        accessibility?: boolean;
        adaptiveHeight?: boolean;
        arrows?: boolean;
        asNavFor?: any;
        autoplay?: boolean;
        autoplaySpeed?: number;
        centerMode?: boolean;
        centerPadding?: string;
        className?: string;
        cssEase?: string;
        customPaging?: (index: number) => React.ReactNode;
        dots?: boolean;
        dotsClass?: string;
        draggable?: boolean;
        easing?: string;
        edgeFriction?: number;
        fade?: boolean;
        focusOnSelect?: boolean;
        infinite?: boolean;
        initialSlide?: number;
        lazyLoad?: boolean | 'ondemand' | 'progressive';
        nextArrow?: React.ReactNode;
        pauseOnDotsHover?: boolean;
        pauseOnFocus?: boolean;
        pauseOnHover?: boolean;
        prevArrow?: React.ReactNode;
        responsive?: Array<{
            breakpoint: number;
            settings: Settings;
        }>;
        rows?: number;
        rtl?: boolean;
        slide?: string;
        slidesPerRow?: number;
        slidesToScroll?: number;
        slidesToShow?: number;
        speed?: number;
        swipe?: boolean;
        swipeEvent?: (swipeDirection: string) => void;
        swipeToSlide?: boolean;
        touchMove?: boolean;
        touchThreshold?: number;
        useCSS?: boolean;
        useTransform?: boolean;
        variableWidth?: boolean;
        vertical?: boolean;
        verticalSwiping?: boolean;
        waitForAnimate?: boolean;
        zIndex?: number;
        gap?: number;
        afterChange?: (currentSlide: number) => void;
        beforeChange?: (currentSlide: number, nextSlide: number) => void;
        onSwipe?: (swipeDirection: string) => void;
        onLazyLoad?: (slidesToLoad: number[]) => void;
        onReInit?: () => void;
        onSetPosition?: () => void;
        onEdge?: (swipeDirection: string) => void;
        onBreakpoint?: (breakpoint: number) => void;
        onFocus?: () => void;
        onBlur?: () => void;
    }
    
    export interface SlickProps extends Settings {
        children?: React.ReactNode;
        ref?: React.RefObject<any>;
    }
    
    const Slider: React.FC<SlickProps>;
    export default Slider;
} 