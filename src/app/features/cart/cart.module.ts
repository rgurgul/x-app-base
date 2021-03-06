import { MyLibModule } from 'my-lib';

import { RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: CartComponent }
    ]),
    MyLibModule
  ]
})
export class CartModule { }
