<script lang="ts">
  import { onMount } from 'svelte'
  import type { PortfolioItem } from '$lib/types/portfolioItem'
  import * as Carousel from '$lib/components/ui/carousel'
  import { urlFor } from '$lib/sanity/sanity-images'

  interface Props {
    items: PortfolioItem[]
    types: string[]
  }

  let { items, types }: Props = $props()

  let selectedCategory = $state('Alla')
  let categories = $derived(['Alla', ...types])

  let filteredItems = $derived(
    selectedCategory === 'Alla'
      ? items
      : items.filter((item) => item.type.includes(selectedCategory))
  )

  const base = 6
  let loadedItems = $state(base)
  const itemsPerLoad = 3

  function loadMore() {
    loadedItems += itemsPerLoad
  }

  let visibleItems = $derived(filteredItems.slice(0, loadedItems))
  let hasMore = $derived(visibleItems.length < filteredItems.length)

  onMount(() => {
    // Reset loadedItems when category changes
    loadedItems = base
  })

  function handleCategoryChange(category: string) {
    selectedCategory = category
    loadedItems = 6
  }
</script>

<section id="portfolio" class="py-20 bg-accent/10">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
        Portfolio
      </h2>
      <p class="text-lg text-secondary max-w-2xl mx-auto">
        En samling av mina senaste projekt som visar mångfalden i mitt hantverk.
      </p>
    </div>

    <!-- Category Filter -->
    <div class="flex flex-wrap justify-center gap-4 mb-12">
      {#each categories as category}
        <button
          onclick={() => handleCategoryChange(category)}
          class="cursor-pointer px-6 py-2 rounded-full transition-colors {selectedCategory ===
          category
            ? 'bg-secondary text-white'
            : 'bg-accent/50 text-secondary hover:bg-accent'}"
        >
          {category}
        </button>
      {/each}
    </div>

    <!-- Portfolio Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {#each visibleItems as item (item._id)}
        <div
          class="group bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          <div class="aspect-square overflow-hidden">
            {#if item.image.length > 1}
              <Carousel.Root class="w-full h-full">
                <Carousel.Content>
                  {#each item.image as image}
                    <Carousel.Item>
                      <div class="w-full h-full">
                        <img
                          src={urlFor(image).width(200).url()}
                          alt={item.title}
                          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </Carousel.Item>
                  {/each}
                </Carousel.Content>
                <Carousel.Previous
                  class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 z-10"
                />
                <Carousel.Next
                  class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 z-10"
                />
              </Carousel.Root>
            {:else}
              <img
                src={urlFor(item.image[0]).width(200).url()}
                alt={item.title}
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            {/if}
          </div>
          <div class="p-6">
            <div class="flex items-center justify-between mb-2">
              <h3 class="text-xl font-serif font-semibold text-primary">
                {item.title}
              </h3>
              <ul class="flex flex-wrap gap-2">
                {#each item.type as singleType}
                  <li>
                    <span
                      class="text-sm text-secondary bg-accent/50 px-2 py-1 rounded"
                    >
                      {singleType}
                    </span>
                  </li>
                {/each}
              </ul>
            </div>
            <p class="text-secondary leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      {/each}
    </div>

    <!-- Load More Button -->
    {#if hasMore}
      <div class="text-center">
        <button
          onclick={loadMore}
          class="px-8 py-3 bg-secondary hover:bg-primary text-white rounded-lg transition-colors"
        >
          Visa Fler Projekt
        </button>
      </div>
    {/if}
  </div>
</section>
