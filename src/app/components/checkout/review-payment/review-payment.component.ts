import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-review-payment',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './review-payment.component.html',
  styleUrl: './review-payment.component.scss',
})
export class ReviewPaymentComponent {
  constructor(private router: Router, private cartService: CartService) {}

  goToConfirmation() {
    this.cartService.clearCart();
    this.router.navigateByUrl('checkout/confirmation');
  }
}
