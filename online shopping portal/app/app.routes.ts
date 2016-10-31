import {Routes, RouterModule } from '@angular/router';
import { WelcomeComponent }   from './home/welcome.component';
import { ProductListComponent }   from './products/product-list.component';
import { LoginComponent }   from './login/login.component';
import { CartComponent }   from './products/cart.component';
import { ProductDetailComponent }   from './products/product-detail.component';

const routes: Routes= [
{path:'',redirectTo:'/welcome',pathMatch:'full'},
    {path:'login',component:LoginComponent},
 {path:'welcome',component:WelcomeComponent},
  {path:'products',component:ProductListComponent},
   {path:'cart',component:CartComponent},
    {path:'product/:id',component:ProductDetailComponent}
    ];

export const routing=RouterModule.forRoot(routes);
