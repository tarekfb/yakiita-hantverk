<script lang="ts">
  import { Mail, Phone, MapPin } from 'lucide-svelte'
  import { city, country, email, phoneNumber } from '$lib/constants'

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
        <div class="space-y-8  flex flex-col justify-between">
            <a href="mailto:{email}" class="flex items-center space-x-4 transition-all duration-300 md:hover:text-secondary hover:scale-105">
              <div class="p-3 bg-secondary/10 rounded-lg">
                <Mail class="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 class="font-semibold text-primary">E-post</h3>
                <p class="text-secondary">{email}</p>
              </div>
            </a>

            <a href="tel:{phoneNumber}" class="flex items-center space-x-4 transition-all duration-300 md:hover:text-secondary hover:scale-105">
              <div class="p-3 bg-secondary/10 rounded-lg">
                <Phone class="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 class="font-semibold text-primary">Telefon</h3>
                <p class="text-secondary">{phoneNumber}</p>
              </div>
            </a>

            <div class="flex items-center space-x-4">
              <div class="p-3 bg-secondary/10 rounded-lg">
                <MapPin class="h-6 w-6 text-secondary" />
              </div>
              <div>
                <h3 class="font-semibold text-primary">Plats</h3>
                <p class="text-secondary">{city}, {country}</p>
              </div>
            </div>

        </div>
        <div class="p-6 bg-accent/20 rounded-lg">
          <h3 class="font-serif font-semibold text-primary mb-3">
            Varför välja Yakiita Hantverk?
          </h3>
          <ul class="space-y-2 text-secondary">
            <li>• Skräddarsydda lösningar</li>
            <li>• Hållbara material</li>
            <li>• Traditionella tekniker</li>
            <li>• Modern design</li>
            <li>• Nöjda kunder</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
