import { Component, ViewEncapsulation } from '@angular/core';
import { AboutComponent } from './components/about/about';
import { ContactComponent } from './components/contact/contact';
import { ExperienceComponent } from './components/experience/experience';
import { FooterComponent } from './components/footer/footer';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { SkillsComponent } from './components/skills/skills';
import { WorkComponent } from './components/work/work';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, HeroComponent, WorkComponent, ExperienceComponent, SkillsComponent, AboutComponent, ContactComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  encapsulation: ViewEncapsulation.None,
})
export class App {}
