import React from 'react'
import { inter, poppins } from "@/app/fonts";


const SalesBanner = () => {
  return (
    <div
        className={`${poppins.className} xl:container xl:mx-auto mt-24 text-background overflow-hidden`}
      >
        <div className="bg-primary py-10 mt-10 items-center text-center my-auto px-5  xl:m-10 xl:px-16 xl:py-7 xl:pb-16 overflow-hidden flex rounded bg-[url('/jbl.png')] bg-cover bg-no-repeat responsive-bg">
          <div className="flex m-auto md:m-0">
            <div className="w-full sm:pt-6 text-center md:text-left">
              <div className="flex text-accent items-center justify-center md:justify-start gap-2 mb-3">
                <h2 className="mt-1">Categories</h2>
              </div>
              <h1
                className={`${inter.className} md:w-3/5 text-4xl lg:text-5xl font-semibold mb-3 leading-snug text-center md:text-left`}
              >
                Enhance Your Music Experience
              </h1>

              <div className="flex md:justify-start justify-center my-6 gap-4">
                <div className="rounded-full w-16 h-16 bg-white text-black p-2 justify-center text-center">
                  <h4 className="font-semibold mt-1 -mb-1">05</h4>
                  <p className="text-[11px] ">Days</p>
                </div>
                <div className="rounded-full w-16 h-16 bg-white text-black p-2 justify-center text-center">
                  <h4 className="font-semibold mt-1 -mb-1">23</h4>
                  <p className="text-[11px] ">Hours</p>
                </div>
                <div className="rounded-full w-16 h-16 bg-white text-black p-2 justify-center text-center">
                  <h4 className="font-semibold mt-1 -mb-1">59</h4>
                  <p className="text-[11px] ">Minutes</p>
                </div>
                <div className="rounded-full w-16 h-16 bg-white text-black p-2 justify-center text-center">
                  <h4 className="font-semibold mt-1 -mb-1">35</h4>
                  <p className="text-[11px] ">Seconds</p>
                </div>
              </div>

              <button className={`mt-2 py-4 px-12 bg-accent text-center rounded text-white font-medium`}>
        Buy Now!
    </button>              
            </div>
        
        </div>
      </div>
    </div>
  )
}

export default SalesBanner