import type { LayoutServerLoad } from './$types';
import { getPortfolioItems } from '$lib/sanity/client';

export const load = (async () => {
    const data = await getPortfolioItems();
    const types = Array.from(new Set<string>(data.flatMap((item) => item.type)));
    
    return { portfolioItems: data, types};
}) satisfies LayoutServerLoad;

export const prerender = true;