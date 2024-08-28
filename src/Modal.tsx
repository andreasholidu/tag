import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useRef, useEffect, useState } from 'react';
import CTAButton from './CTAButton';

interface MyModalProps {
  isOpen: boolean;
  closeModal: () => void;
  titleText: string;
  CTAButtonText: string;
  modalContent: string;
  showOptionalButton?: boolean;
  optionalButtonText?: string;
  optionalButtonAction?: () => void;  
}

export default function MyModal({
  isOpen,
  closeModal,
  titleText,
  CTAButtonText,
  modalContent,
  showOptionalButton = false,
  optionalButtonText = 'Action',
  optionalButtonAction = () => alert('Optional Button Clicked'),
}: MyModalProps) {
  const [showSecondaryTitle, setShowSecondaryTitle] = useState(false);
  const modalBodyRef = useRef<HTMLDivElement | null>(null);


  const handleScroll = () => {
    if (modalBodyRef.current) {
      const topPosition = modalBodyRef.current.scrollTop;
      setShowSecondaryTitle(topPosition > 30);
    }
  
  };

  const test = () => {
    modalBodyRef.current?.addEventListener('scroll', handleScroll)
  }

  const test2 = () => {
    if (modalBodyRef.current) {
      setShowSecondaryTitle(false)
      modalBodyRef.current.removeEventListener('scroll', handleScroll);
    }
  }

  useEffect(() => {

    
  }, []);


  return (
    <Transition appear afterEnter={test} beforeLeave={test2} show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>

        <div className="fixed inset-0">
          <div className="flex min-h-full sm:items-center sm:justify-center items-end  text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-98 translate-y-6"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-98 translate-y-6"
            >
              <Dialog.Panel className="flex flex-col max-h-[96vh] w-full sm:max-w-xl transform sm:rounded-3xl rounded-t-3xl bg-white text-left align-middle shadow-xl transition-all overflow-hidden sm:m-6 mt-6">
                {/* Modal header */}
                <div
                  className={`fixed w-full flex justify-between gap-8 px-6 py-5 transition-all duration-150 border-b backdrop-blur bg-white/90 ${
                    showSecondaryTitle ? 'border-gray-200' : 'border-white'
                  }`}
                >
                  <button
                    onClick={closeModal}
                    className="p-2 -m-2 rounded-full hover:bg-gray-100 active:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 transition-transform ease-in-out active:scale-95 text-gray-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18 18 6M6 6l12 12"
                      />
                    </svg>
                  </button>

                  {/* Secondary title with transition */}
                  <span
                    className={`w-full flex-shrink text-center font-semibold text-gray-900 transition-all duration-150 transform ${
                      showSecondaryTitle
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-2'
                    }`}
                  >
                    {titleText}
                  </span>

                  {/* Optional button */}
                  <div className="min-w-6 shrink-0">
                    {showOptionalButton && (
                      <button
                        type="button"
                        className="transition font-medium underline hover:text-[#00809D] active:text-[#024251]"
                        onClick={optionalButtonAction}
                      >
                        {optionalButtonText}
                      </button>
                    )}
                  </div>
                </div>

                {/* Modal body, scrollable */}
                <div
                  ref={modalBodyRef}
                  className="p-6 pt-20 flex flex-col gap-4 overflow-y-auto flex flex-col"
                >
                  <Dialog.Title
                    as="h2"
                    className="text-3xl font-bold text-gray-900"
                  >
                    {titleText}
                  </Dialog.Title>

                  <div
                    className="content text-gray-900"
                    dangerouslySetInnerHTML={{ __html: modalContent }}
                  ></div>
                </div>

                {/* Modal footer, fixed */}
                <div className="border-t px-6 py-4 flex justify-end">
                  <CTAButton text={CTAButtonText} onClick={closeModal} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
