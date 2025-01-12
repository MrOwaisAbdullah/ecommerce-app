import Image from "next/image";
import React from "react";
import pic from "../../public/product1.png";

const Cart = () => {
  return (
    <div className="mt-8">
      <p></p>
      <div className="flex flex-col gap-10">
        <div className="pl-14 hidden sm:grid grid-col-[repeat(5,auto)] rounded-[4px] border border-black/5 shadow-black/5 shadow-md p-5">
          <h2 className="col-span-2 mr-36 font-medium">Product</h2>
          <h2 className="col-start-3 text-center font-medium">Price</h2>
          <h2 className="col-start-4 text-center font-medium">Quantity</h2>
          <h2 className="col-start-5 text-center font-medium">SubTotal</h2>
        </div>
        <div className="sm:pl-14 grid grid-col-2 gap-3 sm:grid-col-5 items-center rounded-[4px] border border-black/5 shadow-black/5 shadow-md p-5">
          <div className="flex col-span-2 sm:col-span-2 xs:col-span-1 items-center gap-5">
            <Image className="w-10" src={pic} alt="" width={50} height={50} />
            <h2 className="font-medium">Product Name</h2>
          </div>
          <h2 className="col-start-2 col-span-1 sm:col-start-3 xs:col-start-2 sm:text-center text-right font-medium">
            $65
          </h2>
          <h2 className="col-span-1 -mt-10 xs:mt-0 sm:col-start-4 xs:col-span-1 sm:text-center font-medium">
            Quantity
          </h2>
          <h2 className="hidden xs:block sm:col-start-5 xs:col-start-2 sm:text-center xs:text-right font-medium">
            <span className="sm:hidden ">SubTotal: </span>$650
          </h2>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-between gap-5 mt-20">
        <div className="flex max-h-12 lg:min-w-96 lg:max-w-xl">
          <input
            type="text"
            placeholder="Coupon Code"
            className="mr-2 p-2 w-full border border-primary rounded-[4px]"
          />
          <button
            className="text-nowrap py-3 px-5 bg-secondary w-1/2 hover:bg-accent text-sm lg:text-base text-center rounded text-white font-medium"
          >
            Apply Coupon
          </button>
        </div>

        <div className="flex flex-col gap-5 border-2 border-primary rounded-[6px] p-5 lg:min-w-96">
          <h2 className="text-xl font-medium my-3">Cart Total</h2>
          <div className="flex justify-between border-b py-2 text-sm w-full ">
            <p>Subtotal</p>
            <p className="font-medium">$</p>
          </div>
          <div className="flex justify-between border-b py-2 text-sm w-full ">
            <p>Shipping</p>
            <p className="font-medium">Free</p>
          </div>
          <div className="flex justify-between py-3 text-sm w-full ">
            <p>Total</p>
            <p className="font-medium">$</p>
          </div>
          <button
            className={`text-nowrap py-3 mx-auto px-8 lg:px-12 bg-secondary hover:bg-accent w-5/6 text-sm lg:text-base text-center rounded text-white font-medium`}
          >
            Procees to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
