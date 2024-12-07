"use client";
import { inter, poppins } from "../../app/fonts";
import Link from "next/link";
import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
} from "@/components/ui/drawer";
import { CgCloseO, CgMenuRight } from "react-icons/cg";
import { IoCartOutline } from "react-icons/io5";
import { GoHeart } from "react-icons/go";
import { RiSearchLine } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => setIsOpen((prev) => !prev);
  const closeDrawer = () => setIsOpen(false);

  return (
    <header>
      <div className="w-full flex flex-col md:flex-row gap-2 bg-primary px-4 pt-1 lg:py-3 text-background items-center justify-center md:justify-between xl:justify-normal ">
        <p className="flex sm:flex-row flex-col xl:justify-center text-start xl:w-3/4 xl:ml-80 ml-0 justify-start">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
          <Link className="underline md:text-left flex justify-end ml-3 font-medium -mt-6 sm:mt-0" href={"#"}>
            ShopNow
          </Link>
        </p>
        <p className="flex gap-2 pb-2 md:pb-0 md:w-2/12 md:pl-10 items-center justify-start md:justify-end">
          English
          <IoIosArrowDown />
        </p>
      </div>
      <div
        className={`${poppins.className} flex w-full text-text border-b justify-between lg:content-center border-zinc-300 px-5 lg:px-12 xl:px-28 h-[5.5rem]`}
      >
        <div className="xl:container lg:mx-auto flex pt-5 pb-2 w-full flex-row justify-between items-center">
          <Link
            href="/"
            className={`${inter.className} flex title-font text-2xl font-bold items-center text-gray-900`}
          >
            Exclusive
          </Link>
          <nav className="md:ml-auto hidden lg:flex flex-wrap items-center text-base justify-center">
            <Link
              href="#hero"
              className="mr-9 text-lg active:text-gray-900 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              href="#contact"
              className="mr-9 text-lg active:text-gray-900 hover:text-gray-900"
            >
              Contact
            </Link>
            <Link
              href="#about"
              className="mr-9 text-lg active:text-gray-900 hover:text-gray-900"
            >
              About
            </Link>
            <Link
              href="#sign"
              className="mr-9 text-lg active:text-gray-900 hover:text-gray-900"
            >
              Sign Up
            </Link>
          </nav>
          <div className="items-center flex w-3/5 lg:w-2/5 justify-end">
            <div className="bg-graybg font-poppins py-2 px-5 rounded hidden sm:flex items-center">
              <input
                className="bg-transparent text-graytext font-poppins placeholder:font-poppins focus:border-none placeholder:text-graytext placeholder:text-sm"
                type="text"
                placeholder="What are you looking for?"
              />
              <RiSearchLine className="text-2xl" />
            </div>
            <GoHeart className="text-2xl ml-5 flex" />
            <IoCartOutline className="text-2xl ml-5 mr-4 flex" />
          </div>
          <Drawer direction="left" open={isOpen} onOpenChange={setIsOpen}>
            <button onClick={toggleDrawer} className="text-3xl lg:hidden">
              <CgMenuRight />
            </button>
            <DrawerContent className="bg-background mx-auto max-w-[80%] text-left px-6 lg:max-w-[35%] md:max-w-[50%]">
              <DrawerClose
                className="m-5 text-xl place-self-end"
                onClick={closeDrawer}
              >
                <CgCloseO />
              </DrawerClose>
              <DrawerTitle className="text-xl my-5 font-bold">
                Main Menu
              </DrawerTitle>
              <nav className="flex flex-col flex-wrap mt-3 gap-4 text-base">
                <Link
                  href="#hero"
                  className="text-lg active:text-gray-900 hover:text-gray-900"
                >
                  Home
                </Link>
                <Link
                  href="#contact"
                  className="text-lg active:text-gray-900 hover:text-gray-900"
                >
                  Contact
                </Link>
                <Link
                  href="#about"
                  className="text-lg active:text-gray-900 hover:text-gray-900"
                >
                  About
                </Link>
                <Link
                  href="#sign"
                  className="text-lg active:text-gray-900 hover:text-gray-900"
                >
                  Sign Up
                </Link>
              </nav>
                <div className="flex bg-graybg justify-between w-4/5 font-poppins mt-5 py-2 px-5 rounded">
                  <input
                    className="bg-transparent text-graytext font-poppins placeholder:font-poppins focus:border-none placeholder:text-graytext placeholder:text-sm"
                    type="text"
                    placeholder="What are you looking for?"
                  />
                  <RiSearchLine className="text-2xl justify-self-end" />
                </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </header>
  );
};

export default Header;
