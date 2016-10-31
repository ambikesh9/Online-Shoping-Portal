"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var welcome_component_1 = require('./home/welcome.component');
var product_service_1 = require('./products/product.service');
var product_list_component_1 = require('./products/product-list.component');
var login_component_1 = require('./login/login.component');
var cart_component_1 = require('./products/cart.component');
var product_detail_component_1 = require('./products/product-detail.component');
var product_filter_pipe_1 = require('./products/product-filter.pipe');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, app_routes_1.routing, http_1.HttpModule, forms_1.FormsModule],
            declarations: [app_component_1.AppComponent, welcome_component_1.WelcomeComponent, login_component_1.LoginComponent, product_list_component_1.ProductListComponent, cart_component_1.CartComponent, product_detail_component_1.ProductDetailComponent, product_filter_pipe_1.ProductFilterPipe],
            providers: [product_service_1.ProductService],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map