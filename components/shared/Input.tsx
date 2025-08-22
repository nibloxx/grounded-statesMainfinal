import React from 'react';

interface InputProps {
    placeholder: string;
    type?: 'text' | 'email' | 'tel' | 'textarea';
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
}

const Input: React.FC<InputProps> = ({ 
    placeholder, 
    type = 'text', 
    className = '', 
    value, 
    onChange,
}) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            className={`${className} w-full px-4 py-7 border border-[#9A9A9A] text-center bg-[#F3EEE7] text-[#313131] placeholder-[#929292] placeholder-opacity-90 text-xs libre-baskerville-regular focus:outline-none focus:border-[#B6B6B6] transition-colors duration-200`}
        />
    );
};

export default Input; 