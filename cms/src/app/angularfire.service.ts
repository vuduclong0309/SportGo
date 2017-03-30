import { Injectable } from '@angular/core';
import { routing } from './app.routing';
import { Router } from '@angular/router';
import { AngularFire , AuthProviders, AuthMethods , FirebaseAuthState} from  'angularfire2';

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
    });
  }

  login(email, password) {
    return this.af.auth.login({
      email: email ,
      password: password,
    },
    {
      provider: AuthProviders.Password,
      method: AuthMethods.Password,
    });
  }

  loginWithGoogle() {
    return this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup,
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
    return this.af.auth.logout();
  }
/*
  getUser() {
    return this.state.auth;
  }
  */
}
