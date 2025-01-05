import React from 'react';
import { poppins, inter } from '@/app/fonts';
import Image from 'next/image';
import StarRating from '@/components/ui/StarRating';
import { GoHeart } from 'react-icons/go';
import { TbTruckDelivery } from 'react-icons/tb';
import { GrPowerCycle } from 'react-icons/gr';
import Headings from '@/components/ui/Headings';
import ProductCard from '@/components/ui/ProductCard';
import { urlFor } from '@/sanity/lib/image';
import { client } from '@/sanity/lib/client';

interface ProductPageProps {
  params: {
    slug: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
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

  // Handle case where product is not found
  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-2xl font-semibold">Product not found</h1>
      </div>
    );
  }

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

  const {
    name,
    newPrice,
    image,
    gallery,
    reviews = [],
    colorVariants = [],
  } = product;

  // Calculate average rating
  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum: number, review: { rating: number }) => sum + review.rating, 0) / reviews.length
      : 0;

  // Debug gallery data
  console.log("Gallery Data:", gallery);

  return (
    <main className={`${poppins.className} my-20 mx-auto px-10 xl:px-24 overflow-hidden`}>
      <h4 className='text-sm text-[#808080] mb-20'>Account / Gaming / <span className='text-black'>{name}</span></h4>
      <div className='lg:flex grid grid-cols-1 gap-3'>
        {/* Gallery Images (Left Side) */}
        <div className='lg:flex flex-col gap-5 hidden'>
          {gallery?.map((galleryImage: { asset: { _ref: string | null } }, index: React.Key | null | undefined) => {
            if (!galleryImage?.asset?._ref) {
              return null; // Skip rendering this image
            }

            return (
              <div key={index} className="bg-graybg flex justify-center items-center h-32 w-36 rounded">
                <Image
                  src={urlFor(galleryImage).url()}
                  alt={`${name} Gallery Image ${Number(index) + 1}`}
                  width={130}
                  height={130}
                />
              </div>
            );
          })}
        </div>

        {/* Main Image */}
        <div className='lg:w-5/12 w-full lg:ml-5'>
          <div className="bg-graybg rounded h-full flex items-center justify-center">
            <Image
              className="w-full"
              src={urlFor(image).url()}
              alt={name}
              width={500}
              height={500}
            />
          </div>
        </div>

        {/* Gallery Images (Mobile) */}
        <div className='flex gap-2 lg:hidden justify-center'>
          {gallery?.map((galleryImage: { asset: { _ref: string | null } }, index: React.Key | null | undefined) => {
            if (!galleryImage?.asset?._ref) {
              return null; // Skip rendering this image
            }

            return (
              <div key={index} className="bg-graybg flex justify-center items-center h-32 w-36 rounded">
                <Image
                  src={urlFor(galleryImage).url()}
                  alt={`${name} Gallery Image ${Number(index) + 1}`}
                  width={130}
                  height={130}
                />
              </div>
            );
          })}
        </div>

        {/* Product Details */}
        <div className='lg:ml-14 justify-center lg:justify-start flex flex-col'>
          <h1 className={`${inter.className} text-2xl font-semibold text-center lg:text-left`}>{name}</h1>
          <div className='flex text-graytext gap-3 text-sm justify-center lg:justify-start items-center'>
            <StarRating rating={averageRating} />
            <span className='mt-3'>({reviews.length} reviews)</span>
            <span className='mt-3'>|</span>
            <span className='text-accent mt-3'>In Stock</span>
          </div>
          <h3 className={`${inter.className}text-2xl mt-3 text-center lg:text-left`}>${newPrice}</h3>
          <p className='flex text-sm mt-5 lg:w-96 border-b pb-6 border-graytext text-center lg:text-left justify-center lg:justify-start'>
            PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.
          </p>

          {/* Colors */}
          <div className='flex mt-6 justify-center lg:justify-start'>
            <h4 className='text-xl'>Colours:</h4>
            <div className='flex ml-3 mt-2 gap-2'>
              {colorVariants?.map((variant: { colorCode: string }, index: React.Key | null | undefined) => (
                <div
                  key={index}
                  className='rounded-full w-4 h-4'
                  style={{ backgroundColor: variant.colorCode }}
                ></div>
              ))}
            </div>
          </div>

          {/* Sizes */}
          <div className='flex mt-5 justify-center lg:justify-start'>
            <h4 className='text-xl'>Size:</h4>
            <div className='flex gap-4'>
              {["XS", "S", "M", "L", "XL"].map((size, index) => (
                <p
                  key={index}
                  className='text-sm font-medium border w-7 text-center rounded p-1 border-[#808080] hover:bg-secondary hover:text-white cursor-pointer'
                >
                  {size}
                </p>
              ))}
            </div>
          </div>

          {/* Quantity and Buy Now */}
          <div className='flex flex-wrap lg:flex-nowrap justify-center lg:justify-start'>
            <div className='flex mt-6 h-10'>
              <p className='text-2xl text-[#808080] font-medium border w-8 text-center rounded-l-lg p-1 border-[#808080] hover:bg-secondary hover:text-white cursor-pointer'>-</p>
              <p className='flex justify-center text-sm font-medium border w-16 items-center text-center p-1 border-[#808080]'>2</p>
              <p className='text-2xl font-medium text-[#808080] border w-8 text-center rounded-r-lg p-1 border-[#808080] hover:bg-secondary hover:text-white cursor-pointer'>+</p>
            </div>
            <button className='rounded py-2 px-5 h-10 w-36 text-center justify-center mt-6 ml-4 text-white flex bg-secondary'>Buy Now</button>
            <GoHeart className="border text-center mt-6 h-10 w-auto rounded p-1 border-[#808080] cursor-pointer text-2xl ml-4" />
          </div>

          {/* Delivery Info */}
          <div className='flex flex-col border rounded mt-8 mx-0 justify-center lg:justify-start'>
            <div className='flex p-5 gap-3 justify-center lg:justify-start items-center'>
              <TbTruckDelivery className='text-3xl' />
              <div>
                <h4>Free Delivery</h4>
                <p className='text-xs'>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <div className='flex p-5 gap-3 justify-center lg:justify-start items-center border-t'>
              <GrPowerCycle className='text-3xl' />
              <div>
                <h4>Return Delivery</h4>
                <p className='text-xs'>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className='mt-20'>
        <span className='flex justify-start items-start'><Headings subheading="Related" /></span>
        <div className='flex flex-wrap lg:flex-nowrap justify-center items-center'>
          {relatedProducts.map((relatedProduct: { _id: React.Key | null | undefined; image: { asset: { _ref: string } }; name: string; newPrice: number; oldPrice: number | undefined; reviews: { rating: number; comment: string; customer: { name: string; }; }[]; }) => (
            <ProductCard
              key={relatedProduct._id}
              image={urlFor(relatedProduct.image).url()}
              name={relatedProduct.name}
              newPrice={relatedProduct.newPrice}
              oldPrice={relatedProduct.oldPrice}
              rating={
                relatedProduct.reviews?.length > 0
                  ? relatedProduct.reviews.reduce((sum, review) => sum + review.rating, 0) / relatedProduct.reviews.length
                  : 0
              }
              ratingCount={relatedProduct.reviews?.length || 0}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProductPage;