import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full',
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./components/search/search.component').then(
        (x) => x.SearchComponent
      ),
  },
  {
    path: 'results',
    loadComponent: () =>
      import('./components/results/results.component').then(
        (x) => x.ResultsComponent
      ),
  },
  {
    path: 'checkout',
    children: [
      {
        path: 'confirmation',
        loadComponent: () =>
          import(
            './components/checkout/confirmation/confirmation.component'
          ).then((x) => x.ConfirmationComponent),
      },
      {
        path: 'review',
        loadComponent: () =>
          import(
            './components/checkout/review-payment/review-payment.component'
          ).then((x) => x.ReviewPaymentComponent),
      },
    ],
  },
];
