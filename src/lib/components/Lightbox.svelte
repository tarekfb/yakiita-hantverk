<script lang="ts">
    interface Props {
        src: string;
        alt: string;
    }

    let { src, alt}: Props = $props();
</script>

<div class="w-full h-full">
    <img
        {src}
        {alt}
        class="max-h-[85vh] max-w-full w-auto mx-auto object-contain rounded-lg "
    />
    <p class="text-center text-muted-foreground p-2">{alt}</p>
</div>