import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Router, RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth.component";
import { AdminComponent } from "./admin.component";
import { AuthGuard } from "./auth.guard";
import { AuthService } from "../model/auth.service";
import { MaterialFeatures } from "./material.module";

let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    //{ path: "main", component: AdminComponent },
    { path: "main", component: AdminComponent, canActivate: [AuthGuard] },
    { path: "**", redirectTo: "auth" }
    ]);

@NgModule({
    imports:[CommonModule,FormsModule,routing,MaterialFeatures],
    declarations: [AuthComponent,AdminComponent],
    providers:[AuthGuard]
})
export class AdminModule{}
