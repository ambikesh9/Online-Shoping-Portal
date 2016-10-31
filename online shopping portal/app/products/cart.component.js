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
var router_1 = require('@angular/router');
var product_service_1 = require('./product.service');
var http_1 = require('@angular/http');
var CartComponent = (function () {
    function CartComponent(_http, productService, _route, _router) {
        this._http = _http;
        this.productService = productService;
        this._route = _route;
        this._router = _router;
        this.pageTitle = 'My Cart';
        this.selectedProducts = [];
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.grandTotal = 0;
        this.quantity = 0;
        this.selectedProducts = this.productService.selectedProducts;
        for (var i = 0; i < this.selectedProducts.length; i++) {
            this.grandTotal += this.selectedProducts[i].totalPrice;
            this.quantity += this.selectedProducts[i].quantity;
        }
        sessionStorage.setItem("grandTotal", this.grandTotal);
        sessionStorage.setItem("selectedItems", this.quantity);
    }
    CartComponent.prototype.updateCart = function (product) {
        product.totalPrice = product.price * product.quantity;
        this.grandTotal = 0;
        this.quantity = 0;
        for (var i = 0; i < this.selectedProducts.length; i++) {
            this.grandTotal += this.selectedProducts[i].totalPrice;
            this.quantity += this.selectedProducts[i].quantity;
        }
        sessionStorage.setItem("grandTotal", this.grandTotal);
        sessionStorage.setItem("selectedItems", this.quantity);
    };
    CartComponent.prototype.remove = function (index) {
        this.selectedProducts.splice(index, 1);
        this.grandTotal = 0;
        this.quantity = 0;
        for (var i = 0; i < this.selectedProducts.length; i++) {
            this.grandTotal += this.selectedProducts[i].totalPrice;
            this.quantity += this.selectedProducts[i].quantity;
        }
        sessionStorage.setItem("grandTotal", this.grandTotal);
        sessionStorage.setItem("selectedItems", this.quantity);
    };
    CartComponent.prototype.onBack = function () {
        this._router.navigate(['/products', this.selectedProducts]);
    };
    CartComponent.prototype.checkout = function () {
        alert("Thank you for making the payment. Your order will be shiped asap..");
        this.productService.selectedProducts = [];
        sessionStorage.clear();
        this._router.navigate(['/products']);
    };
    CartComponent = __decorate([
        core_1.Component({
            selector: 'my-cart',
            templateUrl: 'app/products/cart-component.html'
        }), 
        __metadata('design:paramtypes', [http_1.Http, product_service_1.ProductService, router_1.ActivatedRoute, router_1.Router])
    ], CartComponent);
    return CartComponent;
}());
exports.CartComponent = CartComponent;
//# sourceMappingURL=cart.component.js.map