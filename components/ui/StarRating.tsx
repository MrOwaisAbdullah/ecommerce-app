"use client";
import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const totalStars = 5;

  // Function to determine the type of star (full, half, or empty)
  const getStarType = (starIndex: number) => {
    if (rating >= starIndex + 1) return "full"; 
    if (rating > starIndex && rating < starIndex + 1) return "half"; 
    return "empty"; 
  };

  return (
    <div className="flex">
    {[...Array(totalStars)].map((_, index) => {
      const starType = getStarType(index);

      return (
        <span key={index} className="relative text-lg inline-block mt-2">
          {starType === "full" ? (
            <FaStar className="text-highlight" />
          ) : starType === "half" ? (
            <>
              <FaStarHalf className="absolute top-0 left-0 text-highlight" />
                <FaStar className="text-[#c3c3c3]"/>
            </>
          ) : (
            <FaStar className="text-[#c3c3c3]" />
          )}
        </span>
      );
    })}
  </div>
  );
};

export default StarRating;
