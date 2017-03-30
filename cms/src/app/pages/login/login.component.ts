import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AF} from '../../angularfire.service';

import 'style-loader!./login.scss';

@Component({
  selector: 'login',
  templateUrl: './login.html',
})
export class Login {

  public error: any;
  public form:FormGroup;
  public email:AbstractControl;
  public password:AbstractControl;
  public submitted:boolean = false;

  constructor(fb:FormBuilder, public afService:AF, private router: Router) {

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
      // login with email and password
      //console.log({email : values['email'] , password : values['password']});
      this.afService.login(values['email'], values['password']).then(() => {
        this.router.navigate(['/pages/dashboard']);
      }).catch((error: any) => {
        if (error) {
          this.error = error;
          console.log(this.error);
        }
      });
    }
  }

  public loginGoogle(){
    this.afService.loginWithGoogle().then((data) => {
      // Send them to the homepage if they are logged in
      console.log("Logged in with Google");
      this.router.navigate(['/pages/dashboard']);
    });
  }

  public loginTwitter(){
    this.afService.loginWithTwitter().then((data) => {
      // Send them to the homepage if they are logged in
      console.log("Logged in with Twitter");
      this.router.navigate(['/pages/dashboard']);
    });
  }

  public loginFacebook(){
    this.afService.loginWithFacebook().then((data) => {
      // Send them to the homepage if they are logged in
      console.log("Logged in with Facebook");
      this.router.navigate(['/pages/dashboard']);
    });
  }
}
