import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItem: any = [1, 2, 3];
  cartItem$ = new BehaviorSubject(this.cartItem);

  constructor(private router: Router) {}

  addToCart(item: any) {
    this.cartItem.push(item);
  }

  removeFromCart(item: any) {
    this.cartItem = this.cartItem.filter(
      (cartitem: any) => cartitem.id !== item.id
    );
  }

  gotoCheckout() {
    this.router.navigateByUrl('checkout/review');
  }
}
