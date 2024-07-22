import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-combos-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './combos-card.component.html',
  styleUrl: './combos-card.component.scss',
})
export class CombosCardComponent {
  @Input() productName: string = '';
  @Input() prodctInfo: any;
  index = 0;

  leftIconClicked() {
    this.index = --this.index;
  }

  rightIconClicked() {
    this.index = ++this.index;
  }
}
