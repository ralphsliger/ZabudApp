import { Injectable } from '@nestjs/common';

import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

import { Product } from "./interfaces/product.interface";
import { CreateProductDTO } from "./dto/product.dto";
import { timer } from 'rxjs';

@Injectable()
export class ProductService {

    constructor(@InjectModel('Product') private readonly productModel: Model<Product>) {}

    // mostrar todos los productos
    async getProducts(): Promise<Product[]> {
        const products = await this.productModel.find();
        return products;
    }
    
    // Mostrar product
    async getProduct(productID: string): Promise<Product> {
        const product = await this.productModel.findById(productID); 
        return product;
    }

    // Crear producto
    async createProduct(createProductDTO: CreateProductDTO): Promise<Product> {
        const newProduct = new this.productModel(createProductDTO);
        return newProduct.save();
    }

    // Eliminar Producto
    async deleteProduct(productID: string): Promise<any> {
        const deletedProduct = await this.productModel.findByIdAndDelete(productID);
        return deletedProduct;
    }

    // Editar producto
    async updateProduct(productID: string, createProductDTO: CreateProductDTO): Promise<Product> {
        const updatedProduct = await this.productModel
                            .findByIdAndUpdate(productID, createProductDTO, {new: true});
        return updatedProduct;
    }
    
       }

       
        

        
    


