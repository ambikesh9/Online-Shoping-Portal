import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './product.service';
import { IProduct } from './product';
import { Cart } from './Cart';
import { ProductFilterPipe } from './product-filter.pipe';


@Component({
    
    templateUrl:'app/products/product-list.component.html',
    styleUrls : ['app/products/product-list.component.css']
})

export class ProductListComponent {
    pageTitle:string ='Product List';
    imageWidth:number=150;
    imageMargin:number=2;
    showImage:boolean=true;
    listFilter: string="";
    errorMessage:string;
    products:any=[];
    selectedItems:any=0;
    cart:Cart;
    total: number=0;
    orderId: number=0;
    sub: any;
    i: number=0;
    constructor(private _productService:ProductService, private route: ActivatedRoute) {
    this.orderId++;
        this._productService.getProducts()
        .subscribe(
            products => {
            this._productService.products=products;
                this.products=this._productService.products;    
            },
            error => this.errorMessage=<any>error);
        
        
        
     if(_productService.selectedProducts.length>0)
     {
         this.selectedItems=Number(sessionStorage.getItem("selectedItems"));
         this.total=Number(sessionStorage.getItem("grandTotal"));         
         }
        }
    
    
    toggleImage():void{this.showImage=!this.showImage;}
    
    addCart(id:number){
        
    this.cart=new Cart();
        this.selectedItems+=1;
        
       var product=this._productService.products.filter(product => product.productId===id)[0];
        this.total+=product.price;
        sessionStorage.setItem("selectedItems",this.selectedItems);
        var sp=this._productService.selectedProducts.filter(product => product.productId===id)[0];
        if(sp) {
            var index=this._productService.selectedProducts.findIndex(product => product.productId === id);
            this._productService.selectedProducts[index].quantity+=1;
            this._productService.selectedProducts[index].totalPrice+=product.price;
            }
        
        else {
            this.cart.orderId="ORD_" +this.orderId;
            this.cart.productId=id;
            this.cart.userId= sessionStorage.getItem("username");
            this.cart.productname=product.productName;
            this.cart.price=product.price;
            this.cart.quantity=1;
            this.cart.dateOfPurchase=new Date().toString();
            this.cart.totalPrice=product.price*this.cart.quantity;
            this._productService.selectedProducts.push(this.cart);
            this.orderId++;    
            
            }
        
    
    
    }
    
}