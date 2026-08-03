import { Component } from '@angular/core';

interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly year = new Date().getFullYear();

  readonly linkGroups: FooterLinkGroup[] = [
    {
      title: 'Oferta',
      links: [
        { label: 'Koparki', href: '#maszyny' },
        { label: 'Dźwigi', href: '#maszyny' },
        { label: 'Ładowarki', href: '#maszyny' },
        { label: 'Walce', href: '#maszyny' },
      ],
    },
    {
      title: 'Firma',
      links: [
        { label: 'O nas', href: '#' },
        { label: 'Cennik', href: '#cennik' },
        { label: 'Kontakt', href: '#kontakt' },
        { label: 'Polityka prywatności', href: '#' },
      ],
    },
  ];
}