import { Component } from '@angular/core';
import { RevealDirective } from '../reveal-on-scroll';

interface MachineCategory {
  title: string;
  description: string;
  image: string;
  count: number;
  badge?: string;
  link: string;
}

@Component({
  selector: 'app-models',
  imports: [RevealDirective],
  templateUrl: './models.html',
  styleUrl: './models.scss',
})
export class Models {
    readonly categories: MachineCategory[] = [
    {
      title: 'Koparki',
      description:
        'Koparki gąsienicowe i kołowe od 1,5 do 50 ton. Idealne do wykopów, rozbiórki i prac ziemnych.',
      image: 'Koparka.jpg',
      count: 42,
      badge: 'BESTSELLER',
      link: '#koparki',
    },
    {
      title: 'Dźwigi',
      description:
        'Dźwigi mobilne i wieżowe o udźwigu do 500 ton. Obsługa z certyfikowanym operatorem.',
      image: 'dzwigi.jpg',
      count: 18,
      link: '#dzwigi',
    },
    {
      title: 'Spycharki',
      description:
        'Spycharki gąsienicowe do prac niwelacyjnych i przemieszczania mas ziemnych na dużą skalę.',
      image: 'Walec.jpg',
      count: 35,
      link: '#spycharki',
    },
    {
      title: 'Ładowarki',
      description:
        'Ładowarki teleskopowe i kołowe do transportu materiałów i załadunku na placu budowy.',
      image: 'Ładowarki.jpg',
      count: 27,
      badge: 'NOWOŚĆ',
      link: '#ladowarki',
    },
  ];
}
