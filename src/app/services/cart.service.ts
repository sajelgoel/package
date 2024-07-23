import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItem: any = [];
  cartItem$ = new BehaviorSubject(this.cartItem);

  constructor(private router: Router) {}

  addToCart(item: any) {
    this.cartItem.push(item);
    this.cartItem$.next(this.cartItem);
  }

  removeFromCart(item: any) {
    this.cartItem = this.cartItem.filter(
      (cartitem: any) => cartitem.id !== item.id
    );
    this.cartItem$.next(this.cartItem);
  }

  clearCart() {
    this.cartItem$.next([]);
  }

  gotoCheckout() {
    this.router.navigateByUrl('checkout/review');
  }
}
