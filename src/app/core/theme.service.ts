import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  readonly isDark = signal(false);

  initialize(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    const saved = localStorage.getItem('theme');
    this.setTheme(saved ? saved === 'dark' : matchMedia('(prefers-color-scheme: dark)').matches);
  }

  toggle(): void {
    this.setTheme(!this.isDark());
  }

  private setTheme(dark: boolean): void {
    this.isDark.set(dark);
    this.document.documentElement.dataset['theme'] = dark ? 'dark' : 'light';
    if (isPlatformBrowser(this.platformId)) localStorage.setItem('theme', dark ? 'dark' : 'light');
  }
}
