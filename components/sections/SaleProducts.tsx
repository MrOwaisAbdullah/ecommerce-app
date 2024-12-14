import React from 'react'
import Headings from '../ui/Headings'
import PagginationArrows from '../ui/PagginationArrows'
import Countdown from '../ui/Countdown'
import ProductCard from '../ui/ProductCard'
import Button from '../ui/Button'

const SaleProducts = () => {
  return (
    <section className='mt-12 pt-12 relative overflow-hidden'>
        <div className='xl:container px-5 flex mb-8 justify-between '>
        <div className='flex gap-24 xl:px-8'>
        <Headings subheading="Today's" heading="Flash Sales" />
        <span className='hidden lg:block mt-11'><Countdown /></span>
        </div>
        <PagginationArrows />
        </div>
        <div className='flex md:absolute p-5 xl:-right-80 xl:left-28'>
            {/* Product cards */}
            <span className='m-auto md:m-0'><ProductCard image='/product1.png' name='HAVIT HV-G92 Gamepad' newPrice={120} oldPrice={160} rating={5} ratingCount={88} discount={40}/></span>
            <span className='hidden md:block' ><ProductCard image='/product2.png' name='AK-900 Wired Keyboard' newPrice={960} oldPrice={1160} rating={4} ratingCount={75} discount={35}/></span>
            <span className='hidden md:block' ><ProductCard image='/product3.png' name='IPS LCD Gaming Monitor' newPrice={370} oldPrice={400} rating={5} ratingCount={99} discount={30}/></span>
            <span className='hidden md:block' ><ProductCard image='/product4.png' name='S-Series Comfort Chair' newPrice={375} oldPrice={400} rating={4.5} ratingCount={99} discount={25}/></span>
            <span className='hidden md:block' ><ProductCard image='/product4.png' name='S-Series Comfort Chair' newPrice={375} oldPrice={400} rating={4.5} ratingCount={99} discount={25}/></span>
        </div>
        <div className='xl:container text-center items-center md:mt-[25rem]'><Button btnText="View All Products" color='secondary'/></div>
    </section>
  )
}

export default SaleProducts