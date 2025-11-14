import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gray-900 dark:bg-black text-white py-8 mt-16 transition-colors duration-300">
      <div class="container mx-auto px-4 text-center">
        <p class="text-gray-400">
          © 2025 DevTeam Software Team - All rights reserved.
        </p>
      </div>
    </footer>
  `
})
export class FooterComponent {}
