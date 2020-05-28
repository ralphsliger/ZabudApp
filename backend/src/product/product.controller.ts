import { Controller, Post, Res, HttpStatus, Body, Get, Param, NotFoundException, Delete, Query, Put, UseInterceptors } from '@nestjs/common';
import { ProductService } from "./product.service";
import { MorganInterceptor } from 'nest-morgan';

import { CreateProductDTO } from "./dto/product.dto";

@Controller('product')
export class ProductController {

    constructor(private productService: ProductService) { }


    // Agregar Producto: /product/create
    @Post('/create')
    async createProduct(@Res() res, @Body() createProductDTO: CreateProductDTO) {
        const product = await this.productService.createProduct(createProductDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Producto Creado exitosamente',
            product
        });
    }

    // Listado productos /product
    // 
    @Get('/')
    async getProducts(@Res() res) {
        const products = await this.productService.getProducts();
        return res.status(HttpStatus.OK).json(products);
    }

    // Producto: /product/5c9d46100e2e5c44c444b2d1
    @Get('/:productID')
    async getProduct(@Res() res, @Param('productID') productID) {
        const product = await this.productService.getProduct(productID);
        if (!product) throw new NotFoundException('Producto no existe!');
        return res.status(HttpStatus.OK).json(product);
    }

    // Eliminar Producto: /delete?productID=5c9d45e705ea4843c8d0e8f7
    @UseInterceptors(MorganInterceptor('combined'))
    @Delete('/delete')
    async deleteProduct(@Res() res, @Query('productID') productID) {
        const productDeleted = await this.productService.deleteProduct(productID);
        if (!productDeleted) throw new NotFoundException('Producto no existe!');
        return res.status(HttpStatus.OK).json({
            message: 'Product Deleted Successfully',
            productDeleted
        });
    }

     // Eliminar Producto: /delete?productID=5c9d45e705ea4843c8d0e8f7
     @UseInterceptors(MorganInterceptor('combined'))
     @Delete('/delete')
     async dcProduct(@Res() res, @Query('productID') productID) {
         const productDeleted = await this.productService.deleteProduct(productID);
         if (!productDeleted) throw new NotFoundException('Producto no existe!');
         return res.status(HttpStatus.OK).json({
             message: 'Producto eliminado exitosamente',
             productDeleted
         });
     }
    // Editar Producto: /update?productID=5c9d45e705ea4843c8d0e8f7
    @Put('/update')
    async updateProduct(@Res() res, @Body() createProductDTO: CreateProductDTO, @Query('productID') productID) {
        const updatedProduct = await this.productService.updateProduct(productID, createProductDTO);
        if (!updatedProduct) throw new NotFoundException('Producto no existe!');
        return res.status(HttpStatus.OK).json({
            message: 'Product actualizado exitosamente',
            updatedProduct 
        });
    }

}
