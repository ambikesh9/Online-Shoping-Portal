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
var Cart_1 = require('./Cart');
var ProductListComponent = (function () {
    function ProductListComponent(_productService, route) {
        var _this = this;
        this._productService = _productService;
        this.route = route;
        this.pageTitle = 'Product List';
        this.imageWidth = 150;
        this.imageMargin = 2;
        this.showImage = true;
        this.listFilter = "";
        this.products = [];
        this.selectedItems = 0;
        this.total = 0;
        this.orderId = 0;
        this.i = 0;
        this.orderId++;
        this._productService.getProducts()
            .subscribe(function (products) {
            _this._productService.products = products;
            _this.products = _this._productService.products;
        }, function (error) { return _this.errorMessage = error; });
        if (_productService.selectedProducts.length > 0) {
            this.selectedItems = Number(sessionStorage.getItem("selectedItems"));
            this.total = Number(sessionStorage.getItem("grandTotal"));
        }
    }
    ProductListComponent.prototype.toggleImage = function () { this.showImage = !this.showImage; };
    ProductListComponent.prototype.addCart = function (id) {
        this.cart = new Cart_1.Cart();
        this.selectedItems += 1;
        var product = this._productService.products.filter(function (product) { return product.productId === id; })[0];
        this.total += product.price;
        sessionStorage.setItem("selectedItems", this.selectedItems);
        var sp = this._productService.selectedProducts.filter(function (product) { return product.productId === id; })[0];
        if (sp) {
            var index = this._productService.selectedProducts.findIndex(function (product) { return product.productId === id; });
            this._productService.selectedProducts[index].quantity += 1;
            this._productService.selectedProducts[index].totalPrice += product.price;
        }
        else {
            this.cart.orderId = "ORD_" + this.orderId;
            this.cart.productId = id;
            this.cart.userId = sessionStorage.getItem("username");
            this.cart.productname = product.productName;
            this.cart.price = product.price;
            this.cart.quantity = 1;
            this.cart.dateOfPurchase = new Date().toString();
            this.cart.totalPrice = product.price * this.cart.quantity;
            this._productService.selectedProducts.push(this.cart);
            this.orderId++;
        }
    };
    ProductListComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/products/product-list.component.html',
            styleUrls: ['app/products/product-list.component.css']
        }), 
        __metadata('design:paramtypes', [product_service_1.ProductService, router_1.ActivatedRoute])
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map