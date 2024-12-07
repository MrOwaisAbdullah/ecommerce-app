import React from 'react'
import Headings from '../ui/Headings'
import ProductCard from '../ui/ProductCard'
import Button from '../ui/Button'
import {poppins} from '../../app/fonts'

const BestProducts = () => {
  return (
    <section className={`${poppins.className} xl:container xl:px-20 px-3 mt-12 pt-12 relative mb-5 overflow-hidden`}>
        <div className=' flex mb-8 justify-between '>
        <Headings subheading="This Month" heading="Best Selling Products" />
        <span className='justify-end items-end mt-14 sm:mt-10'><Button btnText='View All' color='secondary'/></span>
        </div>
        <div className='flex flex-wrap m-auto justify-center'>
            {/* Product cards */}
            <span className=''><ProductCard image='/product5.png' name='The north coat' newPrice={260} oldPrice={360} rating={5} ratingCount={65}/></span>
            <span className='' ><ProductCard image='/product6.png' name='Gucci duffle bag' newPrice={960} oldPrice={1160} rating={4.5} ratingCount={75}/></span>
            <span className='' ><ProductCard image='/product8.png' name='RGB liquid CPU Cooler' newPrice={160} oldPrice={170} rating={4.5} ratingCount={99}/></span>
            <span className='' ><ProductCard image='/product7.png' name='Small BookSelf' newPrice={360} rating={5} ratingCount={69}/></span>
        </div>
    </section>  )
}

export default BestProducts