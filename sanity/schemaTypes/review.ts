import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'review',
  title: 'Review',
  type: 'document',
  fields: [
    defineField({
      name: 'rating',
      title: 'Rating',
      type: 'number',
      validation: (Rule) =>
        Rule.required()
          .min(1)
          .max(5)
          .error('Rating must be between 1 and 5.'),
    }),
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'text',
      description: 'Customer review comment (optional).',
    }),
    defineField({
      name: 'customer',
      title: 'Customer',
      type: 'reference',
      to: [{ type: 'customer' }], // Reference the customer schema
      description: 'The customer who left this review (optional).',
    }),
    defineField({
      name: 'product',
      title: 'Product',
      type: 'reference',
      to: [{ type: 'product' }], // Link the review to a product
      validation: (Rule) => Rule.required(),
      description: 'The product this review is for.',
    }),
  ],
});