import DiscountInput from "@/components/DiscountInput";
import { defineType, defineField } from "sanity";

export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "oldPrice",
      title: "Old Price",
      type: "number",
      description: "The original price of the product (optional).",
    }),
    defineField({
      name: "newPrice",
      title: "New Price",
      type: "number",
      description: "The discounted price of the product.",
      validation: (Rule) =>
        Rule.required()
          .min(0)
          .custom((newPrice, context) => {
            const oldPrice = context.document?.oldPrice as number;
            if (newPrice && oldPrice && newPrice >= oldPrice) {
              return "New Price must be less than Old Price.";
            }
            return true;
          }),
    }),
    defineField({
      name: "discount",
      title: "Discount",
      type: "number", // Display as string in the Studio
      description: "The discount percentage (automatically calculated).",
      readOnly: true, // Make it read-only
      components: {
        input: DiscountInput, // Use the custom input component
      },
      hidden: ({ document }) => !document?.oldPrice || !document?.newPrice, // Hide if no discount
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true, // Allows for responsive cropping
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "gallery",
      title: "Gallery Images",
      type: "array",
      of: [{ type: "image" }], // Array of images
      description: "Upload up to 3 images for the product gallery.",
      validation: (Rule) =>
        Rule.max(3).error("You can upload a maximum of 3 images."), // Enforce max 3 images
    }),
    defineField({
      name: "isNew",
      title: "Is New?",
      type: "boolean",
      description: "Mark this product as new (optional).",
    }),
    defineField({
      name: "isFeatured",
      type: "boolean",
      title: "Is Featured",
      description: "Set this product as featured",
      initialValue: false, // Default value is set to false
    }),
    defineField({
      name: "colorVariants",
      title: "Color Variants",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "colorVariant" }], // Reference the colorVariant schema
        },
      ],
      description: "Select color variants for this product.",
    }),
  ],
  initialValue: {
    isNew: false, // Default value for isNew
  },
});
