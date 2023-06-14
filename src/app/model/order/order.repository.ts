import { Injectable } from "@angular/core";
import { Order } from "./order.model";
import { StaticDataSource } from "../static.datasource";

@Injectable()
export class OrderRepository{
    private orders: Order[] = [];

    constructor(private dataSource: StaticDataSource){}

    getOrders() : Order[]{
        return this.orders;
    }
    saveOrder(order : Order) : void{
        this.dataSource.saveOrder(order);
    }
}