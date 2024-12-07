import { poppins } from '@/app/fonts'
import React from 'react'
import Headings from '../ui/Headings'
import PagginationArrows from '../ui/PagginationArrows'
import ProductCard from '../ui/ProductCard'
import Button from '../ui/Button'

const Products = () => {
  return (
        <section className={`${poppins.className} xl:container xl:px-20 px-5 mt-12 pt-12 relative overflow-hidden`}>
        <div className='flex mb-8 justify-between '>
        <Headings subheading="Our Products" heading="Explore Our Products" />
        <PagginationArrows />
        </div>
        <div className='flex flex-wrap m-auto p-5 mb-6 justify-center'>
            {/* Product cards */}
            <span className='' ><ProductCard image='/product9.png' name='Gucci duffle bag' newPrice={960}  rating={4.5} ratingCount={75} inlineRating={true}/></span>
            <span className='' ><ProductCard image='/product10.png' name='Gucci duffle bag' newPrice={960}  rating={4.5} ratingCount={75} inlineRating={true}/></span>
            <span className='' ><ProductCard image='/product11.png' name='Gucci duffle bag' newPrice={960}  rating={4.5} ratingCount={75} inlineRating={true}/></span>
            <span className='' ><ProductCard image='/product12.png' name='Gucci duffle bag' newPrice={960}  rating={4.5} ratingCount={75} inlineRating={true}/></span>
            <span className='flex flex-col-reverse' >
                <div className='flex ml-5 gap-1 -mt-3'>
                    <div className='rounded-full inline-block w-4 h-4 bg-[#FB1314] border border-black '>
                        <div className="border h-full w-full border-white rounded-full"></div></div>
                    <div className='rounded-full w-4 h-4 bg-secondary '></div>            
                </div> 
                <ProductCard image='/product13.png' name='Gucci duffle bag' newPrice={960}  rating={4.5} ratingCount={75} inlineRating={true} isNew={true}/></span>
            <span className='flex flex-col-reverse' >
                <div className='flex ml-5 gap-1 -mt-3'>
                    <div className='rounded-full inline-block w-4 h-4 bg-[#EEFF61] border border-black '>
                        <div className="border h-full w-full border-white rounded-full"></div></div>
                    <div className='rounded-full w-4 h-4 bg-secondary '></div>            
                </div> <ProductCard image='/product14.png' name='Gucci duffle bag' newPrice={960}  rating={4.5} ratingCount={75} inlineRating={true}/></span>
            <span className='flex flex-col-reverse' >
                <div className='flex ml-5 gap-1 -mt-3'>
                    <div className='rounded-full inline-block w-4 h-4 bg-black border border-black '>
                        <div className="border h-full w-full border-white rounded-full"></div></div>
                    <div className='rounded-full w-4 h-4 bg-secondary '></div>            
                </div> <ProductCard image='/product15.png' name='Gucci duffle bag' newPrice={960}  rating={4.5} ratingCount={75} inlineRating={true} isNew={true}/></span>
            <span className='flex flex-col-reverse' >
                <div className='flex ml-5 gap-1 -mt-3'>
                    <div className='rounded-full inline-block w-4 h-4 bg-[#184A48] border border-black '>
                        <div className="border h-full w-full border-white rounded-full"></div></div>
                    <div className='rounded-full w-4 h-4 bg-secondary '></div>            
                </div> <ProductCard image='/product16.png' name='Gucci duffle bag' newPrice={960}  rating={4.5} ratingCount={75} inlineRating={true}/></span>
        </div>
        <div className='xl:container text-center items-center mt-8'><Button btnText="View All Products" color='secondary'/></div>

    </section> 
  )
}

export default Products