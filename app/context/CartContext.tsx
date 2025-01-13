"use client"
import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { validateCart } from "@/utils/validateCart";

// Define the CartContextValue type
interface CartContextValue {
  state: CartState; // state includes cart
  dispatch: React.Dispatch<CartAction>;
  totalItems: number;
  totalPrice: number;
  validateCartBeforeCheckout: () => Promise<Products[]>;
}

// Cart reducer function
const cartReducer = (state: CartState, action: CartAction): CartState => {
  let updatedCart: Products[];
  switch (action.type) {
    case "SET_CART":
      updatedCart = action.cart;
      break;
    case "ADD_TO_CART": {
      const existingProductIndex = state.cart.findIndex(
        (item) => item.productId === action.product._id
      );
      if (existingProductIndex !== -1) {
        updatedCart = [...state.cart];
        const existingItem = updatedCart[existingProductIndex];
        updatedCart[existingProductIndex] = {
          ...existingItem,
          quantity:
            (existingItem.quantity || 1) + (action.product.quantity || 1),
        };
      } else {
        updatedCart = [
          ...state.cart,
          { ...action.product, productId: action.product._id, quantity: action.product.quantity || 1 },
        ];
      }
      break;
    }
    case "REMOVE_FROM_CART": {
      updatedCart = state.cart.filter((item) => item.productId !== action.id);
      break;
    }
    case "UPDATE_QUANTITY":
      updatedCart = state.cart.map((item) =>
        item.productId === action.id
          ? { ...item, quantity: Math.max(1, action.quantity || 1) }
          : item
      );
      break;
    case "CLEAR_CART":
      updatedCart = [];
      break;
    default:
      return state;
  }
  // Update localStorage
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  }

  return { cart: updatedCart };
};

// Create the CartContext
const CartContext = createContext<CartContextValue | undefined>(undefined);

// CartProvider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    { cart: [] },
    (initialState) => {
      if (typeof window !== "undefined") {
        try {
          const storedCart = localStorage.getItem("cart");
          console.log("Initial Cart loaded from localStorage:", storedCart);
          return storedCart ? { cart: JSON.parse(storedCart) } : initialState;
        } catch (error) {
          console.error("Error loading cart from localStorage:", error);
          return initialState;
        }
      }
      return initialState;
    }
  );

  // Calculate totals
  const totalItems = state.cart.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );
  const totalPrice = state.cart.reduce(
    (sum, item) => sum + item.newPrice * (item.quantity || 1),
    0
  );

  // Validate cart before checkout
  const validateCartBeforeCheckout = async (): Promise<Products[]> => {
    const validatedCart = await validateCart(state.cart);
    dispatch({ type: "SET_CART", cart: validatedCart }); // Update the cart with validated data
    return validatedCart;
  };

  // Sync cart with localStorage
  useEffect(() => {
    try {
      console.log("Current localStorage cart:", localStorage.getItem("cart")); // Debug: Log the current localStorage data
      localStorage.setItem("cart", JSON.stringify(state.cart));
      console.log("Updated localStorage cart:", localStorage.getItem("cart")); // Debug: Log the updated localStorage data
    } catch (error) {
      console.error("Error saving cart to localStorage:", error);
    }
  }, [state.cart]);

  // Context value
  const contextValue: CartContextValue = {
    state, // state includes cart
    dispatch,
    totalItems,
    totalPrice,
    validateCartBeforeCheckout,
  };

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

// useCart hook
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};