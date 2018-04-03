import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductsComponent,
    ShoppingCartComponent,
    MyOrdersComponent,
    CheckoutComponent,
    AdminProductsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot([
      {
        path:'',
        component: HomeComponent
      },
      {
        path:'products',
        component: ProductsComponent
      },
      {
        path:'shopping-cart',
        component: ShoppingCartComponent
      },
      {
        path:'my-orders',
        component: MyOrdersComponent
      },
      {
        path:'admin/admin-products',
        component: AdminProductsComponent
      },
      
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
