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

  /** Signal to track whether the menu is open or closed */
  protected readonly menuOpen = signal(false);

  ngAfterViewInit(): void {
    this.theme.initialize();
    this.updateActiveSection();
  }

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
/** Method to toggle the menu state */
  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
