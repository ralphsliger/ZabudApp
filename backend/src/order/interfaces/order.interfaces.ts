import { Document } from "mongoose";
import { Product } from "src/product/interfaces/product.interface";

export interface Order extends Document {
    totalPrice: number;
    product: Product[];
    quantity: number;
    price: number;
    createdAt: Date;
  }

  export interface User extends Document {
    username: string;
    created: Date;
  }