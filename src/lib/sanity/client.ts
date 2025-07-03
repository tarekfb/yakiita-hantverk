import {createClient} from '@sanity/client'
import type { PortfolioItems } from '$lib/types/portfolioItem';

const projectId = "pxsvt0cb"
const dataset = "production";

export const client = createClient({
  projectId,
  dataset,
  useCdn: true, // set to `false` to bypass the edge cache
  // Set default headers to be included with all requests
  headers: {
    'X-Custom-Header': 'custom-value'
  },
  apiVersion: '2025-07-03', // use current date (YYYY-MM-DD) to target the latest API version. Note: this should always be hard coded. Setting API version based on a dynamic value (e.g. new Date()) may break your application at a random point in the future.
  // token: process.env.SANITY_SECRET_TOKEN // Needed for certain operations like updating content, accessing drafts or using draft perspectives
})

// uses GROQ to query content: https://www.sanity.io/docs/groq
export async function getPortfolioItems(): Promise<PortfolioItems> {
 return await client.fetch('*[_type == "portfolioItem"]') as PortfolioItems;
}