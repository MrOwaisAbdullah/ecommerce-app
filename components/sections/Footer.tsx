import React from "react";
import { poppins, inter } from "../../app/fonts";
import { AiOutlineSend } from "react-icons/ai";
import Image from "next/image";
import downloadapp from "../../public/download.png";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={`${poppins.className} text-white bg-primary body-font`}>
      <div className="px-5 lg:mx-20 py-24 grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        <div className="mx-auto w-full px-4">
          <h2
            className={`${inter.className} title-font font-medium tracking-widest text-2xl mb-6`}
          >
            Exclusive
          </h2>
          <h2 className={`font-medium tracking-widest text-xl mb-6`}>
            Subscribe
          </h2>
          <p className={`mt-2 mb-4 text-sm text-gray-300`}>
            Get 10% off your first order
          </p>
          <div
            className={`flex border-2 rounded p-2 justify-between items-center`}
          >
            <p className="text-gray-500">Enter your email</p>
            <AiOutlineSend className="text-xl" />
          </div>
        </div>
        <div className="mx-auto w-full px-4">
          <h2 className="title-font font-medium tracking-widest text-xl mb-6">
            Support
          </h2>
          <nav className="list-none mb-10 cursor-pointer">
            <li className="hover:text-gray-500 text-gray-300 mb-5">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </li>
            <li className=" hover:text-gray-500 text-gray-300 mb-5">
              exclusive@gmail.com
            </li>
            <li className=" hover:text-gray-500 text-gray-300 mb-5">
              +88015-88888-9999
            </li>
          </nav>
        </div>
        <div className="mx-auto w-full px-4">
          <h2 className="title-font font-medium tracking-widest text-xl mb-6">
            Account
          </h2>
          <nav className="list-none mb-10 cursor-pointer">
            <li className="mb-5">
              <a className="hover:text-gray-500 text-gray-300 mb-5">
                My Account
              </a>
            </li>
            <li className="mb-5">
              <a className="hover:text-gray-500 text-gray-300 mb-5">
                Login / Register
              </a>
            </li>
            <li className="mb-5">
              <a className="hover:text-gray-500 text-gray-300 mb-5">Cart</a>
            </li>
            <li className="mb-5">
              <a className="hover:text-gray-500 text-gray-300 mb-5">Wishlist</a>
            </li>
            <li className="mb-5">
              <a className="hover:text-gray-500 text-gray-300 mb-5">Shop</a>
            </li>
          </nav>
        </div>
        <div className="mx-auto w-full px-4">
          <h2 className="title-font font-medium tracking-widest text-xl mb-6">
            Quick Link
          </h2>
          <nav className="list-none mb-10 cursor-pointer">
            <li className="mb-5">
              <a className="hover:text-gray-500 text-gray-300 mb-5">
                Privacy Policy
              </a>
            </li>
            <li className="mb-5">
              <a className="hover:text-gray-500 text-gray-300 mb-5">
                Terms Of Use
              </a>
            </li>
            <li className="mb-5">
              <a className="hover:text-gray-500 text-gray-300 mb-5">FAQ</a>
            </li>
            <li className="mb-5">
              <a className="hover:text-gray-500 text-gray-300 mb-5">Contact</a>
            </li>
          </nav>
        </div>
        <div className="flex flex-col mx-auto w-full items-center">
          <h2 className="title-font font-medium tracking-widest text-xl mb-6">
            Download
          </h2>
          <p className="mt-2 mb-2 text-xs text-gray-300">
            Save $3 with App New User Only
          </p>
          <Image
            src={downloadapp}
            alt="qr code"
            className="flex justify-center md:justify-start"
          ></Image>
          <div className="flex gap-5 text-xl mt-5 justify-center md:justify-start cursor-pointer">
            <FaFacebookF />
            <FiTwitter />
            <FaInstagram />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
      <div
        className={`${poppins.className} bg-primary w-full justify-center items-center border-t border-[#141414]`}
      >
        <p className="text-[#3d3d3d] p-4 text-center">
          © Copyright <Link href={"https://www.linkedin.com/in/mrowaisabdullah/"}>Owais Abdullah</Link> 2024. All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
