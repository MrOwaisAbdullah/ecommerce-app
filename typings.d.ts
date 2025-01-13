interface Products {
  productId: string;
  name: string;
  newPrice: number;
  image: string;
  quantity?: number;
}


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
    productId?: string; // Only include required props
    slug: {
      current: string | null;
    };
    discount?: number; 
    inlineRating?: boolean; 
    rating?: number; 
    ratingCount?: number; 
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
    reviews?: Review[]; 
    isNew?: boolean;
    description?: string;
    _id: string;
    slug?: {
      current: string;
    };
    colorVariants?: { colorCode: string }[];
    discount?: number; 
    inlineRating?: boolean; 
    rating?: number; 
    ratingCount?: number; 
    quantity?: number;
  }

  interface Order {
    id: string;
    orderId: string;
    date: number;
    customerName: string;
  }

  interface CartState {
    cart: Products[];
  }
  
  type CartAction =
    | { type: "SET_CART"; cart: Products[] }
    | { type: "ADD_TO_CART"; product: Product }
    | { type: "REMOVE_FROM_CART"; id: string }
    | { type: "UPDATE_QUANTITY"; id: string; quantity: number }
    | { type: "CLEAR_CART" };