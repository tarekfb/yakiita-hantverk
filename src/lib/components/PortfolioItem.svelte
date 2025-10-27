<script lang="ts">
    import type { PortfolioItem } from "$lib/types/portfolioItem";
    import * as Carousel from "$lib/components/ui/carousel";
    import { urlFor } from "$lib/sanity/sanity-images";
    import * as Dialog from "$lib/components/ui/dialog/index.js";
    import Lightbox from "./Lightbox.svelte";
    import { type CarouselAPI } from "$lib/components/ui/carousel/context.js";

    interface Props {
        item: PortfolioItem;
    }

    let { item }: Props = $props();

    let api = $state<CarouselAPI>();
    let current = $state(0);
    const count = $derived(api ? api.scrollSnapList().length : 0);
    $effect(() => {
        if (api) {
            current = api.selectedScrollSnap() + 1;
            api.on("select", () => {
                current = api!.selectedScrollSnap() + 1;
            });
        }
    });
</script>

<div
    class="group bg-background rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
>
    <div class="h-56 w-full overflow-hidden">
        {#if item.image.length > 1}
            <Carousel.Root
                class="w-full h-full"
                setApi={(emblaApi) => (api = emblaApi)}
            >
                <Carousel.Content>
                    {#each item.image as image}
                        <Carousel.Item>
                            <Dialog.Root>
                                <Dialog.Trigger class="w-full cursor-pointer">
                                    <img
                                        src={urlFor(image).width(1000).url()}
                                        alt={item.title}
                                        class="w-full h-full object-center -mt-12 md:-mt-2 group-hover:scale-105 transition-transform duration-300"
                                    />
                                </Dialog.Trigger>
                                <Dialog.Content class="w-full"
                                    ><Lightbox
                                        src={urlFor(image).width(1000).url()}
                                        alt={item.title}
                                    /></Dialog.Content
                                >
                            </Dialog.Root>
                        </Carousel.Item>
                    {/each}
                </Carousel.Content>
                <Carousel.Previous
                    class="absolute left-2 top-1/2 transform -translate-y-1/2  bg-white/90 hover:bg-white rounded-full p-2 z-10 {current -
                        1 <=
                    0
                        ? 'bg-gray-200 opacity-50 cursor-not-allowed'
                        : ''}"
                />
                <Carousel.Next
                    class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 z-10 {current +
                        1 >
                    count
                        ? 'bg-gray-200 opacity-50 cursor-not-allowed'
                        : ''}"
                />
            </Carousel.Root>
        {:else}
            <Dialog.Root>
                <Dialog.Trigger class="w-full cursor-pointer">
                    <img
                        src={urlFor(item.image[0]).width(1000).url()}
                        alt={item.title}
                        class="w-full h-full object-contain group-hover:scale-105 -mt-12 md:-mt-0 transition-transform duration-300"
                    />
                </Dialog.Trigger>
                <Dialog.Content class="w-full"
                    ><Lightbox
                        src={urlFor(item.image[0]).width(1000).url()}
                        alt={item.title}
                    /></Dialog.Content
                >
            </Dialog.Root>
        {/if}
    </div>
    <div class="p-6">
        <div class="flex items-center justify-between mb-2">
            <h3 class="text-xl font-serif font-semibold text-primary">
                {item.title}
            </h3>
        </div>
        <ul class="flex flex-wrap gap-2 mb-4">
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
        <p class="text-secondary leading-relaxed">
            {item.description}
        </p>
    </div>
</div>
