export function buildWelcomeMessage(turn: string, withdrawTime: string, deliveryRangeTime: string): string {
    return `Hola!!🤗
        Estamos listos para recibir tu pedido!📝 
        🍔 ${turn} turno
        😃 Podés retirar tu pedido en el local:
        ⏰ Horario para Retiro: <b>${withdrawTime}</b>  🏃
        📍 Dirección del local: Luis Burela esquina Gral. Guemes 
        ¡No olvides decirnos el nombre para quien va el pedido en caso de retiro!

        ⏰ Horario de entrega de delivery: ${deliveryRangeTime} 🛵
        📍 Ubicación para el delivery: ¡Compártenos tu ubicación de Maps y dirección escrita, exacta! 🗺️
        ¡Envío sin cargo! 🛵💨

        *Sin stock de :  Smoke Shake

        Aviso importante ⚠️ en caso de lluvia, el delivery será suspendido. Por seguridad de los cadetes y la integridad del pedido. 🍔

        ¡Esperamos tu pedido! 🥳`;
};

export function buildDepositRequestMessage(amount: number): string {
    return `📝 Para confirmar tu pedido, es necesario abonar una seña de $${amount.toFixed(2)}. 
    Podés transferir al siguiente alias: ${process.env.LOCAL_ALIAS} 🏦.
    ¡Te esperamos! 🍔`;
};

export function buildConfirmedOrderMessage(): string {
    return `Pedido Asentado ✅ 🩷
    Muchas gracias!!! 🤗`;
};

