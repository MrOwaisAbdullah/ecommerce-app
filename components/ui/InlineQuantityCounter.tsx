'use client'; // Required for client-side interactivity

import { useState } from 'react';

interface InlineQuantityCounterProps {
  initialQuantity: number;
  onQuantityChange: (quantity: number) => void;
}

export default function InlineQuantityCounter({
  initialQuantity,
  onQuantityChange,
}: InlineQuantityCounterProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleDecrease = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  const handleIncrease = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onQuantityChange(newQuantity);
  };

  return (
    <div className="flex items-center gap-2 border rounded">
      <button
        onClick={handleDecrease}
        className="px-3 py-1 rounded h-full hover:bg-gray-200"
      >
        -
      </button>
      <span className="text-lg min-w-3 font-semibold">{quantity}</span>
      <button
        onClick={handleIncrease}
        className="px-3 py-1 rounded h-full hover:bg-gray-200"
      >
        +
      </button>
    </div>
  );
}