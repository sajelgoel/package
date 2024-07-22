import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  packages = [
    {
      packageName: 'Relaxing Beach Getaway',
      packageDescription:
        'Enjoy a serene escape to the beautiful sandy beaches with crystal clear waters. Perfect for unwinding and soaking up the sun.',
      packageImage:
        'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?cs=srgb&dl=pexels-asadphoto-1450353.jpg&fm=jpg',
    },
    {
      packageName: 'Adventure Mountain Hike',
      packageDescription:
        'Experience the thrill of mountain hiking with guided tours and breathtaking views. Ideal for adventure enthusiasts.',
      packageImage:
        'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?cs=srgb&dl=pexels-asadphoto-1450353.jpg&fm=jpg',
    },
    {
      packageName: 'Cultural City Tour',
      packageDescription:
        'Explore the rich cultural heritage of the city with visits to historical landmarks, museums, and local markets.',
      packageImage:
        'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?cs=srgb&dl=pexels-asadphoto-1450353.jpg&fm=jpg',
    },
    {
      packageName: 'Luxury Spa Retreat',
      packageDescription:
        'Indulge in a luxurious spa retreat with top-notch facilities and professional treatments designed to rejuvenate your body and mind.',
      packageImage:
        'https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?cs=srgb&dl=pexels-asadphoto-1450353.jpg&fm=jpg',
    },
  ];

  navigateToResults(packageInfo: any) {}
}
