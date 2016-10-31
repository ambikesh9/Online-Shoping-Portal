export interface IProduct {
    productId:number;
    productName: string;
    productCode: string;
    description: string;
    price:number;
    imageUrl: string; 
    }

export class Product implements IProduct{
    constructor(public productId:number,
    public productName: string,
    public productCode: string,
    public price:number,
    public description: string,
    public imageUrl: string )
    {}
    }