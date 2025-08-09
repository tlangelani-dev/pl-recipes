import type { BasePayload, SanitizedConfig } from 'payload'

import payload from 'payload'

export const script = async (config: SanitizedConfig) => {
  await payload.init({ config })

  await seedDietaryRequirements(payload)

  payload.logger.info('Seeding completed!')
  process.exit(0)
}

const seedDietaryRequirements = async (payload: BasePayload) => {
  if ((await payload.count({ collection: 'dietaryRequirements' })).totalDocs > 0) {
    payload.logger.info('Dietary requirements already seeded!')
    return
  }

  const dietaryRequirements = [
    'Nut Free',
    'Keto',
    'Banting',
    'Vegan',
    'Vegetarian',
    'Kosher',
    'Halal',
    'High Protein',
    'Low Carb',
  ]
  for (const dietaryRequirement of dietaryRequirements) {
    await payload.create({
      collection: 'dietaryRequirements',
      data: { name: dietaryRequirement },
    })
  }

  payload.logger.info('Successfully seeded dietary requirements!')
}
