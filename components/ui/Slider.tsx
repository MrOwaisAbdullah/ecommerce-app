import { inter } from "@/app/fonts";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { GoArrowRight } from "react-icons/go";

interface Slide {
  id: number;
  image: string;
  url: string;
  heading: string;
  subheading: string;
  buttonText: string;
  bg: string;
  icon: string;
}

const originalSlides: Slide[] = [
  {
    id: 1,
    image: "/hero.png",
    url: "#",
    heading: "Up to 10% off Voucher",
    subheading: "iPhone 14 Series",
    buttonText: "Shop Now",
    bg: "bg-black text-white",
    icon: "/apple.png",
  },
  {
    id: 2,
    image: "/hero.png",
    url: "#",
    heading: "Up to 10% off Voucher",
    subheading: "Subheading",
    buttonText: "Shop Now",
    bg: "bg-black text-white",
    icon: "/apple.png",
  },
  {
    id: 3,
    image: "/hero.png",
    url: "#",
    heading: "Up to 10% off Voucher",
    subheading: "Subheading",
    buttonText: "Shop Now",
    bg: "bg-black text-white",
    icon: "/apple.png",
  },
];

// Duplicate the last slide at the beginning and the first slide at the end
const slides = [
  originalSlides[originalSlides.length - 1],
  ...originalSlides,
  originalSlides[0],
];

const Slider = () => {
  const [current, setCurrent] = useState(1); // Start at the first original slide
  const [isTransitioning, setIsTransitioning] = useState(true); // Track transition state

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        if (prev === slides.length - 1) {
          // If at the last slide, instantly jump to the second slide (original first slide)
          setIsTransitioning(false); // Disable transition for instant jump
          return 1;
        }
        setIsTransitioning(true); // Enable transition for normal slides
        return prev + 1;
      });
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  // Handle transition end for infinite looping
  const handleTransitionEnd = () => {
    if (current === 0) {
      // If at the duplicated first slide, instantly jump to the last original slide
      setIsTransitioning(false); // Disable transition for instant jump
      setCurrent(slides.length - 2);
    } else if (current === slides.length - 1) {
      // If at the duplicated last slide, instantly jump to the first original slide
      setIsTransitioning(false); // Disable transition for instant jump
      setCurrent(1);
    }
  };

  return (
    <div className="relative md:top-10 w-full overflow-hidden h-[calc(60vh-60px)] lg:h-[calc(50vh-50px)] xl:h-[calc(50vh-60px)] lg:w-[70%] xl:w-3/4 lg:left-10">
      {/* Slider Container */}
      <div
        className="flex h-full transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: isTransitioning ? "transform 1s ease-in-out" : "none", // Disable transition for instant jumps
        }}
        role="slider"
        aria-valuenow={current}
        aria-label="Hero Slider"
        onTransitionEnd={handleTransitionEnd} // Handle transition end for infinite looping
      >
        {slides.map((slide, index) => (
          <div
            className={`${slide.bg} flex-shrink-0 w-full h-full flex flex-col md:flex-row items-center justify-between`}
            key={index} // Use index as key since slides are duplicated
          >
            {/* Slide Content */}
            <div className="z-10 flex flex-col py-8 items-center md:items-start sm:pt-6 px-4 gap-4 sm:px-8 xl:px-12 text-center md:text-left">
              {/* Icon and Subheading */}
              <div className="flex text-background items-center justify-center md:justify-start gap-2">
                <Image
                  className="w-11"
                  src={slide.icon}
                  alt={slide.subheading}
                  width={40}
                  height={40}
                />
                <h2 className="mt-1">{slide.subheading}</h2>
              </div>

              {/* Heading */}
              <h1
                className={`${inter.className} text-5xl font-semibold leading-snug  text-center md:text-left`}
              >
                {slide.heading}
              </h1>

              {/* Button Text */}
              <p className="font-medium flex items-center gap-3 lg:-mb-5 underline underline-offset-8 justify-center md:justify-start text-center md:text-left">
                {slide.buttonText} <GoArrowRight />
              </p>
            </div>

            {/* Slide Image */}
            <div className="z-0 w-full h-full  flex items-center pt-8">
              <Image
                className="w-full h-full object-contain"
                src={slide.image}
                alt={slide.heading}
                width={800}
                height={1000}
                
              />
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex justify-center items-center gap-2 sm:gap-4 z-20">
        {originalSlides.map((_, index) => (
          <button
            key={index}
            className={`w-4 h-4 ${
              current === index + 1 // Adjust for duplicated slides
                ? "bg-white text-primary border-primary border-2"
                : "border-gray-300 border-2"
            } rounded-full focus:outline-none transition-colors duration-300`}
            onClick={() => setCurrent(index + 1)} // Adjust for duplicated slides
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
