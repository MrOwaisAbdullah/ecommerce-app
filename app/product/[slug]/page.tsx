"use client"; // Mark this component as a Client Component

import React, { useState, useEffect } from "react";
import { poppins, inter } from "@/app/fonts";
import Image from "next/image";
import StarRating from "@/components/ui/StarRating";
import { GoHeart } from "react-icons/go";
import { TbTruckDelivery } from "react-icons/tb";
import { GrPowerCycle } from "react-icons/gr";
import Headings from "@/components/ui/Headings";
import ProductCard from "@/components/ui/ProductCard";
import { urlFor } from "@/sanity/lib/image";
import { client } from "@/sanity/lib/client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Swiper as SwiperType } from "swiper";

interface ProductPageProps {
  params: {
    slug: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = ({ params }) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null); // To control Swiper programmatically
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]); // State for related products

  // Fetch product and related products
  useEffect(() => {
    const fetchData = async () => {
      // Fetch the main product
      const productQuery = `*[_type == "product" && slug.current == $slug][0] {
        _id,
        name,
        slug,
        newPrice,
        oldPrice,
        image,
        isNew,
        isFeatured,
        discount,
        colorVariants[]-> {
          colorName,
          colorCode
        },
        "reviews": *[_type == "review" && references(^._id)] {
          rating,
          comment,
          customer-> {
            name
          }
        },
        gallery[] {
          asset {
            _ref,
            _type
          }
        }
      }`;

      const product = await client.fetch(productQuery, { slug: params.slug });
      setProduct(product);

      // Fetch related products
      const relatedProductsQuery = `*[_type == "product" && slug.current != $slug][0..3] {
        _id,
        name,
        slug,
        newPrice,
        oldPrice,
        image,
        isNew,
        isFeatured,
        discount,
        colorVariants[]-> {
          colorName,
          colorCode
        },
        "reviews": *[_type == "review" && references(^._id)] {
          rating,
          comment,
          customer-> {
            name
          }
        }
      }`;

      const relatedProducts = await client.fetch(relatedProductsQuery, { slug: params.slug });
      setRelatedProducts(relatedProducts);
    };

    fetchData();
  }, [params.slug]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );
  }

  const {
    name,
    newPrice,
    image,
    gallery,
    reviews = [],
    colorVariants = [],
  } = product;

  // Combine the main image and gallery images into one array
  const allImages = [image, ...(gallery || [])];

  // Check if there are multiple images
  const hasMultipleImages = allImages.length > 1;

  // Calculate average rating
  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum: number, review: { rating: number }) => sum + review.rating, 0) / reviews.length
      : 0;

  // Function to render gallery images
  const renderGalleryImage = (galleryImage: { asset: { _ref: string; _type: string } }, index: number, isMobile = false) => {
    // Ensure galleryImage is an object with an asset property
    if (typeof galleryImage !== "object" || !galleryImage?.asset?._ref) {
      return null; // Skip rendering this image
    }

    const imageUrl = urlFor(galleryImage).url();
    return (
      <div
        key={index}
        className={`bg-graybg flex justify-center mx-auto items-center ${
          isMobile ? "h-24 w-24" : "h-32 w-36"
        } rounded cursor-pointer`}
        onClick={() => {
          if (swiperInstance) {
            swiperInstance.slideTo(index); // Navigate Swiper to the clicked image
          }
        }}
      >
        <Image
          src={imageUrl}
          alt={`${name} Gallery Image ${index + 1}`}
          width={isMobile ? 96 : 130}
          height={isMobile ? 96 : 130}
        />
      </div>
    );
  };

  return (
    <main className={`${poppins.className} my-20 mx-auto px-5 xl:px-24 overflow-hidden`}>
      <h4 className="text-sm text-[#808080] mb-20">Product / <span className="text-black">{name}</span></h4>
      <div className="lg:flex grid grid-cols-1 gap-3">
        {/* Gallery Images (Left Side - Desktop Only) */}
        {hasMultipleImages && (
          <div className="lg:flex flex-col gap-5 hidden">
            {allImages.map((galleryImage, index) => {
              if (typeof galleryImage !== "object" || !galleryImage?.asset?._ref) {
                return null; // Skip rendering this image
              }
              return renderGalleryImage(galleryImage, index);
            })}
          </div>
        )}

        {/* Main Image */}
        <div className="lg:w-5/12 w-full lg:ml-5">
          {hasMultipleImages ? (
            <Swiper
              onSwiper={(swiper) => setSwiperInstance(swiper)} // Store Swiper instance
              spaceBetween={10}
              slidesPerView={1}
              loop={true}
            >
              {allImages.map((galleryImage, index) => {
                // Ensure galleryImage is an object with an asset property
                if (typeof galleryImage !== "object" || !galleryImage?.asset?._ref) {
                  return null; // Skip rendering this image
                }

                const imageUrl = urlFor(galleryImage).url();
                return (
                  <SwiperSlide key={index}>
                    <div className="bg-graybg rounded h-[570px] flex items-center justify-center">
                      <Image
                        className="h-full"
                        src={imageUrl}
                        alt={name}
                        width={500}
                        height={500}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          ) : (
            <div className="bg-graybg rounded h-full flex items-center justify-center">
              <Image
                className="w-full"
                src={urlFor(image).url()}
                alt={name}
                width={500}
                height={500}
              />
            </div>
          )}
        </div>

        {/* Gallery Images (Mobile - Below Main Image) */}
        {hasMultipleImages && (
          <div className="lg:hidden flex gap-2 mt-5 overflow-x-auto">
            {allImages.map((galleryImage, index) => {
              if (typeof galleryImage !== "object" || !galleryImage?.asset?._ref) {
                return null; // Skip rendering this image
              }
              return renderGalleryImage(galleryImage, index, true);
            })}
          </div>
        )}

        {/* Product Details */}
        <div className="lg:ml-14 justify-center lg:justify-start flex flex-col">
          <h1 className={`${inter.className} text-2xl font-semibold text-center lg:text-left`}>{name}</h1>
          <div className="flex text-graytext gap-3 text-sm justify-center lg:justify-start items-center">
            <StarRating rating={averageRating} />
            <span className="mt-3">({reviews.length} reviews)</span>
            <span className="mt-3">|</span>
            <span className="text-accent mt-3">In Stock</span>
          </div>
          <h3 className={`${inter.className}text-2xl mt-3 text-center lg:text-left`}>${newPrice}</h3>
          <p className="flex text-sm mt-5 lg:w-96 border-b pb-6 border-graytext text-center lg:text-left justify-center lg:justify-start">
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
          </p>

          {/* Colors */}
          <div className="flex mt-6 justify-center lg:justify-start">
            <h4 className="text-xl">Colours:</h4>
            <div className="flex ml-3 mt-2 gap-2">
              {colorVariants?.map((variant: { colorCode: string }, index: number) => (
                <div
                  key={index}
                  className="rounded-full w-4 h-4"
                  style={{ backgroundColor: variant.colorCode }}
                ></div>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className="flex mt-5 justify-center lg:justify-start">
            <h4 className="text-xl">Size:</h4>
            <div className="flex gap-4">
              {["XS", "S", "M", "L", "XL"].map((size, index) => (
                <p
                  key={index}
                  className="text-sm font-medium border w-7 text-center rounded p-1 border-[#808080] hover:bg-secondary hover:text-white cursor-pointer"
                >
                  {size}
                </p>
              ))}
            </div>
          </div>

          {/* Quantity and Buy Now */}
          <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-start">
            <div className="flex mt-6 h-10">
              <p className="text-2xl text-[#808080] font-medium border w-8 text-center rounded-l-lg p-1 border-[#808080] hover:bg-secondary hover:text-white cursor-pointer">-</p>
              <p className="flex justify-center text-sm font-medium border w-16 items-center text-center p-1 border-[#808080]">2</p>
              <p className="text-2xl font-medium text-[#808080] border w-8 text-center rounded-r-lg p-1 border-[#808080] hover:bg-secondary hover:text-white cursor-pointer">+</p>
            </div>
            <button className="rounded py-2 px-5 h-10 w-36 text-center justify-center mt-6 ml-4 text-white flex bg-secondary">Buy Now</button>
            <GoHeart className="border text-center mt-6 h-10 w-auto rounded p-1 border-[#808080] cursor-pointer text-2xl ml-4" />
          </div>

          {/* Delivery Info */}
          <div className="flex flex-col border rounded mt-8 mx-0 justify-center lg:justify-start">
            <div className="flex p-5 gap-3 justify-center lg:justify-start items-center">
              <TbTruckDelivery className="text-3xl" />
              <div>
                <h4>Free Delivery</h4>
                <p className="text-xs">Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className="flex p-5 gap-3 justify-center lg:justify-start items-center border-t">
              <GrPowerCycle className="text-3xl" />
              <div>
                <h4>Return Delivery</h4>
                <p className="text-xs">Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-20 mx-auto">
        <span className="flex justify-start items-start"><Headings subheading="Related" /></span>
        <div className="grid grid-cols-[auto] sm:grid-cols-[repeat(2,auto)]  lg:grid-cols-[repeat(4,auto)] gap-5 mx-auto mt-5">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard
              key={relatedProduct.productId}
              image={urlFor(relatedProduct.image).url()}
              name={relatedProduct.name}
              newPrice={relatedProduct.newPrice}
              oldPrice={relatedProduct.oldPrice}
              rating={
                (relatedProduct.reviews?.length ?? 0) > 0
                  ? (relatedProduct.reviews ?? []).reduce((sum: number, review: { rating: number }) => sum + review.rating, 0) / (relatedProduct.reviews?.length ?? 1)
                  : 0
              }
              ratingCount={relatedProduct.reviews?.length || 0}
              slug={relatedProduct.slug}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductPage;