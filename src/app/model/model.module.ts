import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { Order } from './order/order.model';
import { OrderRepository } from "./order/order.repository";

@NgModule({
    providers: [ProductRepository,StaticDataSource,Cart,Order,OrderRepository],
    declarations: [
      Order
    ]
})

export class ModelModule{}