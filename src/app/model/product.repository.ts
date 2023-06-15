import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { RestDataSource } from "./order/rest.datasource";

@Injectable()
export class ProductRepository {
    private products: Product[] = [];
    private categories: string[] = [];

    constructor(private dataSource: RestDataSource){
        dataSource.getProducts().subscribe( 
            data => {
                this.products = data;
                this.categories = data.map(
                    (product) => product.category ?? "(None)"
                ).filter((c, index, array) => array.indexOf(c) == index).sort();0
            }
        )
    }

    getProducts(category?: string) : Product[]{
        return this.products.filter(
            (p) => category == undefined ||  category == p.category
        );
    }

    getProduct(id: number) : Product | undefined{
        return this.products.find(p=> p.id == id);
    }

    getCategories():string[]{
        return this.categories;
    }
}