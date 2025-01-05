"use client"
import React, { useState } from "react";
import { client } from "@/sanity/lib/client";

interface ReviewFormProps {
  productId: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ productId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const review = {
      _type: "review",
      rating,
      comment,
      product: {
        _type: "reference",
        _ref: productId,
      },
    };

    await client.create(review);
    alert("Thank you for your review!");
    setRating(0);
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Rating</label>
        <select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
          className="w-full p-2 border rounded"
          required
        >
          <option value={0}>Select a rating</option>
          {[1, 2, 3, 4, 5].map((value) => (
            <option key={value} value={value}>
              {value} Star{value > 1 ? "s" : ""}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">Comment</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border rounded"
          rows={3}
        />
      </div>
      <button
        type="submit"
        className="bg-secondary text-white px-4 py-2 rounded"
      >
        Submit Review
      </button>
    </form>
  );
};

export default ReviewForm;