import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { StoreComponent } from "./store.component";
import { ModelModule } from "../model/model.module";
import { CounterDirective } from "./counter.directive";

@NgModule({
    imports: [ModelModule, BrowserModule, FormsModule],
    declarations: [StoreComponent,CounterDirective],
    exports: [StoreComponent]
   })
   export class StoreModule { }