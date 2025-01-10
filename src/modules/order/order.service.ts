import { Injectable } from '@nestjs/common';
import { WhatsappService } from '../whatsapp/whatsapp.service';
import { buildWelcomeMessage } from './utils/order-message.builder';

@Injectable()
export class OrderService {
  constructor(private readonly whatsappService: WhatsappService) {}

  public async initializeOrder(message: string, from: string): Promise<void> {
    const welcomeMsg = buildWelcomeMessage('', '', '');
    await this.whatsappService.sendMessage(process.env.WHATSAPP_PHONE_NUMBER!, welcomeMsg);
  }
}
