import { defineType, defineField } from "sanity";

export default defineType({
  name: "colorVariant",
  title: "Color Variant",
  type: "document",
  fields: [
    defineField({
      name: "colorName",
      title: "Color Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "colorCode",
      title: "Color Code",
      type: "string",
      description: 'A hex code (e.g., #FFFFFF) or CSS color name (e.g., "red").',
      validation: (Rule) => Rule.required(),
    }),
  ],
});