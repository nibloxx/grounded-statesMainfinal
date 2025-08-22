import React from 'react';
import { IconType } from 'react-icons';

interface ButtonProps {
    children?: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'xs' | 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
    disabled?: boolean;
    icon?: IconType;
    iconPosition?: 'left' | 'right';
    type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    onClick,
    disabled = false,
    icon: Icon,
    iconPosition = 'left',
    type = 'button',
}) => {
    const baseClasses = 'inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantClasses = {
        primary: 'bg-[#B6B6B6] text-[#F9F8F4] hover:bg-[#A0A0A0] focus:ring-[#B6B6B6]',
        secondary: 'bg-[#F3EEE7] text-[#B6B6B6] border border-[#B6B6B6] hover:bg-[#E8E3DD] focus:ring-[#B6B6B6]',
        outline: 'bg-transparent text-[#B6B6B6] border border-[#B6B6B6] hover:bg-[#B6B6B6] hover:text-[#FFFFFF] focus:ring-[#B6B6B6]',
        ghost: 'bg-transparent text-[#B6B6B6] hover:bg-[#B6B6B6] hover:text-[#F9F8F4] focus:ring-[#B6B6B6]',
    };

    const sizeClasses = {
        xs: 'px-2 py-3 text-xs md:px-2',
        sm: 'px-2 py-1 text-xs md:px-3 md:py-1.5 md:text-sm',
        md: 'px-3 py-1.5 text-xs md:px-4 md:py-2 md:text-sm lg:px-6 lg:py-3 lg:text-base',
        lg: 'px-4 py-2 text-sm md:px-6 md:py-3 md:text-base lg:px-8 lg:py-4 lg:text-lg',
    };

    const iconClasses = {
        xs: 'w-3 h-3 md:w-4 md:h-4',
        sm: 'w-3 h-3 md:w-4 md:h-4',
        md: 'w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6',
        lg: 'w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7',
    };

    return (
        <button
            type={type}
            className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {Icon && iconPosition === 'left' && (
                <Icon className={`${iconClasses[size]} ${children ? 'mr-2' : ''}`} />
            )}
            {children}
            {Icon && iconPosition === 'right' && (
                <Icon className={`${iconClasses[size]} ${children ? 'ml-2' : ''}`} />
            )}
        </button>
    );
};

export default Button; 