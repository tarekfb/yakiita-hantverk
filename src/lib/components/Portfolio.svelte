<script lang="ts">
  import { onMount } from "svelte";
  import type { PortfolioItem as PortfolioItemType } from "$lib/types/portfolioItem";
  import PortfolioItem from "./PortfolioItem.svelte";

  interface Props {
    items: PortfolioItemType[];
    types: string[];
  }

  let { items, types }: Props = $props();

  let selectedCategory = $state("Alla");
  let categories = $derived(["Alla", ...types]);

  let filteredItems = $derived(
    selectedCategory === "Alla"
      ? items
      : items.filter((item) => item.type.includes(selectedCategory)),
  );

  const base = 6;
  let loadedItems = $state(base);
  const itemsPerLoad = 3;

  function loadMore() {
    loadedItems += itemsPerLoad;
  }

  let visibleItems = $derived(filteredItems.slice(0, loadedItems));
  let hasMore = $derived(visibleItems.length < filteredItems.length);

  onMount(() => {
    // Reset loadedItems when category changes
    loadedItems = base;
  });

  function handleCategoryChange(category: string) {
    selectedCategory = category;
    loadedItems = 6;
  }
</script>

<section id="portfolio" class="py-20 bg-accent/10">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
        Mina verk
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
        <PortfolioItem {item} />
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
