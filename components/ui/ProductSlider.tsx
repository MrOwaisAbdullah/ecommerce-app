"use client"; // Mark this component as a Client Component

import React, { forwardRef, useEffect } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
import ProductCard from "../ui/ProductCard";

interface Product {
  image: string;
  name: string;
  newPrice: number;
  oldPrice?: number;
  reviews?: Review[]; // Define reviews as an array of Review objects
  isNew?: boolean;
  productId: string;
  _id: string;
  slug: {
    current: string;
  };
}

interface ProductSliderProps {
  products: Product[];
}

const ProductSlider = forwardRef<SwiperRef, ProductSliderProps>(
  ({ products }, ref) => {
    useEffect(() => {
      if (ref && typeof ref !== "function" && ref.current) {
        // Force Swiper to update after the component mounts
        ref.current.swiper.update();
      }
    }, [ref]);

    return (
      <Swiper
        ref={ref} // Pass the ref to the Swiper instance
        spaceBetween={16}
        slidesPerView={1} // Default for mobile
        loop={true} // Enable infinite looping
        observer={true} // Watch for changes in the slider container
        observeParents={true} // Watch for changes in the slide elements
        breakpoints={{
          640: {
            slidesPerView: 2, // 2 slides on tablets
          },
          800: {
            slidesPerView: 3, // 3 slides on laptops
          },
          1024: {
            slidesPerView: 4, // 4 slides on laptops
          },
          1280: {
            slidesPerView: 5, // 5 slides on desktops
          },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index} className="flex justify-center m-auto">
            <div className="w-full">
              <ProductCard {...product} productId={product._id} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
);

ProductSlider.displayName = "ProductSlider"; // Add display name for forwardRef

export default ProductSlider;
