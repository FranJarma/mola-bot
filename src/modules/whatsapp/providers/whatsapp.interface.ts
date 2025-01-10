export interface IWhatsappProvider {
    sendMessage(to: string, message: string): Promise<void>;
}