import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AdminComponent } from "./admin.component";
import { AuthGuard } from "./auth.guard";
import { MaterialFeatures } from "./material.module";
import { OrderTableComponent } from "./admin_actions/orderTable.component";
import { ProductEditorComponent } from "./admin_actions/productEditor.component";
import { ProductTableComponent } from "./admin_actions/productTable.component";

let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    //{ path: "main", component: AdminComponent },
    //{ path: "main", component: AdminComponent, canActivate: [AuthGuard] },
    {
        path: "main", component:AdminComponent, canActivate:[AuthGuard],
        children:[
            { path: "products/:mode/:id", component: ProductEditorComponent },
            { path: "products/:mode", component: ProductEditorComponent },
            { path: "products", component: ProductTableComponent },
            { path: "orders", component: OrderTableComponent },
            { path: "**", redirectTo: "products" }
        ]
    },
    { path: "**", redirectTo: "auth" }
    ]);

@NgModule({
    imports:[CommonModule,FormsModule,routing,MaterialFeatures],
    declarations: [AuthComponent, AdminComponent, ProductTableComponent,
        ProductEditorComponent, OrderTableComponent],
    providers:[AuthGuard]
})
export class AdminModule{}
