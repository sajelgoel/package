import { Component } from '@angular/core';
import { CombosComponent } from '../combos/combos.component';
import { CommonModule } from '@angular/common';
import { CustomisedComponent } from '../customised/customised.component';
import { SearchFormComponent } from '../search-form/search-form.component';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    CombosComponent,
    CommonModule,
    CustomisedComponent,
    SearchFormComponent,
  ],
  templateUrl: './results.component.html',
  styleUrl: './results.component.scss',
})
export class ResultsComponent {
  tabSelected = 'combos';

  changeTab(tabName: string) {
    this.tabSelected = tabName;
  }
}
