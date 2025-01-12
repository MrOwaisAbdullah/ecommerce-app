'use client'; 

import { useState } from 'react';

interface QuantityCounterProps {
  initialQuantity: number;
  onQuantityChange: (quantity: number) => void;
}

export default function QuantityCounter({
  initialQuantity,
  onQuantityChange,
}: QuantityCounterProps) {
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
    <div className="flex items-center gap-2">
      <button
        onClick={handleDecrease}
        className="bg-gray-200 px-2 rounded"
      >
        -
      </button>
      <span className="text-lg font-semibold">{quantity}</span>
      <button
        onClick={handleIncrease}
        className="bg-gray-200 px-2 rounded"
      >
        +
      </button>
    </div>
  );
}