interface Review {
    rating: number;
    comment?: string;
    customer?: {
      name: string;
    };
  }

  interface ProductCardProps {
    image: string;
    name: string;
    newPrice: number;
    oldPrice?: number;
    reviews?: Review[]; // Define reviews as an optional array of Review objects
    isNew?: boolean;
    productId: string; // Only include required props
  }

  interface Product {
    image: string;
    gallery?: Array<{
      asset: {
        _ref: string;
        _type: "reference";
      };
    }>;
    name: string;
    newPrice: number;
    oldPrice?: number;
    reviews?: Review[]; // Define reviews as an array of Review objects
    isNew?: boolean;
    productId?: string;
    slug?: {
      current: string;
    };
    colorVariants?: { colorCode: string }[];
    discount?: number; // Add discount if needed
    inlineRating?: boolean; // Add inlineRating if needed
    rating: number; // Add rating if needed
    ratingCount: number; // Add ratingCount if needed
  }