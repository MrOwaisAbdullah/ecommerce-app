import React from "react";
import { poppins, inter } from "../../app/fonts";
import Headings from "../ui/Headings";

const Arrivals = () => {
  return (
    <section className={`${poppins.className} xl:container xl:px-20 px-6 mt-12 pt-12`}>

      <Headings heading="New Arrival" subheading="Featured"/>

    <div className="flex gap-6 lg:px-8 flex-wrap md:flex-nowrap mt-14">
      <div className="flex p-6  h-[450px] rounded bg-black justify-between w-full text-center lg:text-left lg:w-1/2 bg-[url('/category1.png')] bg-cover bg-no-repeat bg-center">
          <div className="flex flex-col text-background w-full justify-center lg:justify-end content-end gap-2 mb-3">
            <h2
              className={`${inter.className} flex text-2xl text-background font-semibold mb-3 leading-snug items-center justify-center lg:justify-start text-center sm:text-left`}
            >
              PlayStation 5
            </h2>
            <p className="mt-1 lg:w-3/5 text-center lg:text-left text-sm">Black and White version of the PS5 coming out on sale.</p>
            <p className="font-medium flex items-center text-background gap-3 mb-5 mt-2 lg:-mb-3 underline underline-offset-4 justify-center lg:justify-start text-center lg:text-left">
              Shop Now
            </p>
          </div>
\      </div>
      
      <div className=" w-full lg:w-1/2 flex-wrap md:flex-nowrap">
        <div className="flex p-5 rounded h-[207px] bg-[#0d0d0d] justify-between bg-[url('/category2.jpeg')] bg-contain bg-no-repeat  bg-right">
        <div className="flex flex-col text-background w-full justify-center lg:justify-start content-end gap-2 mb-3">
        <h2
              className={`${inter.className} text-2xl text-background font-semibold mb-1 leading-snug text-left`}
            >
              Women’s Collections
            </h2>
            <p className="text-left w-3/5 text-sm">Featured woman collections that give you another vibe.</p>
            <p className="font-medium flex items-center text-background gap-3 mb-1 mt-1 lg:-mb-3 underline underline-offset-4 text-left">
              Shop Now
            </p>
          </div>
        </div>

        <div className="flex h-[220px] gap-6 mt-6">
          <div className="relative w-1/2 rounded  bg-black/90 bg-gradient-radial from-white/70 via-black/50 to-black/70 bg-center " style={{ backgroundSize: "130% 130%" }} >
            <div className="absolute inset-0 bg-[url('/category3.png')] bg-cover bg-no-repeat bg-left" style={{ backgroundSize: "140% 100%" }}></div>
          <div className="relative flex p-5">
          <div className="flex flex-col text-background mt-14 lg:mt-16 xl:mt-24 gap-2">
          <h2
              className={`${inter.className} text-2xl text-background font-semibold mb-1 leading-snug text-left`}
            >
              Speakers
            </h2>
            <p className="text-sm">Amazon wireless speakers</p>
            <p className="font-medium flex items-center text-background gap-3 mb-1 mt-1 lg:-mb-3 underline underline-offset-4 text-left">
              Shop Now
            </p>
          </div>
          </div>
          </div>

          <div className="relative w-1/2 rounded bg-black/90 bg-gradient-radial from-white/70 via-black/50 to-black/70 bg-center " style={{ backgroundSize: "130% 130%" }}>
            <div className="absolute inset-0 bg-[url('/category4.png')] bg-contain bg-no-repeat bg-center"></div>
          <div className="relative flex p-5 justify-between ">
          <div className="flex flex-col text-background mt-16 md:mt-20 xl:mt-24 gap-2">
          <h2
              className={`${inter.className} text-2xl text-background font-semibold mb-1 leading-snug text-left`}
            >
              Perfume
            </h2>
            <p className="text-sm">GUCCI INTENSE OUD EDP</p>
            <p className="font-medium flex items-center text-background gap-3 mb-1 mt-1 lg:-mb-3 underline underline-offset-4 justify-start text-left">
              Shop Now
            </p>
          </div>
          </div>
          </div>
        </div>
    </div>
    </div>

      </section>
  );
};

export default Arrivals;
