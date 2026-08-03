import { Component } from '@angular/core';
import {
  LucideClock,
  LucideShieldCheck,
  LucideWrench,
  LucideTruck,
} from '@lucide/angular';
import { RevealDirective } from '../reveal-on-scroll';

type FeatureIcon = 'clock' | 'shield' | 'wrench' | 'truck';

interface Feature {
  icon: FeatureIcon;
  title: string;
  description: string;
}

interface Stat {
  value: string;
  label: string;
}
@Component({
  selector: 'app-why-us',
  imports: [LucideClock, LucideShieldCheck, LucideWrench, LucideTruck, RevealDirective],
  templateUrl: './why-us.html',
  styleUrl: './why-us.scss',
})
export class WhyUs {
    readonly stats: Stat[] = [
    { value: '200+', label: 'MASZYN' },
    { value: '98%', label: 'ZADOWOLENIA' },
    { value: '4h', label: 'CZAS REAKCJI SERWISU' },
    { value: '24/7', label: 'WSPARCIE' },
  ];

  readonly features: Feature[] = [
    {
      icon: 'clock',
      title: 'Dostawa w 24h',
      description:
        'Maszyna na placu budowy w ciągu 24 godzin od złożenia zamówienia. Działamy 7 dni w tygodniu, także w weekendy i święta.',
    },
    {
      icon: 'shield',
      title: 'Pełne ubezpieczenie',
      description:
        'Każda wynajmowana maszyna objęta jest kompleksowym ubezpieczeniem OC/AC. Nie ponosisz ryzyka uszkodzeń mechanicznych.',
    },
    {
      icon: 'wrench',
      title: 'Serwis na miejscu',
      description:
        'Nasz mobilny zespół serwisowy dociera do Ciebie w ciągu 4 godzin. Naprawy i wymiana części bez przestojów.',
    },
    {
      icon: 'truck',
      title: 'Transport i operator',
      description:
        'Zapewniamy transport maszyny oraz certyfikowanych operatorów z wieloletnim doświadczeniem na każdym typie terenu.',
    },
  ];
}
