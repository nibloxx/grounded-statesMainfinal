'use client';

import React from 'react';
import ContactForm from './ContactForm';
import { useRouter } from 'next/navigation';

type UserType = 'investor' | 'client' | 'broker';

interface FormSectionProps {
    userType: UserType;
    onSubmit?: (data: any) => void;
    redirectTo?: string;
}

const FormSection: React.FC<FormSectionProps> = ({ userType, onSubmit, redirectTo = '/' }) => {
    const router = useRouter();
    const getUserDescription = (type: UserType) => {
        switch (type) {
            case 'investor':
                return 'Connect with our team to explore how your investment can help shape timeless spaces, grounded in vision, value, and lasting impact.';
            case 'client':
                return 'Connect with us to learn about future launches, quiet places of belonging, thoughtfully crafted for those who value beauty, stillness, and home.';
            case 'broker':
                return 'If our vision speaks to you, we invite you to connect. Join us in sharing homes shaped by intention, and built for a life well lived.';
            default:
                return '';
        }
    };

    const getUserHeading = (type: UserType) => {
        switch (type) {
            case 'investor':
                return 'AN INVESTOR.';
            case 'client':
                return 'A CLIENT.';
            case 'broker':
                return 'A BROKER.';
            default:
                return '';
        }
    };

    return (
        <div className="max-w-3xl xl:max-w-5xl mx-auto h-full bg-[#F3EEE7] p-6 mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 lg:gap-12 h-full">
                {/* Left Side - User Type Info */}
                <div className="space-y-6 flex flex-col lg:flex-row gap-4">
                    <div className='flex flex-col md:flex-row gap-4 justify-center item-start md:items-center lg:w-3/4 xl:w-4/6'>
                        <div className=' md:w-1/3'>
                            <p className="opacity-90 text-xs text-[#313131] gfs-didot-regular mb-2">
                                YOU ARE
                            </p>
                            <h3 className="text-2xl xl:text-3xl font-bold text-black libre-baskerville-regular text-fill-text-bg-dubai">
                                {getUserHeading(userType)}
                            </h3>
                        </div>
                        <p className="md:w-2/3 text-xs opacity-90 text-[#313131] leading-relaxed libre-baskerville-regular">
                            {getUserDescription(userType)}
                        </p>
                    </div>

                    <p className="opacity-90 lg:text-end text-xs text-[#313131] libre-baskerville-regular lg:w-1/4 xl:w-2/6">
                        Enter the information below
                    </p>
                </div>

                {/* Right Side - Form */}
                <div className="space-y-6 flex flex-col justify-center">
                    <ContactForm
                        userType={userType}
                        onSubmit={(data) => {
                            onSubmit?.(data);
                            router.push(redirectTo);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default FormSection; 