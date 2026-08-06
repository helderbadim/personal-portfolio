import { Component } from '@angular/core';
import { EXPERIENCE } from '../../data/portfolio.data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-experience',
  imports: [RevealDirective],
  templateUrl: './experience.html',
})

export class ExperienceComponent {
  // Expose the EXPERIENCE data to the template
  protected readonly experiences = EXPERIENCE;
}
