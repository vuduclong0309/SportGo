import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {EmailValidator, EqualPasswordsValidator} from '../../theme/validators';
import {Router} from '@angular/router';
import {AF} from '../../angularfire.service';

import 'style-loader!./register.scss';

@Component({
  selector: 'register',
  templateUrl: './register.html',
})
export class Register {

  public error : any;

  public form:FormGroup;
  public name:AbstractControl;
  public email:AbstractControl;
  public password:AbstractControl;
  public repeatPassword:AbstractControl;
  public passwords:FormGroup;

  public submitted:boolean = false;

  constructor(fb:FormBuilder, public afService:AF,  private router: Router) {

    this.form = fb.group({
      'name': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'email': ['', Validators.compose([Validators.required, EmailValidator.validate])],
      'passwords': fb.group({
        'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
        'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
      }, {validator: EqualPasswordsValidator.validate('password', 'repeatPassword')})
    });

    this.name = this.form.controls['name'];
    this.email = this.form.controls['email'];
    this.passwords = <FormGroup> this.form.controls['passwords'];
    this.password = this.passwords.controls['password'];
    this.repeatPassword = this.passwords.controls['repeatPassword'];
  }

  public onSubmit(values:Object):void {
    this.submitted = true;
    if (this.form.valid) {
      // your code goes here
      //console.log(values['email'] , values['passwords']['password']);
      //alert(values);
      this.afService.signUp(values['email'], values['passwords']['password']).then(() => {
        this.router.navigate(['/login']);
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
      this.router.navigate(['/pages/dashboard']);
    });
  }

  public loginTwitter(){
    this.afService.loginWithTwitter().then((data) => {
      // Send them to the homepage if they are logged in
      this.router.navigate(['/pages/dashboard']);
    });
  }

  public loginFacebook(){
    this.afService.loginWithFacebook().then((data) => {
      // Send them to the homepage if they are logged in
      this.router.navigate(['/pages/dashboard']);
    });
  }
}
