import { type SchemaTypeDefinition } from 'sanity'

import { eventType } from './eventType'
import { vaultType } from './vaultType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [eventType, vaultType],
}
