import {
  AfterViewInit, Component, ElementRef, NgZone, OnDestroy, ViewChild, inject, PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Footer } from '../footer/footer';
import { Models } from '../models/models';
import { AvailableModels } from '../available-models/available-models';
import { WhyUs } from '../why-us/why-us';
import { Contact } from '../contact/contact';
import { Navigation } from '../navigation/navigation';

@Component({
  selector: 'app-home-layout',
  imports: [Navigation, Models, AvailableModels, WhyUs, Contact, Footer],
  templateUrl: './home-layout.html',
  styleUrl: './home-layout.scss',
})
export class HomeLayout implements AfterViewInit, OnDestroy {
  @ViewChild('hero', { static: true }) heroSection!: ElementRef<HTMLElement>;
  @ViewChild('heroMedia', { static: true }) heroMedia!: ElementRef<HTMLElement>;

  private readonly ngZone = inject(NgZone);
  private readonly platformId = inject(PLATFORM_ID);

  private readonly parallaxFactor = 0.35;

  private intersectionObserver?: IntersectionObserver;
  private rafId: number | null = null;

  ngAfterViewInit(): void {
    // SSR / prerender
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (reducedMotion) return;
  }

  ngOnDestroy(): void {
    this.intersectionObserver?.disconnect();
  }
}