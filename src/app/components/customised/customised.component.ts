import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomisedSectionComponent } from '../customised-section/customised-section.component';

@Component({
  selector: 'app-customised',
  standalone: true,
  imports: [CustomisedSectionComponent, CommonModule],
  templateUrl: './customised.component.html',
  styleUrl: './customised.component.scss',
})
export class CustomisedComponent {
  packages = {
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
        name: 'Snorkeling',
        price: 80.0,
      },
      {
        name: 'Sunset Cruise',
        price: 150.0,
      },
      {
        name: 'Guided Hike',
        price: 100.0,
      },
      {
        name: 'Rock Climbing',
        price: 120.0,
      },
      {
        name: 'Museum Tour',
        price: 50.0,
      },
      {
        name: 'Food Tasting Tour',
        price: 70.0,
      },
    ],
  };
}
