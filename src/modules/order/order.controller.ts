import { Controller, Post, Body } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('webhook')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
  async handleIncomingMessage(@Body() body: any): Promise<void> {
    const message = body.Body;
    const from = body.From;
    await this.orderService.initializeOrder(message, from);
  }
}
