import React from 'react'
import { poppins, inter } from "../../app/fonts"
import { AiOutlineSend } from 'react-icons/ai'
import Image from 'next/image'
import downloadapp from "../../public/download.png"
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FiTwitter } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className=" text-white bg-primary body-font">
  <div className="container justify-evenly px-5 lg:px-20 py-24 flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div className=" w-60 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
    <h2 className={`${inter.className} title-font font-medium tracking-widest text-2xl mb-6`}>
          Exclusive
        </h2>
        <h2 className={`${poppins.className} title-font font-medium tracking-widest text-xl mb-6`}>
          Subscribe
        </h2>
      <p className={`${poppins.className} mt-2 mb-4 text-sm text-gray-300`}>
      Get 10% off your first order
      </p>
      <div className={`${poppins.className} flex border-2 rounded p-2 justify-between items-center sm:w-4/5`}>
        <p className='text-gray-500'>Enter your email</p><AiOutlineSend className='text-xl'/>

      </div>
    </div>
    <div className={`${poppins.className} container flex flex-wrap -mb-10 md:mt-0 mt-10 md:text-left text-center`}>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium tracking-widest text-xl mb-6">
          Support
        </h2>
        <nav className="list-none mb-10">
          <li className="hover:text-gray-500 text-gray-300 mb-5">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.
          </li>
          <li className=" hover:text-gray-500 text-gray-300 mb-5">exclusive @gmail.com
          </li>
          <li className=" hover:text-gray-500 text-gray-300 mb-5">+88015-88888-9999
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium tracking-widest text-xl mb-6">
          Account
        </h2>
        <nav className="list-none mb-10">
          <li className='mb-5'>
            <a className="hover:text-gray-500 text-gray-300 mb-5">My Account</a>
          </li>
          <li className='mb-5'>
            <a className="hover:text-gray-500 text-gray-300 mb-5">Login / Register</a>
          </li>
          <li className='mb-5'>
            <a className="hover:text-gray-500 text-gray-300 mb-5">Cart</a>
          </li>
          <li className='mb-5'>
            <a className="hover:text-gray-500 text-gray-300 mb-5">Wishlist</a>
          </li>
          <li className='mb-5'>
            <a className="hover:text-gray-500 text-gray-300 mb-5">Shop</a>
          </li>
        </nav>
      </div>
      <div className="lg:w-1/4 md:w-1/2 w-full px-4">
      <h2 className="title-font font-medium tracking-widest text-xl mb-6">
          Quick Link
        </h2>
        <nav className="list-none mb-10">
          <li className='mb-5'>
            <a className="hover:text-gray-500 text-gray-300 mb-5">Privacy Policy</a>
          </li>
          <li className='mb-5'>
            <a className="hover:text-gray-500 text-gray-300 mb-5">Terms Of Use</a>
          </li>
          <li className='mb-5'>
            <a className="hover:text-gray-500 text-gray-300 mb-5">FAQ</a>
          </li>
          <li className='mb-5'>
            <a className="hover:text-gray-500 text-gray-300 mb-5">Contact</a>
          </li>
        </nav>
      </div>
      <div className="flex flex-col lg:w-1/4 md:w-1/2 w-full justify-center items-center">
        <h2 className="title-font font-medium tracking-widest text-xl mb-6">
          Download
        </h2>
        <p className="mt-2 mb-2 text-xs text-gray-300">
        Save $3 with App New User Only
      </p>
        <Image src={downloadapp} alt='qr code' className='flex justify-center md:justify-start'></Image>
        <div className='flex gap-5 text-xl mt-5 justify-center md:justify-start'>
        <FaFacebookF />
        <FiTwitter />
        <FaInstagram />
        <FaLinkedinIn />
        </div>
      </div>
    </div>
  </div>
  <div className={`${poppins.className} bg-primary w-full justify-center items-center border-t border-[#141414]`}>
      <p className="text-[#3d3d3d] p-4 text-center">
        © Copyright Owais Abdullah 2024. All right reserved
      </p>
    </div>
</footer>

  )
}

export default Footer