import { Product } from './Product';

export interface Order {
totalPrice: number;
    product: Product;
    quantity: number;
    price: number;
    createdAt: Date
}