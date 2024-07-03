
import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div
      className={`fixed inset-0 z-50 flex items-start justify-start transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } bg-black bg-opacity-50`}
      onClick={onClose}
    >
      <div
        className="bg-white w-full h-full max-w-lg  p-4 shadow-lg transform transition-transform duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-0 right-0 m-4 text-gray-600 hover:text-gray-800"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
