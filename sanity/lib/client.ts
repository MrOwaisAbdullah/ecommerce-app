import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})

// Fetch a single product with reviews by slug
export async function getProducts() {
  const query = `*[_type == "product"] {
    _id,
    name,
    slug,
    newPrice,
    oldPrice,
    image,
    isNew,
    discount,
    isFeatured,
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
     "discount": select(
      oldPrice != null && newPrice != null => round((oldPrice - newPrice) / oldPrice * 100),
      null
    )
  }`;
  const products = await client.fetch(query);
  return products;
}