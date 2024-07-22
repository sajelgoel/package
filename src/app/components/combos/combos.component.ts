import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CombosCardComponent } from '../combos-card/combos-card.component';

@Component({
  selector: 'app-combos',
  standalone: true,
  imports: [CommonModule, CombosCardComponent],
  templateUrl: './combos.component.html',
  styleUrl: './combos.component.scss',
})
export class CombosComponent {
  packageCombos = [
    {
      packageName: 'Beach Adventure Combo',
      priceCombo: 800,
      flights: [
        {
          airline: 'Airway Express',
          departure: '2024-08-01',
          arrival: '2024-08-01',
          price: 350.0,
        },
        {
          airline: 'Sunshine Airlines',
          departure: '2024-08-02',
          arrival: '2024-08-02',
          price: 300.0,
        },
      ],
      hotels: [
        {
          name: 'Sunny Beach Resort',
          checkIn: '2024-08-01',
          checkOut: '2024-08-07',
          price: 1200.0,
        },
        {
          name: 'Oceanview Hotel',
          checkIn: '2024-08-01',
          checkOut: '2024-08-07',
          price: 1000.0,
        },
      ],
      cars: [
        {
          rentalCompany: 'Fast Wheels',
          pickUp: '2024-08-01',
          dropOff: '2024-08-07',
          price: 250.0,
        },
        {
          rentalCompany: 'Beach Rentals',
          pickUp: '2024-08-01',
          dropOff: '2024-08-07',
          price: 220.0,
        },
      ],
      activities: [
        {
          name: 'Snorkeling',
          price: 80.0,
        },
        {
          name: 'Sunset Cruise',
          price: 150.0,
        },
      ],
    },
    {
      packageName: 'Mountain Expedition Combo',
      priceCombo: 800,

      flights: [
        {
          airline: 'Sky High Airlines',
          departure: '2024-09-15',
          arrival: '2024-09-15',
          price: 400.0,
        },
        {
          airline: 'Mountain Air',
          departure: '2024-09-16',
          arrival: '2024-09-16',
          price: 420.0,
        },
      ],
      hotels: [
        {
          name: 'Highland Lodge',
          checkIn: '2024-09-15',
          checkOut: '2024-09-22',
          price: 800.0,
        },
        {
          name: 'Mountain Retreat',
          checkIn: '2024-09-15',
          checkOut: '2024-09-22',
          price: 750.0,
        },
      ],
      cars: [
        {
          rentalCompany: 'Mountain Motors',
          pickUp: '2024-09-15',
          dropOff: '2024-09-22',
          price: 300.0,
        },
        {
          rentalCompany: 'Peak Rentals',
          pickUp: '2024-09-15',
          dropOff: '2024-09-22',
          price: 280.0,
        },
      ],
      activities: [
        {
          name: 'Guided Hike',
          price: 100.0,
        },
        {
          name: 'Rock Climbing',
          price: 120.0,
        },
      ],
    },
    {
      packageName: 'City Explorer Combo',
      priceCombo: 800,

      flights: [
        {
          airline: 'CityLink',
          departure: '2024-10-10',
          arrival: '2024-10-10',
          price: 200.0,
        },
        {
          airline: 'Metro Airways',
          departure: '2024-10-11',
          arrival: '2024-10-11',
          price: 220.0,
        },
      ],
      hotels: [
        {
          name: 'Urban Stay Hotel',
          checkIn: '2024-10-10',
          checkOut: '2024-10-14',
          price: 600.0,
        },
        {
          name: 'City Center Inn',
          checkIn: '2024-10-10',
          checkOut: '2024-10-14',
          price: 650.0,
        },
      ],
      cars: [
        {
          rentalCompany: 'City Wheels',
          pickUp: '2024-10-10',
          dropOff: '2024-10-14',
          price: 150.0,
        },
        {
          rentalCompany: 'Metro Rentals',
          pickUp: '2024-10-10',
          dropOff: '2024-10-14',
          price: 140.0,
        },
      ],
      activities: [
        {
          name: 'Museum Tour',
          price: 50.0,
        },
        {
          name: 'Food Tasting Tour',
          price: 70.0,
        },
      ],
    },
  ];
}
