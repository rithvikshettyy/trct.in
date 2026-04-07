import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

const sanityClient = projectId
  ? createClient({ apiVersion, dataset, projectId, useCdn })
  : null

export const client = {
  fetch: async <T = any>(query: string, params?: any): Promise<T> => {
    if (!sanityClient) return [] as unknown as T
    return sanityClient.fetch<T>(query, params)
  },
}
