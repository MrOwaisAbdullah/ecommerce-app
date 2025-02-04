"use client";

import React, { useState } from "react";
import StarRating from "./StarRating"; // Import the StarRating component
import Image from "next/image";
import { GoHeart } from "react-icons/go";
import { AiOutlineEye } from "react-icons/ai";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";
import { useCart } from "@/app/context/CartContext";
import { Toast } from "./Toast";


const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  newPrice,
  oldPrice,
  reviews = [],
  isNew,
  discount,
  slug,
  productId,
  inlineRating = false,
}) => {
  // Calculate average rating
  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      : 0;

      const { dispatch } = useCart();
      const [showToast, setShowToast] = useState(false);
  
    const handleAddToCart = () => {
      dispatch({
            type: "ADD_TO_CART",
            product: {
              _id: productId || "", // Ensure productId is a string
              name: name, 
              newPrice: newPrice,
              image: urlFor(image).url(),
              quantity: 1, // Default quantity is 1
            },
          });
  
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3000);
    };
  return (
    <div className="m-4 mx-auto">
      <div className="relative cursor-pointer group min-h-60 max-h-56 max-w-[270px] bg-graybg p-3 rounded overflow-hidden">
        <div
          className={`${
            discount || isNew
              ? "flex justify-between"
              : "flex justify-end"
          }`}
        >
          <div
            className={`${
              discount
                ? "bg-secondary max-w-20 max-h-7 flex flex-wrap p-1 px-2 rounded text-white text-xs overflow-hidden justify-center items-center"
                : "hidden"
            }`}
          >{`-${discount}%`}</div>
          <div
            className={`${
              isNew
                ? "bg-accent max-w-20 max-h-7 flex flex-wrap p-1 px-2 rounded text-white text-xs overflow-hidden justify-center items-center"
                : "hidden"
            }`}
          >
            NEW
          </div>
          <div className="flex flex-col gap-2 z-10 justify-end place-self-end">
            <GoHeart className="text-3xl rounded-full bg-white p-1" />
            <AiOutlineEye className="text-3xl rounded-full bg-white p-1" />
          </div>
        </div>
        <Link href={`/product/${slug?.current}`}>
        <Image
          src={urlFor(image).url() || "/placeholder.png"}
          width={1000}
          height={1000}
          alt={name}
          className="object-cover z-0 flex w-[120%] items-center my-auto -mt-16 justify-center p-3"
        />
        </Link>
        <div onClick={handleAddToCart} className="w-full flex absolute bottom-0 left-0 group-hover:h-12 h-0 bg-primary text-graybg justify-center text-center items-center font-medium">
          <p>Add to Cart</p>
        </div>
      </div>

      <h2 className="font-medium my-3 pl-1">{name}</h2>
      <div className="flex gap-3 -mt-2">
        <p className="font-medium text-secondary pl-1">{`$${newPrice}`}</p>
        {oldPrice && (
          <p className="font-medium text-graytext pl-1 line-through">{`$${oldPrice}`}</p>
        )}
        <div
          className={`${
            inlineRating && !oldPrice ? "flex items-center" : "hidden"
          }`}
        >
          <span className="-mt-3">
            <StarRating rating={averageRating} />
          </span>
          <p className="font-semibold text-sm text-graytext pl-2 -mt-1">{`(${reviews.length || "0"})`}</p>
        </div>
      </div>
      <div
        className={`${
          inlineRating && !oldPrice ? "hidden" : "flex items-center"
        }`}
      >
        <StarRating rating={averageRating} />
        <p className="font-semibold text-sm text-graytext pt-2 pl-2">{`(${reviews.length || "0"})`}</p>
      </div>
      {showToast && (
              <Toast
                message="Added to cart successfully!"
                type="success"
                onClose={() => setShowToast(false)}
              />
            )}
    </div>
  );
};

export default ProductCard;