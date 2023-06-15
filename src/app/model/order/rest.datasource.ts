import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { Order } from "./order.model";
import { Product } from "../product.model";


const PROTOCOL = "http";
const PORT = 3500;

@Injectable()
export class RestDataSource {
    baseUrl: string;
    auth_token?: string;

    constructor(private http: HttpClient) {
        this.baseUrl = `${PROTOCOL}://${location.hostname}:${PORT}/`;
    }
    getProducts(): Observable<Product[]> {
        return this.http.get<Product[]>(this.baseUrl + "products");
    }
    saveOrder(order: Order): Observable<Order> {
        return this.http.post<Order>(this.baseUrl + "orders", order);
    }
    getOrders(): Observable<Order[]>{
        return this.http.get<Order[]>(this.baseUrl+ "orders");
    }
    authenticate(user: String, pass: String): Observable<boolean>{
        return this.http.post<any>(this.baseUrl + "login", {
            name: user, password: pass
        }).pipe(
            map (response => {
                this.auth_token = response.succes ? response.token : null;
                return response.succes;
            })
        );
    }
}