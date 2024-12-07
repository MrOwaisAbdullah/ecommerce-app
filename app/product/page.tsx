import React from 'react'
import { poppins, inter } from '../fonts'
import Image from 'next/image'
import StarRating from '@/components/ui/StarRating'
import { GoHeart } from 'react-icons/go'
import { TbTruckDelivery } from 'react-icons/tb'
import { GrPowerCycle } from 'react-icons/gr'
import Headings from '@/components/ui/Headings'
import ProductCard from '@/components/ui/ProductCard'
import Button from '@/components/ui/Button'

const page = () => {
  return (
    <main className={`${poppins.className} xl:container my-20 mx-auto px-10 xl:px-24 overflow-hidden`}>
        <h4 className='text-sm text-[#808080] mb-20'>Account / Gaming / <span className='text-black'>Havic HV G-92 Gamepad</span></h4>
        <div className='lg:flex grid grid-cols-1 gap-6'>
            <div className='lg:flex flex-col gap-5 hidden'>
                <div  className="bg-graybg flex justify-center items-center h-32 w-36 rounded"><Image src={"/havic4.png"} alt='Havic HV G-92 Gamepad' width={130} height={130}/></div>
                <div  className="bg-graybg flex justify-center items-center h-32 w-36 rounded"><Image src={"/havic2.png"} alt='Havic HV G-92 Gamepad' width={130} height={130}/></div>
                <div  className="bg-graybg flex justify-center items-center h-32 w-36 rounded"><Image src={"/havic3.png"} alt='Havic HV G-92 Gamepad' width={130} height={130}/></div>
                <div  className="bg-graybg flex justify-center items-center h-32 w-36 rounded"><Image src={"/havic1.png"} alt='Havic HV G-92 Gamepad' width={130} height={130}/></div>
            </div>
            <div className='lg:w-5/12 w-full lg:ml-5'>
            <div className="bg-graybg rounded h-full flex items-center justify-center "><Image className="w-full" src={"/havic.png"} alt='Havic HV G-92 Gamepad' width={500} height={500}/></div>               
            </div>
            <div className='flex gap-2 lg:hidden justify-center '>
                <div  className="bg-graybg flex justify-center items-center h-32 w-36 rounded"><Image src={"/havic4.png"} alt='Havic HV G-92 Gamepad' width={130} height={130}/></div>
                <div  className="bg-graybg flex justify-center items-center h-32 w-36 rounded"><Image src={"/havic2.png"} alt='Havic HV G-92 Gamepad' width={130} height={130}/></div>
                <div  className="bg-graybg flex justify-center items-center h-32 w-36 rounded"><Image src={"/havic3.png"} alt='Havic HV G-92 Gamepad' width={130} height={130}/></div>
                <div  className="bg-graybg flex justify-center items-center h-32 w-36 rounded"><Image src={"/havic1.png"} alt='Havic HV G-92 Gamepad' width={130} height={130}/></div>
            </div>
            <div className='lg:ml-14 justify-center lg:justify-start flex flex-col'>
                <h1 className={`${inter.className} text-2xl font-semibold text-center lg:text-left`}>Havic HV G-92 Gamepad</h1>
                <div className='flex text-graytext gap-3 text-sm justify-center lg:justify-start items-center'><StarRating rating={4}/><span className='mt-3'>(150 reviews)</span><span className='mt-3'>|</span><span className='text-accent mt-3'>In Stock</span></div>
                <h3 className={`${inter.className}text-2xl mt-3 text-center lg:text-left`}>$192.00</h3>
                <p className='flex text-sm mt-5 lg:w-96 border-b pb-6 border-graytext text-center lg:text-left justify-center lg:justify-start'>
                PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
                </p>
                <div className='flex mt-6 justify-center lg:justify-start'>
                    <h4 className='text-xl'>Colours:</h4>
                    <div className='flex ml-3 mt-2 gap-2'>
                    <div className='rounded-full inline-block w-4 h-4 bg-[#A0BCE0] border border-black '>
                        <div className="border h-full w-full border-white rounded-full"></div></div>
                    <div className='rounded-full w-4 h-4 bg-[#E07575] '></div>            
                </div> 
                </div>

                <div className='flex mt-5 justify-center lg:justify-start'>
                <h4 className='text-xl'>Size:</h4>
                <div className='flex gap-4 '>
                <p className='text-sm font-medium border w-7 text-center rounded p-1 ml-5 border-[#808080] hover:bg-secondary hover:text-white cursor-pointer'>XS</p>
                <p className='text-sm font-medium border w-7 text-center rounded p-1 border-[#808080] hover:bg-secondary hover:text-white cursor-pointer'>S</p>
                <p className='text-sm font-medium border w-7 text-center rounded p-1 border-[#808080] hover:bg-secondary hover:text-white cursor-pointer'>M</p>
                <p className='text-sm font-medium border w-7 text-center rounded p-1 border-[#808080] hover:bg-secondary hover:text-white cursor-pointer'>L</p>
                <p className='text-sm font-medium border w-7 text-center rounded p-1 border-[#808080] hover:bg-secondary hover:text-white cursor-pointer'>XL</p>
                </div>
                </div>
                
                <div className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-start'>
                    <div className='flex mt-6 h-10'>
                    <p className='text-2xl text-[#808080] font-medium border w-8 text-center rounded-l-lg p-1 border-[#808080] hover:bg-secondary hover:text-white cursor-pointer'>-</p>
                    <p className='flex justify-center text-sm font-medium border w-16 items-center text-center p-1 border-[#808080] '>2</p>
                    <p className='text-2xl font-medium text-[#808080] border  w-8 text-center rounded-r-lg p-1  border-[#808080] hover:bg-secondary hover:text-white cursor-pointer'>+</p>
                    </div>
                    <button className='rounded py-2 px-5 h-10 w-36 text-center justify-center mt-6 ml-4 text-white  flex bg-secondary'>Buy Now</button>
                    <GoHeart className="border text-center mt-6 h-10 w-auto rounded p-1 border-[#808080] cursor-pointer text-2xl ml-4" />
                </div>

                <div className='flex flex-col border rounded mt-8 mx-0 justify-center lg:justify-start'>
                    <div className='flex p-5 gap-3 justify-center lg:justify-start items-center'>
                    <TbTruckDelivery className='text-3xl'/>
                    <div>
                        <h4>Free Delivery</h4>
                        <p className='text-xs'>Enter your postal code for Delivery Availability</p>
                    </div>
                    </div>
                    <div className='flex p-5 gap-3 justify-center lg:justify-start items-center border-t'>
                    <GrPowerCycle className='text-3xl'/>
                    <div>
                        <h4>Return Delivery</h4>
                        <p className='text-xs'>Return Delivery
                        Free 30 Days Delivery Returns. Details</p>
                    </div>
                    </div>
                </div>

            </div>

        </div>

        <div className='mt-20'>
           <span className='flex justify-start items-start'><Headings subheading="Related"/></span>
        <div className='flex flex-wrap lg:flex-nowrap justify-center items-center'>
            {/* Product cards */}
            <span className=''><ProductCard image='/product5.png' name='The north coat' newPrice={260} oldPrice={360} rating={5} ratingCount={65}/></span>
            <span className='' ><ProductCard image='/product6.png' name='Gucci duffle bag' newPrice={960} oldPrice={1160} rating={4.5} ratingCount={75}/></span>
            <span className='' ><ProductCard image='/product8.png' name='RGB liquid CPU Cooler' newPrice={160} oldPrice={170} rating={4.5} ratingCount={99}/></span>
            <span className='' ><ProductCard image='/product7.png' name='Small BookSelf' newPrice={360} rating={5} ratingCount={69}/></span>
        </div>
        </div>
 
    </main>
  )
}

export default page