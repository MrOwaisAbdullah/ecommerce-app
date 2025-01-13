'use client'; // Required for client-side interactivity

import { useState } from 'react';

interface SimpleQuantityCounterProps {
  initialQuantity: number;
  onQuantityChange: (quantity: number) => void;
}

export default function SimpleQuantityCounter({
  initialQuantity,
  onQuantityChange,
}: SimpleQuantityCounterProps) {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
      onQuantityChange(newQuantity);
    }
  };

  return (
    <input
      type="number"
      value={quantity}
      onChange={handleChange}
      className="w-16 text-center border rounded"
      min="1"
    />
  );
}