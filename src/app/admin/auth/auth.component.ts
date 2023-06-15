import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';

@Component({
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  username?: string;
  password?: string;
  errorMsg?: string;

  constructor(private router: Router, private auth: AuthService){}

  authenticate(form: NgForm, ){
    if(form.valid){
      this.auth.authenticate(this.username ?? "", this.password ?? "")
      .subscribe( response => {
        if (response){
          this.router.navigateByUrl("admin/main");
        }
        this.errorMsg = "Authentification echouée"
      })
    }else{
      this.errorMsg = "Formulaire invalide";
    }
    }
}
