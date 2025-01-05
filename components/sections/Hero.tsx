"use client";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { poppins } from "@/app/fonts";
import Slider from "@/components/ui/Slider";

const Hero = () => {
  return (
    <section className="xl:container flex">
      <div className={`${poppins.className} w-1/4 border-r hidden lg:block`}>
        <ul className="m-8">
          <li className="flex items-center justify-between ">
            Women&apos;s Fasion <MdKeyboardArrowRight />
          </li>
          <li className="flex items-center justify-between mt-4 ">
            Men&apos;s Fashion <MdKeyboardArrowRight />
          </li>
          <li className="mt-3">Electronics</li>
          <li className="mt-3">Home & Lifestyle</li>
          <li className="mt-3">Medicine</li>
          <li className="mt-3">Sports & Outdoors</li>
          <li className="mt-3">Baby&apos;s & Toys</li>
          <li className="mt-3">Groceries & Pets</li>
          <li className="mt-3">Health & Beauty</li>
        </ul>
      </div>
      <Slider />
    </section>
  );
};

export default Hero;
