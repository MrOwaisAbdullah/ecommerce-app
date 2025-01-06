"use client";

import React from "react";
import ProductCard from "../ui/ProductCard";
import { urlFor } from "@/sanity/lib/image";

interface ProductListProps {
  products: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-auto p-5 mb-6 justify-center">
      {/* Dynamically render product cards */}
      {products.map((product, index) => (
        <span key={index} className="flex flex-col-reverse">
          {/* Render color variants */}
          {product.colorVariants && (
            <div className="flex ml-5 gap-1 -mt-3">
              {product.colorVariants.map((variant, i) => (
                <div
                  key={i}
                  className="rounded-full inline-block w-4 h-4 border border-black"
                  style={{ backgroundColor: variant.colorCode }}
                >
                  <div className="border h-full w-full border-white rounded-full"></div>
                </div>
              ))}
            </div>
          )}
          {/* Render product card */}
          <ProductCard
            image={urlFor(product.image).url() || "/default-product.png"} // Fallback image if none is provided
            name={product.name}
            newPrice={product.newPrice}
            oldPrice={product.oldPrice}
            reviews={product.reviews} // Pass resolved reviews to the ProductCard
            isNew={product.isNew}
            discount={product.discount}
            productId={product.productId} // Pass the product ID for the review form
            slug={product.slug} // Pass the slug here
          />
        </span>
      ))}
    </div>
  );
};

export default ProductList;