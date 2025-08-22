'use client';

import React, { useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import ModalHeader from './ModalHeader';
import CardsSection from './CardsSection';
import FormSection from './FormSection';

interface RegisterInterestModalProps {
    isOpen: boolean;
    onClose: () => void;
}

type ModalView = 'cards' | 'form';
type UserType = 'investor' | 'client' | 'broker';

const RegisterInterestModal: React.FC<RegisterInterestModalProps> = ({ isOpen, onClose }) => {
    const [currentView, setCurrentView] = useState<ModalView>('cards');
    const [selectedUserType, setSelectedUserType] = useState<UserType | null>(null);

    const handleCardClick = (userType: UserType) => {
        setSelectedUserType(userType);
        setCurrentView('form');
    };

    const handleFormSubmit = (data: any) => {
        console.log('Form submitted:', data);
        // Handle form submission here
        onClose();
        setCurrentView('cards');
        setSelectedUserType(null);
    };

    const handleClose = () => {
        setCurrentView('cards');
        setSelectedUserType(null);
        onClose();
    };
    const RenderModalContent = () => {
        if (currentView === 'cards') {
            return <CardsSection onCardClick={handleCardClick} />;
        }
        if (selectedUserType) {
            return <FormSection userType={selectedUserType} onSubmit={handleFormSubmit} />;
        }
        return null;
    };
    return null;
};

export default RegisterInterestModal; 