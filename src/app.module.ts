import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrderModule } from './modules/order/order.module';
import { WhatsappModule } from './modules/whatsapp/whatsapp.module';

@Module({
  imports: [OrderModule, WhatsappModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
