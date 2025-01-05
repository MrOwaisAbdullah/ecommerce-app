import { poppins } from "@/app/fonts";
import React from "react";
import Headings from "../ui/Headings";
import PagginationArrows from "../ui/PagginationArrows";
import Button from "../ui/Button";
import { getProducts } from "@/sanity/lib/client"; // Import the fetch function
import ProductList from "./ProductList"; // Import the Client Component

const Products = async () => {
  // Fetch products from Sanity (Server Component)
  const products = await getProducts();

  return (
    <section
      className={`${poppins.className} xl:container px-5 mt-12 pt-12 relative overflow-hidden`}
    >
      <div className="flex mb-8 justify-between xl:px-8 ">
        <Headings subheading="Our Products" heading="Explore Our Products" />
        <PagginationArrows />
      </div>
      {/* Pass products to the Client Component */}
      <ProductList products={products} />
      <div className="xl:container text-center items-center mt-8">
        <Button btnText="View All Products" color="secondary" />
      </div>
    </section>
  );
};

export default Products;