import { Component, HostListener, inject, HostBinding } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { LucidePhone } from '@lucide/angular';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [LucidePhone],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss',
})
export class Navigation {
  @HostBinding('class.scrolled') scrolled = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.scrolled = window.scrollY > 12;
  }

  private readonly document = inject(DOCUMENT);

  readonly navLinks: NavLink[] = [
    { label: 'STRONA GŁÓWNA', href: '#' },
    { label: 'MASZYNY', href: '#maszyny' },
    { label: 'CENNIK', href: '#cennik' },
    { label: 'O NAS', href: '#o-nas' },
    { label: 'KONTAKT', href: '#kontakt' },
  ];

  menuOpen = false;

  toggleMenu(): void {
    this.setMenuOpen(!this.menuOpen);
  }

  closeMenu(): void {
    this.setMenuOpen(false);
  }

  private setMenuOpen(open: boolean): void {
    this.menuOpen = open;
    // blokada scrolla tła, gdy menu mobilne jest otwarte
    this.document.body.classList.toggle('no-scroll', open);
  }

  @HostListener('window:keydown.escape')
  onEscape(): void {
    this.closeMenu();
  }

  @HostListener('window:resize')
  onResize(): void {
    if (window.innerWidth > 922 && this.menuOpen) {
      this.closeMenu();
    }
  }
}