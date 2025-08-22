import React from 'react';
import CircleOutline from '@/components/shared/CircleOutline';

interface PropertyItem {
    id: number;
    src: string;
    alt: string;
    title: string;
    width?: string;
    height?: string;
    blur?: boolean;
}

interface PropertyCardProps {
    property: PropertyItem;
    index: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, index }) => {

    // Convert height string to actual height value
    const getHeightClass = (height: string) => {
        switch (height) {
            case "xl": return "md:h-80 h-full";
            case "lg": return "md:h-72 h-full";
            case "md": return "md:h-64 h-full";
            case "sm": return "md:h-40 h-full";
            default: return "md:h-72 h-full"; // default fallback
        }
    };

    return (
        <div className={`relative group flex items-center w-full justify-center p-2 h-full md:me-2 md:ms-2 `}>
            {/* Property Card */}
            <div className={`bg-white overflow-hidden transition-shadow duration-300 ${getHeightClass(property.height || "72")} w-full md:w-64`}>
                {/* Image */}
                <div className={`relative h-full w-full`}>
                    <img
                        src={property.src}
                        alt={property.alt}
                        className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${property.blur ? "blur-sm" : ""}`}
                    />

                    {/* Overlay gradient for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
            </div>
        </div>
    );
};

export default PropertyCard; 