import { Injectable, Inject } from '@nestjs/common';
import { IWhatsappProvider } from './providers/whatsapp.interface';

@Injectable()
export class WhatsappService {
  constructor(@Inject('WhatsappProvider') private readonly provider: IWhatsappProvider) {}

  async sendMessage(to: string, message: string): Promise<void> {
    await this.provider.sendMessage(to, message);
  }
}
