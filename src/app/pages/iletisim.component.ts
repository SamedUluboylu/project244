import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-iletisim',
  standalone: true,
  imports: [FormsModule],
  template: `
    <div class="min-h-screen pt-24 pb-16 px-4 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div class="container mx-auto max-w-4xl">
        <h1 class="text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          İletişim
        </h1>
        <p class="text-xl text-center text-gray-600 dark:text-gray-300 mb-12">
          Sorularınız ve projeleriniz için bizimle iletişime geçin.
        </p>

        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
          <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
            <div class="mb-6">
              <label class="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Ad Soyad
              </label>
              <input
                type="text"
                [(ngModel)]="formData.name"
                name="name"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
                placeholder="Adınız Soyadınız">
            </div>

            <div class="mb-6">
              <label class="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                E-posta
              </label>
              <input
                type="email"
                [(ngModel)]="formData.email"
                name="email"
                required
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-colors"
                placeholder="ornek@email.com">
            </div>

            <div class="mb-6">
              <label class="block text-gray-700 dark:text-gray-300 font-semibold mb-2">
                Mesajınız
              </label>
              <textarea
                [(ngModel)]="formData.message"
                name="message"
                required
                rows="6"
                class="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition-colors resize-none"
                placeholder="Mesajınızı buraya yazın..."></textarea>
            </div>

            <button
              type="submit"
              [disabled]="!contactForm.valid"
              class="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              Gönder
            </button>
          </form>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              İletişim Bilgileri
            </h2>
            <div class="space-y-4">
              <div class="flex items-start">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Adres</h3>
                  <p class="text-gray-600 dark:text-gray-300">İstanbul, Türkiye</p>
                </div>
              </div>

              <div class="flex items-start">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-1">E-posta</h3>
                  <a href="mailto:info&#64;gonencbilisim.com" class="text-blue-600 dark:text-blue-400 hover:underline">
                    info&#64;gonencbilisim.com
                  </a>
                </div>
              </div>

              <div class="flex items-start">
                <svg class="w-6 h-6 text-blue-600 dark:text-blue-400 mt-1 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div>
                  <h3 class="font-semibold text-gray-900 dark:text-white mb-1">Telefon</h3>
                  <a href="tel:+902121234567" class="text-blue-600 dark:text-blue-400 hover:underline">
                    +90 (212) 123 45 67
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
            <h2 class="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Sosyal Medya
            </h2>
            <div class="space-y-4">
              <a href="https://tr.linkedin.com/company/g%C3%B6nen%C3%A7-bili%C5%9Fim" target="_blank"
                 class="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group">
                <svg class="w-8 h-8 text-blue-600 dark:text-blue-400 mr-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
                <span class="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400">LinkedIn</span>
              </a>

              <a href="https://instagram.com/gonencbilisim" target="_blank"
                 class="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group">
                <svg class="w-8 h-8 text-pink-600 dark:text-pink-400 mr-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span class="text-gray-900 dark:text-white font-medium group-hover:text-pink-600 dark:group-hover:text-pink-400">Instagram</span>
              </a>

              <a href="https://twitter.com/gonencbilisim" target="_blank"
                 class="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group">
                <svg class="w-8 h-8 text-gray-900 dark:text-gray-300 mr-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <span class="text-gray-900 dark:text-white font-medium group-hover:text-gray-700 dark:group-hover:text-gray-400">Twitter</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `
})
export class IletisimComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  onSubmit() {
    console.log('Form submitted:', this.formData);
    alert('Mesajınız alındı! En kısa sürede size dönüş yapacağız.');
    this.formData = { name: '', email: '', message: '' };
  }
}
