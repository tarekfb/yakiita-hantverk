<script lang="ts">
  import Header from '$lib/components/Header.svelte'
  import Hero from '$lib/components/Hero.svelte'
  import About from '$lib/components/About.svelte'
  import Portfolio from '$lib/components/Portfolio.svelte'
  import Contact from '$lib/components/Contact.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { city } from '$lib/constants.js'

  let { data } = $props()
</script>

<svelte:head>
  <title>Yakiita Hantverk - Traditionellt Trähantverk i {city}</title>
  <meta
    name="description"
    content="Yakiita Hantverk erbjuder skräddarsydda möbler och trähantverk i {city}. Traditionella tekniker möter modern design för unika träföremål."
  />
  <meta
    name="keywords"
    content="snickare, trähantverk, möbler, {city}, skräddarsydda möbler, köksinredning"
  />
</svelte:head>

<Header />
<main>
  <Hero />
  <About />
  <Portfolio items={data.portfolioItems} types={data.types} />
  <Contact />
</main>
<Footer />
