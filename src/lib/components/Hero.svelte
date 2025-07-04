<script lang="ts">
  import { ChevronDown, Phone } from 'lucide-svelte'
  import { Button } from './ui/button'
  import { phoneNumber } from '$lib/constants'

  function scrollToAbout() {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  function callPhone() {
    window.location.href = `tel:${phoneNumber}`
  }
</script>

<section
  class="min-h-screen flex items-center justify-center bg-gradient-to-br from-accent/20 to-wood-light/10"
>
  <div class="container mx-auto px-4 text-center">
    <h1 class="text-5xl md:text-7xl font-serif font-bold text-primary mb-6">
      Yakiita Hantverk
    </h1>
    <p class="text-xl md:text-2xl text-secondary max-w-2xl mx-auto">
      Traditionellt hantverk möter modern design. Skapande av unika träföremål
      med passion och precision.
    </p>
    <p class="text-lg text-secondary mb-4 mt-8">Snickare & Hantverkare</p>

    <div class="flex justify-center">
      <Button
        on:click={callPhone}
        size="lg"
        class="flex items-center self-center justify-center transition-colors mb-6 mt-8"
      >
        <Phone class="h-5 w-5 mr-2" />
        Ring mig
      </Button>
    </div>

    <button
      on:click={scrollToAbout}
      class="inline-flex items-center justify-center p-3 rounded-full bg-secondary/10 hover:bg-secondary/20 transition-colors group"
    >
      <ChevronDown
        class="h-6 w-6 text-secondary group-hover:translate-y-1 transition-transform"
      />
    </button>
  </div>
</section>
