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

        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
        <div>
        <h2>Test </h2>
        </div>
             <div>
             <h2 class="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
            Sosyal Medya
          </h2>
          <div class="flex justify-center gap-8">
            <a href="https://github.com" target="_blank"
               class="text-gray-900 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://tr.linkedin.com/company/g%C3%B6nen%C3%A7-bili%C5%9Fim" target="_blank"
               class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank"
               class="text-pink-600 dark:text-pink-400 hover:text-pink-800 dark:hover:text-pink-300 transition-colors">
              <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
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
