import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { poppins, inter } from '@/app/fonts'
import Image from 'next/image'
import apple from "../../public/apple.png"
import hero from "../../public/hero.png"
import { GoArrowRight } from 'react-icons/go'

const Hero = () => {
  return (
    <section className='xl:container flex xl:px-12'>
        <div className={`${poppins.className} w-1/4 border-r hidden xl:block`}>
            <ul className='m-8'>
                <li className='flex items-center justify-between '>Women&apos;s Fasion <MdKeyboardArrowRight />
                </li>
                <li className='flex items-center justify-between mt-4 '>Men&apos;s Fashion <MdKeyboardArrowRight />
                </li>
                <li className='mt-3'>Electronics</li>
                <li className='mt-3'>Home & Lifestyle</li>
                <li className='mt-3'>Medicine</li>
                <li className='mt-3'>Sports & Outdoors</li>
                <li className='mt-3'>Baby&apos;s & Toys</li>
                <li className='mt-3'>Groceries & Pets</li>
                <li className='mt-3'>Health & Beauty</li>
            </ul>
        </div>
        <div className={`${poppins.className} xl:w-5/6 text-background xl:mt-7 xl:mx-5 m-0 w-screen h-full xl:h-auto`}>
            <div className='bg-primary xl:m-auto p-6 xl:p-3 overflow-hidden m-0'>
                <div className='flex'>
                <div className='w-full sm:w-1/2 sm:pt-8 sm:pl-10 text-center sm:text-left'>
                    <div className='flex text-background items-center justify-center sm:justify-start gap-2 mb-3'><Image className="w-11" src={apple} alt='Apple Logo'></Image><h2 className='mt-1'>iPhone 14 Series</h2></div>
                    <h1 className={`${inter.className} text-5xl font-semibold mb-3 leading-snug sm:w-3/4 text-center sm:text-left`}>Up to 10% off Voucher</h1>
                    <p className='font-medium flex items-center gap-3 mb-5 lg:-mb-3 underline underline-offset-8 justify-center sm:justify-start text-center sm:text-left'>Shop Now <GoArrowRight />
                    </p>
                </div>
                <div className='w-1/2 items-center hidden sm:block'><Image className="justify-self-end mt-10 lg:mt-0" src={hero} alt='hero Image'></Image> </div>
                </div>
                <div className='flex gap-x-3 lg:-mt-6 place-content-center items-center'>
                <div className='rounded-full w-[14px] h-[14px] bg-graytext border-2 border-graytext'></div>
                <div className='rounded-full w-[14px] h-[14px] bg-graytext border-2 border-graytext'></div>
                    <div className='rounded-full w-[14px] h-[14px] bg-secondary border-2 border-background '></div>
                <div className='rounded-full w-[14px] h-[14px] bg-graytext border-2 border-graytext'></div>
                <div className='rounded-full w-[14px] h-[14px] bg-graytext border-2 border-graytext'></div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero