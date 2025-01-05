import { type SchemaTypeDefinition } from 'sanity'
import productSchema from './product'
import review from './review'
import customer from './customer'
import colorVariants from './colorVariants'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [productSchema, colorVariants, review, customer],
}
