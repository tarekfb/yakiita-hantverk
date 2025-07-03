<script lang="ts">
  import { Phone } from 'lucide-svelte'
  import { Button } from '$lib/components/ui/button'
  import { phoneNumber } from '$lib/constants'

  let mobileMenuOpen = false

  function scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    mobileMenuOpen = false
  }

  function callPhone() {
    window.location.href = `tel:${phoneNumber}`
  }
</script>

<header
  class="fixed top-0 w-full bg-background/80 backdrop-blur-sm z-50 border-b border-wood-light/20"
>
  <div class="container mx-auto px-4 py-4">
    <nav class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <h1 class="text-2xl font-serif font-bold text-primary">
          Yakiita Hantverk
        </h1>
      </div>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <Button
          variant="outline"
          on:click={() => scrollToSection('about')}
          class="text-secondary hover:text-primary transition-colors"
        >
          Om Mig
        </Button>
        <Button
          variant="outline"
          on:click={() => scrollToSection('portfolio')}
          class="transition-colors"
        >
          Portfolio
        </Button>
        <Button variant="outline" on:click={() => scrollToSection('contact')}>
          Kontakt
        </Button>
        <Button
          on:click={callPhone}
          class="inline-flex items-center justify-center"
        >
          <Phone class="size-4 mr-2" />
          Ring oss
        </Button>
      </div>

      <!-- Mobile Navigation -->
      <div class="md:hidden flex items-center space-x-0.5">
        <Button variant="ghost" size="icon" on:click={callPhone}>
          <Phone class="h-5 w-5" />
        </Button>
      </div>
    </nav>

    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
      <div class="md:hidden mt-4 pb-4 border-t border-wood-light/20">
        <div class="flex flex-col space-y-4 pt-4">
          <button
            on:click={() => scrollToSection('about')}
            class="text-left text-secondary hover:text-primary transition-colors"
          >
            Om Mig
          </button>
          <button
            on:click={() => scrollToSection('portfolio')}
            class="text-left text-secondary hover:text-primary transition-colors"
          >
            Portfolio
          </button>
          <button
            on:click={() => scrollToSection('contact')}
            class="text-left text-secondary hover:text-primary transition-colors"
          >
            Kontakt
          </button>
        </div>
      </div>
    {/if}
  </div>
</header>
