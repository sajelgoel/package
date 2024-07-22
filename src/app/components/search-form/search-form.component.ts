import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent {
  packageForm = new FormGroup({
    packageName: new FormControl(''),
    fromPlace: new FormControl(''),
    fromDate: new FormControl(''),
    toDate: new FormControl(''),
    numberOfTraveller: new FormControl('2'),
  });

  constructor(private router: Router) {}

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.packageForm.value);
    this.router.navigateByUrl('results');
  }
}
