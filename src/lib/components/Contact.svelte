<script lang="ts">
  import { Mail, Phone, MapPin, Clock } from 'lucide-svelte'
  import { Button } from '$lib/components/ui/button'
  import { Input } from '$lib/components/ui/input'
  import { Textarea } from '$lib/components/ui/textarea'
  import { city, country, email } from '$lib/constants'

  let formData = {
    name: '',
    email: '',
    phone: '',
    message: '',
  }

  let loading = false
  let success = false

  async function handleSubmit() {
    loading = true

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    success = true
    loading = false

    // Reset form
    setTimeout(() => {
      success = false
      formData = { name: '', email: '', phone: '', message: '' }
    }, 3000)
  }
</script>

<section id="contact" class="py-20 bg-background">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-4xl md:text-5xl font-serif font-bold text-primary mb-4">
          Kontakt
        </h2>
        <p class="text-lg text-secondary max-w-2xl mx-auto">
          Har du ett projekt i åtanke? Kontakta mig så diskuterar vi hur vi kan
          förverkliga din vision.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <div class="space-y-8">
          <div class="space-y-6">
            <div class="flex items-center space-x-4">
              <div class="p-3 bg-secondary/10 rounded-lg">
                <Mail class="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 class="font-semibold text-primary">E-post</h3>
                <a href="mailto:{email}" class="text-secondary">{email}</a>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="p-3 bg-secondary/10 rounded-lg">
                <Phone class="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 class="font-semibold text-primary">Telefon</h3>
                <a href="tel:+46704215296" class="text-secondary"
                  >+46 70 421 52 96</a
                >
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="p-3 bg-secondary/10 rounded-lg">
                <MapPin class="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 class="font-semibold text-primary">Plats</h3>
                <p class="text-secondary">{city}, {country}</p>
              </div>
            </div>

            <div class="flex items-center space-x-4">
              <div class="p-3 bg-secondary/10 rounded-lg">
                <Clock class="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 class="font-semibold text-primary">Öppettider</h3>
                <p class="text-secondary">Måndag - Fredag: 08:00 - 17:00</p>
              </div>
            </div>
          </div>

          <div class="p-6 bg-accent/20 rounded-lg">
            <h3 class="font-serif font-semibold text-primary mb-3">
              Varför välja Yakiita Hantverk?
            </h3>
            <ul class="space-y-2 text-secondary">
              <li>• Över 15 års erfarenhet</li>
              <li>• Skräddarsydda lösningar</li>
              <li>• Hållbara material</li>
              <li>• Traditionella tekniker</li>
              <li>• Modern design</li>
            </ul>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="bg-accent/10 p-8 rounded-lg">
          <h3 class="text-2xl font-serif font-semibold text-primary mb-6">
            Skicka ett meddelande
          </h3>

          {#if success}
            <div
              class="p-4 bg-green-100 border border-green-200 rounded-lg mb-6"
            >
              <p class="text-green-800">
                Tack för ditt meddelande! Jag återkommer inom 24 timmar.
              </p>
            </div>
          {/if}

          <form on:submit|preventDefault={handleSubmit} class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  for="name"
                  class="block text-sm font-medium text-primary mb-2"
                >
                  Namn *
                </label>
                <Input
                  id="name"
                  bind:value={formData.name}
                  placeholder="Ditt namn"
                  required
                  class="bg-background"
                />
              </div>
              <div>
                <label
                  for="phone"
                  class="block text-sm font-medium text-primary mb-2"
                >
                  Telefon
                </label>
                <Input
                  id="phone"
                  bind:value={formData.phone}
                  placeholder="Ditt telefonnummer"
                  class="bg-background"
                />
              </div>
            </div>

            <div>
              <label
                for="email"
                class="block text-sm font-medium text-primary mb-2"
              >
                E-post *
              </label>
              <Input
                id="email"
                type="email"
                bind:value={formData.email}
                placeholder="din@email.se"
                required
                class="bg-background"
              />
            </div>

            <div>
              <label
                for="message"
                class="block text-sm font-medium text-primary mb-2"
              >
                Meddelande *
              </label>
              <Textarea
                id="message"
                bind:value={formData.message}
                placeholder="Berätta om ditt projekt..."
                rows={5}
                required
                class="bg-background"
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              class="w-full bg-secondary hover:bg-primary text-white"
            >
              {loading ? 'Skickar...' : 'Skicka Meddelande'}
            </Button>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>
