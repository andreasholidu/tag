import { useState } from 'react';
import MyModal from './Modal';

interface OpenModalButtonProps {
    buttonText: string;
    modalCTAButtonText: string;
    titleText: string;
    modalContent: string;
    showOptionalButton?: boolean;
    optionalButtonText?: string;
    optionalButtonAction?: () => void;
}

export default function OpenModalButton({
    buttonText,
    modalCTAButtonText,
    titleText,
    modalContent,
    showOptionalButton = false,
    optionalButtonText = 'Action',
    optionalButtonAction = () => alert('Optional Button Clicked'),
    }: OpenModalButtonProps) {
    const [isOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    return (
        <div>
        <button
            type="button"
            onClick={openModal}
            className="border border-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 active:bg-gray-200 transition-transform ease-in-out active:scale-95"
        >
            {buttonText}
        </button>

        <MyModal
            isOpen={isOpen}
            closeModal={closeModal}
            titleText={titleText}
            CTAButtonText={modalCTAButtonText}
            modalContent={modalContent}
            showOptionalButton={showOptionalButton}
            optionalButtonText={optionalButtonText}
            optionalButtonAction={optionalButtonAction}
        />
        </div>
    );
}
