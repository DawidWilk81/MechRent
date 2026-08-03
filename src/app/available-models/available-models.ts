import { Component, computed, signal } from '@angular/core';
import { RevealDirective } from '../reveal-on-scroll';

type CategoryKey = 'wszystkie' | 'koparki' | 'dzwigi' | 'ladowarki' | 'walce';

interface EquipmentStat {
  label: string;
  value: string;
}

interface Equipment {
  name: string;
  image: string;
  category: Exclude<CategoryKey, 'wszystkie'>;
  categoryLabel: string;
  available: boolean;
  rating: number;
  reviews: number;
  stats: [EquipmentStat, EquipmentStat, EquipmentStat];
  pricePerDay: string;
  pricePerWeek: string;
  link: string;
}

interface Filter {
  key: CategoryKey;
  label: string;
}

@Component({
  selector: 'app-available-models',
  imports: [RevealDirective],
  templateUrl: './available-models.html',
  styleUrl: './available-models.scss',
})
export class AvailableModels {
  readonly filters: Filter[] = [
    { key: 'wszystkie', label: 'WSZYSTKIE' },
    { key: 'koparki', label: 'KOPARKI' },
    { key: 'dzwigi', label: 'DŹWIGI' },
    { key: 'ladowarki', label: 'ŁADOWARKI' },
    { key: 'walce', label: 'WALCE' },
  ];

  readonly activeFilter = signal<CategoryKey>('wszystkie');

  readonly equipment: Equipment[] = [
    {
      name: 'Komatsu PC210LC-11',
      image: '/komatsu_pcl.jpg',
      category: 'koparki',
      categoryLabel: 'KOPARKI',
      available: true,
      rating: 4.9,
      reviews: 48,
      stats: [
        { label: 'MASA', value: '21 t' },
        { label: 'MOC', value: '122 kW' },
        { label: 'ZASIĘG', value: '9,8 m' },
      ],
      pricePerDay: '1 200 zł',
      pricePerWeek: '6 800 zł',
      link: '#rezerwacja',
    },
    // =============== //
    {
      name: 'Liebherr LTM 1070-4.2',
      image: '/Liebherr_LTM.jpg',
      category: 'dzwigi',
      categoryLabel: 'DŹWIGI',
      available: true,
      rating: 4.8,
      reviews: 31,
      stats: [
        { label: 'MASA', value: '36 t' },
        { label: 'MOC', value: '270 kW' },
        { label: 'ZASIĘG', value: '44 m' },
      ],
      pricePerDay: '3 800 zł',
      pricePerWeek: '21 000 zł',
      link: '#rezerwacja',
    },
    // =============== //
    {
      name: 'Caterpillar 950 GC',
      image: '/Caterpillar_GC.jpg',
      category: 'ladowarki',
      categoryLabel: 'ŁADOWARKI',
      available: true,
      rating: 4.7,
      reviews: 62,
      stats: [
        { label: 'MASA', value: '16,5 t' },
        { label: 'MOC', value: '147 kW' },
        { label: 'ZASIĘG', value: '—' },
      ],
      pricePerDay: '890 zł',
      pricePerWeek: '4 900 zł',
      link: '#rezerwacja',
    },
    // =============== //
    {
      name: 'Volvo EC220E',
      image: '/VOLVO_EC220E.jpg',
      category: 'koparki',
      categoryLabel: 'KOPARKI',
      available: true,
      rating: 4.9,
      reviews: 27,
      stats: [
        { label: 'MASA', value: '22,5 t' },
        { label: 'MOC', value: '129 kW' },
        { label: 'ZASIĘG', value: '10,2 m' },
      ],
      pricePerDay: '1 350 zł',
      pricePerWeek: '7 500 zł',
      link: '#rezerwacja',
    },
    // =============== //
    {
      name: 'Liebherr LTM 1100-5.2',
      image: '/Liebherr_LTM_1100.jpg',
      category: 'dzwigi',
      categoryLabel: 'DŹWIGI',
      available: true,
      rating: 5,
      reviews: 14,
      stats: [
        { label: 'MASA', value: '60 t' },
        { label: 'MOC', value: '390 kW' },
        { label: 'ZASIĘG', value: '58 m' },
      ],
      pricePerDay: '5 500 zł',
      pricePerWeek: '30 000 zł',
      link: '#rezerwacja',
    },
    // =============== //
    {
      name: 'Dynapac CA2500',
      image: '/Dynapac_road_roller.JPG',
      category: 'walce',
      categoryLabel: 'WALCE',
      available: true,
      rating: 4.6,
      reviews: 36,
      stats: [
        { label: 'MASA', value: '8,7 t' },
        { label: 'MOC', value: '90 kW' },
        { label: 'ZASIĘG', value: '—' },
      ],
      pricePerDay: '3 800 zł',
      pricePerWeek: '21 000 zł',
      link: '#rezerwacja',
    },
  ];

  readonly visibleEquipment = computed(() => {
    const filter = this.activeFilter();
    return filter === 'wszystkie'
      ? this.equipment
      : this.equipment.filter((item) => item.category === filter);
  });

  setFilter(filter: CategoryKey): void {
    this.activeFilter.set(filter);
  }
}
