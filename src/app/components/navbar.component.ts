import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors duration-300">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <a routerLink="/" class="text-2xl font-bold text-blue-600 dark:text-blue-400">
          <div style="
          display: flex;height: 100px;">
          <img src="assets/images/logo.png" class="w-50 h-50 rounded-full object-cover mr-4">
          </div>
          </a>

          <div class="hidden md:flex space-x-8">
            <a routerLink="/" routerLinkActive="text-blue-600 dark:text-blue-400" [routerLinkActiveOptions]="{exact: true}"
               class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Home
            </a>
            <a routerLink="/hizmetler" routerLinkActive="text-blue-600 dark:text-blue-400"
               class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Hizmetler
            </a>
            <a routerLink="/projeler" routerLinkActive="text-blue-600 dark:text-blue-400"
               class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Projeler
            </a>
            <a routerLink="/referanslar" routerLinkActive="text-blue-600 dark:text-blue-400"
               class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Referanslar
            </a>
            <a routerLink="/iletisim" routerLinkActive="text-blue-600 dark:text-blue-400"
               class="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              İletişim
            </a>
          </div>

          <button
            (click)="themeService.toggleTheme()"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <span class="text-2xl">{{ themeService.isDarkMode() ? '☀️' : '🌙' }}</span>
          </button>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  themeService = inject(ThemeService);
}
