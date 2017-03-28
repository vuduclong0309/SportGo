import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {AF} from '../../angularfire.service';

import 'style-loader!./login.scss';

@Component({
  selector: 'login',
  templateUrl: './login.html',
})
export class Login {

  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  constructor(fb:FormBuilder, public afService:AF) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });

    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      // console.log(values);
      // login with email and password
      this.afService.login(this.email.toString(), this.password.toString());
    }
  }

  public loginGoogle(){
    this.afService.loginWithGoogle();
  }

  public loginTwitter(){
    this.afService.loginWithTwitter();
  }

  public loginFacebook(){
    this.afService.loginWithFacebook();
  }
}
