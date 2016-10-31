"use strict";
var router_1 = require('@angular/router');
var welcome_component_1 = require('./home/welcome.component');
var product_list_component_1 = require('./products/product-list.component');
var login_component_1 = require('./login/login.component');
var cart_component_1 = require('./products/cart.component');
var product_detail_component_1 = require('./products/product-detail.component');
var routes = [
    { path: '', redirectTo: '/welcome', pathMatch: 'full' },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'welcome', component: welcome_component_1.WelcomeComponent },
    { path: 'products', component: product_list_component_1.ProductListComponent },
    { path: 'cart', component: cart_component_1.CartComponent },
    { path: 'product/:id', component: product_detail_component_1.ProductDetailComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
//# sourceMappingURL=app.routes.js.map