import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from "@nestjs/mongoose";
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';


//se importa uri base de datos
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/zabudbd', {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
    }),
    ProductModule,
    OrderModule,
    
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
