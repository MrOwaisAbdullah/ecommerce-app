import Image from "next/image";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { GoHeart } from "react-icons/go";
import StarRating from "./StarRating";
import { poppins } from "../../app/fonts";

interface ProductCards {
  name: string;
  oldPrice?: number;
  newPrice: number;
  discount?: number;
  image: string;
  rating: number;
  ratingCount: number;
  isNew?: boolean;
  inlineRating?: boolean;
}

const ProductCard: React.FC<ProductCards> = ({
  name,
  oldPrice,
  newPrice,
  discount,
  image,
  rating,
  ratingCount,
  isNew,
  inlineRating = false,
}) => {
  return (
    <div className={`${poppins.className} m-4 justify-items-start`}>
      <div className=" cursor-pointer relative group min-h-56 max-h-96 md:max-w-60 md:max-h-56 bg-graybg p-3 rounded overflow-hidden">
        <div className={`${
              discount || isNew
                ? "flex justify-between" : "flex justify-end"
                }`}>
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
          >NEW</div>
          <div className="flex flex-col gap-2 z-10 justify-end place-self-end">
            <GoHeart className="text-3xl rounded-full bg-white p-1" />
            <AiOutlineEye className="text-3xl rounded-full bg-white p-1" />
          </div>
        </div>
        <Image
          src={image}
          width={1000}
          height={1000}
          alt={name}
          className="max-w-72 z-0 flex min-h-52 min-w-56 max-h-96 md:max-w-64 place-self-center items-center justify-self-center md:max-h-none -mt-24 p-7"
        ></Image>
        <div className="w-full flex absolute bottom-0 left-0 group-hover:h-12 h-0 bg-primary text-white justify-center text-center items-center font-medium">
          <p>Add to Cart</p>
        </div>
      </div>

      <h2 className="font-medium my-3 pl-1">{name}</h2>
      <div className="flex gap-3 -mt-2">
        <p className="font-medium text-secondary pl-1">{`$${newPrice}`}</p>
        <p
          className={`${
            oldPrice ? "font-medium text-graytext pl-1 line-through" : "hidden"
          }`}
        >{`$${oldPrice}`}</p>
        <div className={`${
          inlineRating && !oldPrice?
          "flex items-center": "hidden"}`}>
        <span className="-mt-3"><StarRating rating={rating} /></span>
        <p className="font-semibold text-sm text-graytext pl-2 -mt-1">{`(${ratingCount})`}</p>
      </div>

      </div>
      <div className={`${
          inlineRating && !oldPrice?
          "hidden":"flex items-center"}`}>
        <StarRating rating={rating} />
        <p className="font-semibold text-sm text-graytext pt-2 pl-2">{`(${ratingCount})`}</p>
      </div>
    </div>
  );
};

export default ProductCard;
