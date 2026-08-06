import { Component } from '@angular/core';
import { SKILL_GROUPS } from '../../data/portfolio.data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-skills',
  imports: [RevealDirective],
  templateUrl: './skills.html'
})

export class SkillsComponent {
  /** Expose the SKILL_GROUPS data to the template*/
  protected readonly skillGroups = SKILL_GROUPS;
}
