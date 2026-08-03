import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LucidePhone, LucideMail, LucideMapPin, LucideSend } from '@lucide/angular';
import { RevealDirective } from '../reveal-on-scroll';

type ContactIcon = 'phone' | 'mail' | 'pin';

interface ContactMethod {
  icon: ContactIcon;
  label: string;
  value: string;
  sub: string;
}

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, LucidePhone, LucideMail, LucideMapPin, LucideSend, RevealDirective],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = inject(FormBuilder);

  readonly machineTypes: string[] = [
    'Koparka',
    'Dźwig',
    'Ładowarka',
    'Walec',
    'Inne',
  ];

  readonly contactMethods: ContactMethod[] = [
    {
      icon: 'phone',
      label: 'TELEFON',
      value: '+48 123 456 789',
      sub: 'Czynny: pon-sob 7:00-20:00',
    },
    {
      icon: 'mail',
      label: 'E-MAIL',
      value: 'biuro@mechrent.pl',
      sub: 'Odpowiedź w ciągu 2h',
    },
    {
      icon: 'pin',
      label: 'SIEDZIBA',
      value: 'ul. Przemysłowa 15, Warszawa',
      sub: 'Składowisko maszyn czynne 24/7',
    },
  ];

  readonly form = this.fb.group({
    fullName: ['', Validators.required],
    company: [''],
    phone: ['', Validators.required],
    email: ['', Validators.email],
    machineType: ['', Validators.required],
    startDate: [''],
    duration: [''],
    notes: [''],
  });

  submitted = false;

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    // TODO: podpiąć realny endpoint (np. serwis wysyłający na /api/contact)
    console.log('Zapytanie ofertowe:', this.form.value);
    this.form.reset();
    this.submitted = false;
  }

  isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!control && control.invalid && (control.touched || this.submitted);
  }
}