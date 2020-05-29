import { Controller, Get, UseGuards, Post, Body } from '@nestjs/common';
import { User as UserDocument} from '../order/interfaces/order.interfaces'
import { User } from '../utilities/user.decorators'
import { OrderService } from './order.service';
import { CreateOrderDTO } from './dto/order.dto';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Get('/calcular')
  listOrders(@User() { id }: UserDocument) {
    return this.orderService.listOrdersByUser(id);
  }

  @Post('/calcular')
  createOrder(@Body() order: CreateOrderDTO, @User() { id }: UserDocument) {
    return this.orderService.createOrder(order, id);
  }
}
