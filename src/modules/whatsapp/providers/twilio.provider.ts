import { Injectable } from '@nestjs/common';
import { Twilio } from 'twilio';
import { IWhatsappProvider } from './whatsapp.interface';

@Injectable()
export class TwilioProvider implements IWhatsappProvider {
  private client: Twilio;

  constructor() {
    this.client = new Twilio(process.env.TWILIO_ACCOUNT_SID!, process.env.TWILIO_AUTH_TOKEN!);
  }

  async sendMessage(to: string, message: string): Promise<void> {
    await this.client.messages.create({
      body: message,
      from: `whatsapp:${process.env.TWILIO_PHONE_NUMBER!}`,
      to,
    });
  }
}