"use strict";
var Product = (function () {
    function Product(productId, productName, productCode, price, description, imageUrl) {
        this.productId = productId;
        this.productName = productName;
        this.productCode = productCode;
        this.price = price;
        this.description = description;
        this.imageUrl = imageUrl;
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map