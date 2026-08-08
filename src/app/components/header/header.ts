import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, HostListener, inject, signal } from '@angular/core';
import { ThemeService } from '../../core/theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.html'
})

export class HeaderComponent implements AfterViewInit {
  /** Expose the active section, theme service, and menu state to the template */
  protected readonly activeSection = signal('work');

  //Dependency injection for the ThemeService and a signal to track the menu state
  protected readonly theme = inject(ThemeService);
  private readonly document = inject(DOCUMENT);

  /** Signal to track whether the menu is open or closed */
  protected readonly menuOpen = signal(false);

  ngAfterViewInit(): void {
    this.theme.initialize();
    this.updateActiveSection();
  }

  /** Update the active section based on the scroll position */
  @HostListener('window:scroll')
  protected updateActiveSection(): void {
    const sectionIds = ['work', 'experience', 'about'];
    const scrollPosition = window.scrollY + 160;
    let activeSection = sectionIds[0];

    for (const sectionId of sectionIds) {
      const section = document.getElementById(sectionId);
      if (section && section.offsetTop <= scrollPosition) activeSection = sectionId;
    }

    this.activeSection.set(activeSection);
  }

  /** Method to activate a section and close the menu */
  protected activateSection(section: string): void {
    this.activeSection.set(section);
    this.closeMenu();
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
    this.document.body.classList.toggle('mobile-menu-open', this.menuOpen());
  }

  @HostListener('document:keydown.escape')
  protected onEscape(): void { this.closeMenu(); }

  @HostListener('window:resize')
  protected onResize(): void {
    if (window.innerWidth > 700 && this.menuOpen()) this.closeMenu();
  }

/** Method to toggle the menu state */
  protected closeMenu(): void {
    this.menuOpen.set(false);
    this.document.body.classList.remove('mobile-menu-open');
  }
}
