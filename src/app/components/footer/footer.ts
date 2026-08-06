import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html'
})

export class FooterComponent {
  // Expose the current year to the template
  protected readonly year = new Date().getFullYear();
}
