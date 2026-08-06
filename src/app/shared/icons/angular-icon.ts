import { Component } from '@angular/core';

@Component({
  selector: 'app-angular-icon',
  standalone: true,
  template: `
    <svg
      aria-hidden="true"
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16 2 3 7l2 17 11 6 11-6 2-17z" fill="#DD0031" />
      <path d="M16 2v28l11-6 2-17z" fill="#C3002F" />
      <path d="m16 5.094-8.127 18.27h3.03l1.634-4.088h6.898l1.634 4.088h3.03zm2.374 11.662h-4.748L16 11.03z" fill="#fff" />
    </svg>
  `,
})
export class AngularIconComponent {}
