import BestProducts from "@/components/sections/BestProducts";
import Category from "@/components/sections/Category";
import Hero from "@/components/sections/Hero";
import SaleProducts from "@/components/sections/SaleProducts";
import Features from "@/components/sections/Features";
import Arrivals from "@/components/sections/Arrivals";
import Products from "@/components/sections/Products";
import SalesBanner from "@/components/sections/SalesBanner";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <SaleProducts />
      <Category />
      <BestProducts />
      <SalesBanner />

    <Products />
    <Arrivals />
    <Features />
    </div>
  )};
