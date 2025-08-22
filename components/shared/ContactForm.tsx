'use client'
import React, { useState } from 'react';
import Input from './Input';
import Textarea from './Textarea';
import Button from './Button';

interface ContactFormProps {
    userType: 'investor' | 'client' | 'broker';
    onSubmit: (data: FormData) => void;
}

interface FormData {
    firstName: string;
    lastName: string;
    companyName?: string;
    phoneNumber: string;
    email: string;
    brokerId?: string;
    emiratesId?: string;
    message?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({ userType, onSubmit }) => {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        companyName: '',
        phoneNumber: '',
        email: '',
        brokerId: '',
        emiratesId: '',
        message: ''
    });

    const handleInputChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    const getFormFields = () => {
        switch (userType) {
            case 'investor':
                return (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                                placeholder="FIRST NAME"
                                value={formData.firstName}
                                onChange={(value) => handleInputChange('firstName', value)}
                            />
                            <Input
                                placeholder="LAST NAME"
                                value={formData.lastName}
                                onChange={(value) => handleInputChange('lastName', value)}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                                placeholder="PHONE NUMBER"
                                type="tel"
                                value={formData.phoneNumber}
                                onChange={(value) => handleInputChange('phoneNumber', value)}
                            />
                            <Input
                                placeholder="E-MAIL ADDRESS"
                                type="email"
                                value={formData.email}
                                onChange={(value) => handleInputChange('email', value)}
                            />
                        </div>
                        <Textarea
                            placeholder="MESSAGE"
                            rows={4}
                            value={formData.message}
                            onChange={(value) => handleInputChange('message', value)}
                        />
                    </>
                );
            case 'client':
                return (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                                placeholder="FIRST NAME"
                                value={formData.firstName}
                                onChange={(value) => handleInputChange('firstName', value)}
                            />
                            <Input
                                placeholder="LAST NAME"
                                value={formData.lastName}
                                onChange={(value) => handleInputChange('lastName', value)}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                                placeholder="PHONE NUMBER"
                                type="tel"
                                value={formData.phoneNumber}
                                onChange={(value) => handleInputChange('phoneNumber', value)}
                            />
                            <Input
                                placeholder="E-MAIL ADDRESS"
                                type="email"
                                value={formData.email}
                                onChange={(value) => handleInputChange('email', value)}
                            />
                        </div>
                        <Textarea
                            placeholder="MESSAGE"
                            rows={4}
                            value={formData.message}
                            onChange={(value) => handleInputChange('message', value)}
                        />
                    </>
                );
            case 'broker':
                return (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                                placeholder="FIRST NAME, LAST NAME"
                                value={formData.firstName}
                                onChange={(value) => handleInputChange('firstName', value)}
                            />
                            <Input
                                placeholder="COMPANY NAME"
                                value={formData.lastName}
                                onChange={(value) => handleInputChange('companyName', value)}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                                placeholder="PHONE NUMBER"
                                value={formData.companyName}
                                onChange={(value) => handleInputChange('phoneNumber', value)}
                            />
                            <Input
                                placeholder="E-MAIL ADDRESS"
                                type="email"
                                value={formData.email}
                                onChange={(value) => handleInputChange('email', value)}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                                placeholder="BROKER ID"
                                value={formData.brokerId}
                                onChange={(value) => handleInputChange('brokerId', value)}
                            />
                            <Input
                                placeholder="EMIRATES ID NUMBER"
                                value={formData.emiratesId}
                                onChange={(value) => handleInputChange('emiratesId', value)}
                            />
                        </div>

                    </>
                );
            default:
                return null;
        }
    };

    const getSubmitButtonText = () => {
        switch (userType) {
            case 'investor':
                return 'GET IN TOUCH WITH OUR TEAM';
            case 'client':
                return 'GET NOTIFIED OF OUR NEXT LAUNCH';
            case 'broker':
                return 'BECOME A REGISTERED PARTNER';
            default:
                return 'SUBMIT';
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div className="space-y-8">
                {getFormFields()}
            </div>
            <div className="flex justify-center">
                <Button
                    type="submit"
                    size="lg"
                    className="bg-[#CAB79D] hover:bg-[#C4B498] border border-[#9A9A9A] text-[#F3EEE7] px-4 md:px-10 lg:px-24 py-7 transition-colors duration-200 libre-baskerville-regular text-xs uppercase tracking-wider"
                >
                    {getSubmitButtonText()}
                </Button>
            </div>
        </form>
    );
};

export default ContactForm; 