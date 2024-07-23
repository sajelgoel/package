import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customised-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customised-section.component.html',
  styleUrl: './customised-section.component.scss',
})
export class CustomisedSectionComponent {
  @Input() section: any;
  @Input() productName: string = '';
  showSideIcon = false;
}
