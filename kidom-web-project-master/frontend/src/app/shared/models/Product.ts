import { Timestamp } from "rxjs";

export class Product {
    id!: string;
    name!: string;
    price!: number;
    category!: string;
    imageUrl!: string;
    description!: string;
    star!: number;
    brand?: string; 
    stock!: number;
    time!: Date;
    quantity!: number;
}