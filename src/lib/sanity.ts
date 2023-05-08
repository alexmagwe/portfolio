import {createClient} from '@sanity/client'
import { env } from './env'
import imageUrlBuilder from '@sanity/image-url'
import { SanityImageSource } from '@sanity/image-url/lib/types/types'
import 'server-only'
export const sanityClient = createClient({
  projectId: env.PROJECT_ID,
  dataset: env.PROJECT_DATASET,
  useCdn: true, // set to `false` to bypass the edge cache
  apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
})
const builder = imageUrlBuilder(sanityClient)

export function urlFor(source:SanityImageSource) {
  return builder.image(source)
}