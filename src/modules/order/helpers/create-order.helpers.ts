import { DateService } from "src/shared/services/date.service";
import { OrderService } from "../order.service";

export class CreateOrderHelpers {
  constructor(
    private readonly dateService: DateService,
    private readonly orderService: OrderService,
  ) {}
  
  public calculateOrderTurn(): string {

    // El turno debe asignarse dinámicamente dependiendo de la hora del pedido y de la cantidad de pedidos que tienen en el turno actual, sino pasa para el siguiente turno.

  }

  public calculateOrderDeliveryTime(){

  }

  public calculateOrderWithdrawTime(){

  }

  public calculateOrderTotalPrice(){

  }
}