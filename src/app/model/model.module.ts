import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { Cart } from "./cart.model";
import { Order } from './order/order.model';
import { OrderRepository } from "./order/order.repository";
import { RestDataSource } from "./order/rest.datasource";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
    imports: [HttpClientModule],
    providers: [ProductRepository,RestDataSource,Cart,Order,OrderRepository, RestDataSource],
    declarations: [
      Order
    ]
})

export class ModelModule{}