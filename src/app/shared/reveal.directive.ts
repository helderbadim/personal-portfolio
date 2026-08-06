import { AfterViewInit, Directive, ElementRef, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Directive({ selector: '[appReveal]' })
export class RevealDirective implements AfterViewInit, OnDestroy {
  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    this.element.nativeElement.classList.add('reveal');
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        this.element.nativeElement.classList.add('is-visible');
        this.observer?.disconnect();
      }
    }, { threshold: 0.12 });
    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void { this.observer?.disconnect(); }
}
