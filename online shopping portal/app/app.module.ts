import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { FormsModule } from '@angular/forms'
import { AppComponent }   from './app.component';
import { routing }   from './app.routes';
import { WelcomeComponent }   from './home/welcome.component';
import { ProductService }   from './products/product.service';
import { ProductListComponent }   from './products/product-list.component';
import { LoginComponent }   from './login/login.component';
import { CartComponent }   from './products/cart.component';
import { ProductDetailComponent }   from './products/product-detail.component';
import { ProductFilterPipe }   from './products/product-filter.pipe';


@NgModule({
  imports:      [ BrowserModule , routing,HttpModule, FormsModule],
  declarations: [ AppComponent,WelcomeComponent, LoginComponent,ProductListComponent , CartComponent,  ProductDetailComponent, ProductFilterPipe  ],
  providers: [ProductService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
