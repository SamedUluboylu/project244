import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  isDarkMode = signal(false);

  constructor() {
    const saved = localStorage.getItem('darkMode');
    if (saved) {
      this.isDarkMode.set(saved === 'true');
      this.applyTheme();
    }
  }

  toggleTheme() {
    this.isDarkMode.update(value => !value);
    this.applyTheme();
    localStorage.setItem('darkMode', this.isDarkMode().toString());
  }

  private applyTheme() {
    if (this.isDarkMode()) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
