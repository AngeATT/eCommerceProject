import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  templateUrl: './auth.component.html'
})
export class AuthComponent {
  username?: string;
  password?: string;
  errorMsg?: string;

  constructor(private router: Router){}

  authenticate(form: NgForm){
    if(form.valid){
      //TODO : performauthentification
    }else{
      this.errorMsg = "Formulaire invalide";
    }
    }
}
