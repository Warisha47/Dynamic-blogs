import { type SchemaTypeDefinition } from 'sanity'
import { blog } from './blog'
import { author } from './Author'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [blog,author],
}
