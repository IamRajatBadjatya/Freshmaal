import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AngularFireModule } from 'angularfire2';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { NavigationComponent } from './header/navigation/navigation.component';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';
import { HomeComponent } from './home/home.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { LoginComponent } from './header/navigation/login/login.component';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { AuthGuardService } from './auth-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductsComponent,
    ShoppingCartComponent,
    MyOrdersComponent,
    CheckoutComponent,
    AdminProductsComponent,
    HomeComponent,
    AdminOrdersComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    NoopAnimationsModule,
    BsDropdownModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    RouterModule.forRoot([
      { path:'', component: HomeComponent},
      { path:'products', component: ProductsComponent},
      { path:'shopping-cart', component: ShoppingCartComponent},
      { path: 'login', component: LoginComponent},

      { path:'my-orders', component: MyOrdersComponent, canActivate: [AuthGuardService]},
      { path: 'checkout', component: CheckoutComponent, canActivate: [AuthGuardService]},
      
      { path:'admin/admin-products', component: AdminProductsComponent, canActivate: [AuthGuardService]},
      { path:'admin/admin-orders', component: AdminOrdersComponent, canActivate: [AuthGuardService]},
      { path:'**', component: HomeComponent}  
    ])
  ],
  providers: [AngularFireAuth, AuthService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
