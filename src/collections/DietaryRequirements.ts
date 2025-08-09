import type { CollectionConfig } from 'payload'

export const DietaryRequirements: CollectionConfig = {
  slug: 'dietaryRequirements',
  admin: {
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'users',
      type: 'join',
      collection: 'users',
      on: 'dietaryRequirements',
    },
  ],
}
