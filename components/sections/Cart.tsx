"use client";

import Image from "next/image";
import React from "react";
import { useCart } from "@/app/context/CartContext";
import SimpleQuantityCounter from "../ui/SimpleQuantityCounter";
import { TiDeleteOutline } from "react-icons/ti";

const Cart = () => {
  const { state, dispatch } = useCart();

  const handleRemove = (id: string) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", id, quantity });
  };

  const total = state.cart.reduce(
    (sum, item) => sum + item.newPrice * (item.quantity || 1),
    0
  );

  return (
    <div className="mt-8">
      <div className="flex flex-col gap-10">
        {/* Cart Header */}
        <div className="pl-14 hidden sm:grid grid-cols-[repeat(5,auto)] rounded-[4px] border border-black/5 shadow-black/5 shadow-md p-5">
          <h2 className="col-span-2 mr-36 font-medium">Product</h2>
          <h2 className="col-start-3 text-center font-medium">Price</h2>
          <h2 className="col-start-4 text-center font-medium">Quantity</h2>
          <h2 className="col-start-5 text-center font-medium">SubTotal</h2>
        </div>

        {/* Cart Items */}
        {state.cart.map((item, index) => (
          <div
            key={index}
            className="sm:pl-14 grid grid-cols-2 gap-3 sm:grid-cols-5 items-center rounded-[4px] border border-black/5 shadow-black/5 shadow-md p-5"
          >
            {/* Product Name and Image */}
            <div className="flex col-span-2 sm:col-span-2 xs:col-span-1 items-center gap-5">
              {/* Remove Button */}
              <button
                onClick={() => handleRemove(item.productId)}
                className="col-span-2 sm:col-span-1 text-red-500 hover:text-red-700 font-medium"
              >
                <TiDeleteOutline />
              </button>
              <Image
                className="w-10"
                src={item.image} // Use the product image from the cart item
                alt={item.name}
                width={50}
                height={50}
              />
              <h2 className="font-medium">{item.name}</h2>
            </div>

            {/* Price */}
            <h2 className="col-start-2 col-span-1 sm:col-start-3 xs:col-start-2 sm:text-center text-right font-medium">
              ${item.newPrice}
            </h2>

            {/* Quantity Counter */}
            <div className="col-span-1 -mt-10 xs:mt-0 sm:col-start-4 xs:col-span-1 sm:text-center font-medium">
              <SimpleQuantityCounter
                initialQuantity={item.quantity || 1}
                onQuantityChange={(newQuantity) =>
                  handleQuantityChange(item.productId, newQuantity)
                }
              />
            </div>

            {/* Subtotal */}
            <h2 className="hidden xs:block sm:col-start-5 xs:col-start-2 sm:text-center xs:text-right font-medium">
              <span className="sm:hidden">SubTotal: </span>$
              {(item.newPrice * (item.quantity || 1)).toFixed(2)}
            </h2>
          </div>
        ))}
      </div>

      {/* Coupon and Cart Total Section */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-5 mt-20">
        {/* Coupon Code Input */}
        <div className="flex max-h-12 lg:min-w-96 lg:max-w-xl">
          <input
            type="text"
            placeholder="Coupon Code"
            className="mr-2 p-2 w-full border border-primary rounded-[4px]"
          />
          <button className="text-nowrap py-3 px-5 bg-secondary w-1/2 hover:bg-accent text-sm lg:text-base text-center rounded text-white font-medium">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total */}
        <div className="flex flex-col gap-5 border-2 border-primary rounded-[6px] p-5 lg:min-w-96">
          <h2 className="text-xl font-medium my-3">Cart Total</h2>
          <div className="flex justify-between border-b py-2 text-sm w-full">
            <p>Subtotal</p>
            <p className="font-medium">${total.toFixed(2)}</p>
          </div>
          <div className="flex justify-between border-b py-2 text-sm w-full">
            <p>Shipping</p>
            <p className="font-medium">Free</p>
          </div>
          <div className="flex justify-between py-3 text-sm w-full">
            <p>Total</p>
            <p className="font-medium">${total.toFixed(2)}</p>
          </div>
          <button
            className={`text-nowrap py-3 mx-auto px-8 lg:px-12 bg-secondary hover:bg-accent w-5/6 text-sm lg:text-base text-center rounded text-white font-medium`}
          >
            Proceed to checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
