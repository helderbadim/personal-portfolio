import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  it('creates the portfolio', async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    expect(TestBed.createComponent(App).componentInstance).toBeTruthy();
  });

  it('renders the owner name', async () => {
    await TestBed.configureTestingModule({ imports: [App] }).compileComponents();
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    expect((fixture.nativeElement as HTMLElement).textContent).toContain('Hélder Badim');
  });
});
