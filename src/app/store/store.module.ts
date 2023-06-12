import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { StoreComponent } from "./store.component";
import { ModelModule } from "../model/model.module";
import { CounterDirective } from "./counter.directive";
import { CartSummaryComponent } from "./cartSummary.component";
import { RouterModule } from "@angular/router";
import { CartDetailsComponent } from './cart-details/cart-details.component';

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
    declarations: [StoreComponent,CounterDirective, CartSummaryComponent, CartDetailsComponent],
    exports: [StoreComponent]
   })
   export class StoreModule { }