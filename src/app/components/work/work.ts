import { Component, ElementRef, HostListener, OnDestroy, signal, ViewChild } from '@angular/core';
import { PROJECTS, Project } from '../../data/portfolio.data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-work',
  imports: [RevealDirective],
  templateUrl: './work.html'
})
export class WorkComponent implements OnDestroy {
  /** ViewChild references for the close button and project dialog */
  @ViewChild('closeButton') private closeButton?: ElementRef<HTMLButtonElement>;

  /** ViewChild reference for the project dialog */
  @ViewChild('projectDialog') private projectDialog?: ElementRef<HTMLElement>;

/** Expose the PROJECTS data to the template */
  protected readonly projects = PROJECTS;
  /** Signal to track the currently selected project */
  protected readonly selectedProject = signal<Project | null>(null);

  /** Track the previously focused element before opening the project dialog */
  private previousFocus?: HTMLElement;

  /** Open the project dialog and focus the close button */
  protected openProject(project: Project): void {
    this.previousFocus =
      document.activeElement instanceof HTMLElement ? document.activeElement : undefined;
    document.body.classList.add('project-dialog-open');
    this.selectedProject.set(project);
    setTimeout(() => this.closeButton?.nativeElement.focus());
  }

  /** Close the project dialog and return focus to the previously focused element */
  protected closeProject(): void {
    document.body.classList.remove('project-dialog-open');
    this.selectedProject.set(null);
    setTimeout(() => this.previousFocus?.focus());
  }

  ngOnDestroy(): void {
    document.body.classList.remove('project-dialog-open');
  }

  /** Close the project dialog when the escape key is pressed */
  @HostListener('document:keydown.escape')
  protected closeProjectOnEscape(): void {
    if (this.selectedProject()) this.closeProject();
  }

  /** Trap focus within the project dialog */
  protected trapDialogFocus(event: Event): void {
    if (!(event instanceof KeyboardEvent)) return;

    const dialog = this.projectDialog?.nativeElement;
    if (!dialog) return;

    const focusable = Array.from(
      dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    );
    const first = focusable[0];
    const last = focusable.at(-1);
    if (!first || !last) return;

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }
}
