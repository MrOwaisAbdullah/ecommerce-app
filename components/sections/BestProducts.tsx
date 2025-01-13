"use client"; 

import React, { useEffect, useState } from "react";
import Headings from "../ui/Headings";
import ProductCard from "../ui/ProductCard";
import Button from "../ui/Button";
import { poppins } from "../../app/fonts";
import { getProducts } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

const BestProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Fetch products from Sanity
    const fetchProducts = async () => {
      const products = await getProducts();
      setProducts(products);
    };
    fetchProducts();
  }, []);

  return (
    <section className={`${poppins.className} xl:container px-5 mt-12 pt-12 relative mb-5 overflow-hidden`}>
      <div className="flex mb-8 justify-between xl:px-8">
        <Headings subheading="This Month" heading="Best Selling Products" />
        <span className="justify-end items-end mt-14 sm:mt-10">
          <Button btnText="View All" color="secondary" />
        </span>
      </div>
      <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-auto p-5 justify-center">
        {/* Dynamically render product cards */}
        {products.map((product) => (
          <span key={product._id} className="">
            <ProductCard
              image={urlFor(product.image).url() || "/default-product.png"} // Fallback image if none is provided
              name={product.name}
              newPrice={product.newPrice}
              oldPrice={product.oldPrice}
              reviews={product.reviews || []} // Pass reviews or an empty array
              isNew={product.isNew || false} // Set isNew to false if undefined
              rating={product.rating || 0} // Pass rating or default to 0
              ratingCount={product.ratingCount || 0} // Pass ratingCount or default to 0
              productId={product._id} // Pass the product ID for the review form
              slug={product.slug || {current: null}} // Pass the slug here
            />
          </span>
        ))}
      </div>
    </section>
  );
};

export default BestProducts;