import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  // Dependency injection for the DOCUMENT and PLATFORM_ID tokens
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);

  /** Signal to track whether the dark theme is active */
  readonly isDark = signal(false);

  /** Initialize the theme based on saved preferences or system settings */
  initialize(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const saved = localStorage.getItem('theme');
    this.setTheme(saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches);
  }

  /** Toggle the theme between dark and light */
  toggle(): void {
    this.setTheme(!this.isDark());
  }

  /** Set the theme to the specified value */
  private setTheme(dark: boolean): void {
    this.isDark.set(dark);
    this.document.documentElement.dataset['theme'] = dark ? 'dark' : 'light';
    if (isPlatformBrowser(this.platformId)) localStorage.setItem('theme', dark ? 'dark' : 'light');
  }
}
