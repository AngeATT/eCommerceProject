import { Inject, Injectable } from "@angular/core";
import { RestDataSource } from "../model/order/rest.datasource";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "../model/auth.service";

@Injectable()
export class AuthGuard {
    constructor(private route: Router, private auth: AuthService) {

    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)  : boolean {
        if (!this.auth.authenticated){
            this.route.navigateByUrl("/admin/auth")
            return false;
        }
        return true;
    }
}