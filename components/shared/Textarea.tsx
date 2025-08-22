import React from 'react';

interface TextareaProps {
    placeholder: string;
    className?: string;
    value?: string;
    onChange?: (value: string) => void;
    rows?: number;
}

const Textarea: React.FC<TextareaProps> = ({ 
    placeholder, 
    className = '', 
    value, 
    onChange,
    rows = 4 
}) => {
    return (
        <textarea
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange?.(e.target.value)}
            rows={rows}
            className={`${className} w-full px-4 py-7 border border-[#9A9A9A] text-center bg-[#F3EEE7] text-[#313131] placeholder-[#929292] placeholder-opacity-90 text-xs libre-baskerville-regular focus:outline-none focus:border-[#B6B6B6] transition-colors duration-200 resize-none`}
        />
    );
};

export default Textarea; 