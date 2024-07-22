import { Component } from '@angular/core';
import { CombosComponent } from '../combos/combos.component';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CombosComponent],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
})
export class ResultsComponent {}
