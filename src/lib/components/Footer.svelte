<script>
  import { city, country, email, phoneNumber, foundingYear } from '$lib/constants'
  import { Mail, MapPin, Phone } from 'lucide-svelte';
</script>

<footer class="bg-primary text-accent py-12">
  <div class="container mx-auto px-4">
    <div class="grid md:grid-cols-3 gap-8">
      <div>
        <h3 class="text-2xl font-serif font-bold mb-4">Yakiita Hantverk</h3>
        <p class="text-accent/80 mb-4">
          Traditionellt hantverk med modern touch. Skapande av unika träföremål
          sedan {foundingYear}.
        </p>
      </div>

      <div>
        <h4 class="font-semibold mb-4">Tjänster</h4>
        <ul class="space-y-2 text-accent/80">
          <li>Skräddarsydda möbler</li>
          <li>Köksinredning</li>
          <li>Restaurering</li>
          <li>Renovering</li>
          <li>Utomhusmöbler</li>
        </ul>
      </div>

      <div>
        <h4 class="font-semibold mb-4">Kontakt</h4>
        <div class="space-y-2 text-accent/80  *:flex *:gap-x-2 *:items-center">
          <div>
            <Phone class="size-4 text-accent/80 shrink-0" />
            <a href="tel:{phoneNumber}">{phoneNumber}</a>
          </div>
          <div>
            <Mail class="size-4 text-accent/80 shrink-0" />
            <a href="mailto:{email}">{email}</a>
          </div>
          <div>
            <MapPin class="size-4 text-accent/80 shrink-0" />
            <p>{city}, {country}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="border-t border-accent/20 mt-8 pt-8 text-center">
      <p class="flex items-center justify-center space-x-2 text-accent/60">
        <span>© 2025 Yakiita Hantverk</span>
      </p>
    </div>
  </div>
</footer>
