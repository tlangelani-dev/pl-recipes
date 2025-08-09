import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'firstname',
      label: 'First Name',
      type: 'text',
    },
    {
      name: 'lastname',
      label: 'Last Name',
      type: 'text',
    },
    {
      name: 'role',
      label: 'Role',
      type: 'relationship',
      relationTo: 'roles',
    },
    {
      name: 'dietaryRequirements',
      label: 'Dietary Requirements',
      type: 'relationship',
      relationTo: 'dietaryRequirements',
      hasMany: true,
    },
    {
      name: 'isActive',
      label: 'Is Active',
      type: 'checkbox',
    },
  ],
}
