import { Injectable } from '@angular/core';
import { routing } from './app.routing';
import { Router } from '@angular/router';
import { AngularFire , AuthProviders, AuthMethods } from  'angularfire2';

@Injectable()

export class AF {
  constructor(public af: AngularFire, private router: Router){}
    /**
   * Logs in the user
   * @returns {firebase.Promise<FirebaseAuthState>}
   */
  signUp(email, password) {
    return this.af.auth.createUser({
      email : email,
      password : password,
    }).then(() => {
      this.router.navigate(['/pages/dashboard']);
    });
  }

  login(email, password) {
    return this.af.auth.login({
      email: email ,
      password: password,
    }).then(() => {
      this.router.navigate(['/pages/dashboard']);
    });
  }

  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
    }).then(() => {
      this.router.navigate(['/pages/dashboard']);
    });
  }

  loginWithTwitter() {
    return this.af.auth.login ({
      provider: AuthProviders.Twitter,
      method: AuthMethods.Redirect,
    });
  }

  loginWithFacebook() {
    return this.af.auth.login ({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Redirect,
    });
  }

  /**
   * Logs out the current user
   */
  logout() {
    return this.af.auth.logout().then(() => {
      this.router.navigate(['/pages/dashboard']);
    });
  }
}
