"use client"; // Mark this component as a Client Component

import React from 'react';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { useSwiper } from 'swiper/react';

const PagginationArrows = () => {
  const swiper = useSwiper(); // Hook to control Swiper

  return (
    <div className="flex gap-2 items-end mr-10">
      <button onClick={() => swiper.slidePrev()}>
        <IoArrowBack className="bg-graybg rounded-full text-4xl p-2 hover:bg-gray-200 transition-colors" />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <IoArrowForward className="bg-graybg rounded-full text-4xl p-2 hover:bg-gray-200 transition-colors" />
      </button>
    </div>
  );
};

export default PagginationArrows;