"use client";
import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { UserIcon } from '@heroicons/react/24/outline';

function Modal(props) {

  const { stateModal  , children} = props;

  const [open, setOpen] = useState(stateModal);
  

  const cancelButtonRef = useRef();




  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10 " initialFocus={cancelButtonRef} onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-[30px] bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-[#fff] p-2 sm:p-6 sm:pb-4 sm:py-2">
                  <div className="flex p-2 items-center gap-[10px]">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-purple-600 sm:mx-0 sm:h-10 sm:w-10">
                      <UserIcon className="h-6 w-6 text-white" aria-hidden="true" />            
                    </div>
                    <div className="mt-3 sm:ml-4 sm:mt-0 lg:text-left">
                      <Dialog.Title as='h6'>titodev : </Dialog.Title>
                      <Dialog.Title as="h3" className="font-semibold leading-6 text-gray-900">
                        HI, I NEED YOUR ATTENTION A FEW MINUTES...
                      </Dialog.Title>
                    </div>

                  </div>

                      <div className="mt-2 w-100">
                        <p className="text-md">
                          This is my Portfolio with the purpose to show you how i work, take a look inside and give me a chance... Don't forgot download my CV. Thanks.
                        </p>
                      </div>                  
                </div>
                <div className="bg-[#fff] px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  {children}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}



export default Modal;
