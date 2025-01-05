"use client"; // Mark this component as a Client Component

import React, { useRef, useEffect, useState } from 'react';
import Headings from '../ui/Headings';
import Countdown from '../ui/Countdown';
import Button from '../ui/Button';
import ProductSlider from '../ui/ProductSlider';
import CustomArrows from '../ui/CustomArrows';
import { SwiperRef } from 'swiper/react';
import { getProducts } from '@/sanity/lib/client'; // Import the fetch function

const FeaturedProducts = () => {
  const swiperRef = useRef<SwiperRef>(null); // Ref to access the Swiper instance
  const [products, setProducts] = useState([]); // State to store products

  // Fetch products from Sanity
  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  // Handle previous product
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  // Handle next product
  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="mt-12 pt-12 relative overflow-hidden">
      <div className="xl:container px-5 flex mb-8 justify-between">
        <div className="flex gap-24 xl:px-8">
          <Headings subheading="Today's" heading="Flash Sales" />
          <span className="hidden lg:block mt-11">
            <Countdown />
          </span>
        </div>
        {/* Custom Arrows */}
        <CustomArrows onPrev={handlePrev} onNext={handleNext} />
      </div>

      <div className='h-[450px] px-5 lg:pl-10 flex justify-center'>
        {/* Product Slider */}
        <ProductSlider products={products} ref={swiperRef} />
      </div>

      {/* View All Products Button */}
      <div className="xl:container text-center items-center justify-center flex mt-5 sm:mt-0">
        <Button btnText="View All Products" color="secondary" />
      </div>
    </section>
  );
};

export default FeaturedProducts;