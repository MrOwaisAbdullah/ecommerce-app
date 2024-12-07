import BestProducts from "@/components/sections/BestProducts";
import Category from "@/components/sections/Category";
import Hero from "@/components/sections/Hero";
import SaleProducts from "@/components/sections/SaleProducts";
import { inter, poppins } from "./fonts";
import Features from "@/components/sections/Features";
import Arrivals from "@/components/sections/Arrivals";
import Products from "@/components/sections/Products";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <SaleProducts />
      <Category />
      <BestProducts />

      <div
        className={`${poppins.className} xl:container xl:px-14 xl:mx-auto mt-24 text-background overflow-hidden`}
      >
        <div className="bg-primary py-10 mt-10 items-center content-center place-content-center text-center xl:my-auto px-5  xl:m-10 xl:px-16 xl:py-7 xl:pb-16 overflow-hidden flex rounded bg-[url('/jbl.png')] bg-cover bg-no-repeat responsive-bg">
          <div className="flex">
            <div className="w-full sm:pt-6 text-center sm:text-left">
              <div className="flex text-accent items-center justify-center sm:justify-start gap-2 mb-3">
                <h2 className="mt-1">Categories</h2>
              </div>
              <h1
                className={`${inter.className} lg:w-3/5 text-4xl lg:text-5xl font-semibold mb-3 leading-snug text-center sm:text-left`}
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
            
              {/* <Image
                className="lg:w-3/5 items-end justify-self-end h-full -mr-16 -mt-24"
                src={"/jbl.png"}
                alt="JBL"
                width={1580}
                height={1580}
              ></Image>{" "} */}
        
        </div>
      </div>
    </div>


    <Products />
    <Arrivals />
    <Features />


    </div>
  )};
