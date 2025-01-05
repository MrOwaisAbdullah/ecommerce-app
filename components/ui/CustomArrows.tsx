"use client"; 

import React from 'react';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

interface CustomArrowsProps {
  onPrev: () => void;
  onNext: () => void;
}

const CustomArrows: React.FC<CustomArrowsProps> = ({ onPrev, onNext }) => {
  return (
    <div className="flex gap-2 items-end mr-10">
      <button onClick={onPrev}>
        <IoArrowBack className="bg-graybg rounded-full text-4xl p-2 hover:bg-gray-200 transition-colors" />
      </button>
      <button onClick={onNext}>
        <IoArrowForward className="bg-graybg rounded-full text-4xl p-2 hover:bg-gray-200 transition-colors" />
      </button>
    </div>
  );
};

export default CustomArrows;