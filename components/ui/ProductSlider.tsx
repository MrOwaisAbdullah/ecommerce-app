"use client"; // Mark this component as a Client Component

import React, { forwardRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide, SwiperRef } from "swiper/react";
import "swiper/css";
import ProductCard from "../ui/ProductCard";
import { getProducts } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";


interface ProductSliderProps {
  initialProducts?: Product[]; // Renamed to avoid confusion
}

const ProductSlider = forwardRef<SwiperRef, ProductSliderProps>(
  ({ initialProducts = [] }, ref) => {
    const [products, setProducts] = useState<Product[]>(initialProducts);

    useEffect(() => {
      if (ref && typeof ref !== "function" && ref.current) {
        // Force Swiper to update after the component mounts
        ref.current.swiper.update();
      }
    }, [ref]);

    useEffect(() => {
      // Fetch products from Sanity
      const fetchProducts = async () => {
        try {
          const products = await getProducts();
          setProducts(products);
        } catch (error) {
          console.error("Failed to fetch products:", error);
        }
      };

      if (initialProducts.length === 0) {
        fetchProducts();
      }
    }, [initialProducts]);

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
        {products.map((product) => (
          <SwiperSlide key={product.productId} className="flex justify-center m-auto max-w-7xl">
            <div className="w-full">
              <ProductCard
                image={urlFor(product.image).url() || "/default-product.png"} // Fallback image if none is provided
                name={product.name}
                newPrice={product.newPrice}
                oldPrice={product.oldPrice}
                reviews={product.reviews || []} // Pass reviews or an empty array
                isNew={product.isNew || false} // Set isNew to false if undefined
                productId={product.productId} // Pass the product ID
                rating={product.rating || 0} // Pass rating or default to 0
                ratingCount={product.ratingCount || 0} // Pass ratingCount or default to 0
                slug={product.slug} // Pass the slug here
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
  }
);

ProductSlider.displayName = "ProductSlider"; // Add display name for forwardRef

export default ProductSlider;