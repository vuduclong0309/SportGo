import {Component} from '@angular/core';

import {GlobalState} from '../../../global.state';
import {AF} from '../../../angularfire.service';
import {Router} from '@angular/router';

import 'style-loader!./baPageTop.scss';

@Component({
  selector: 'ba-page-top',
  templateUrl: './baPageTop.html',
})
export class BaPageTop {

  public isScrolled:boolean = false;
  public isMenuCollapsed:boolean = false;
  public photoURL:string;

  constructor(private _state:GlobalState, public afService:AF,  private router: Router) {
    this._state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });

    this.afService.af.auth.subscribe(
      (auth) => {
        if(auth != null) {
          // Set the Display for photoURL
          if(auth.google) {
            this.photoURL = auth.google.photoURL;
          }
          else if (auth.facebook){
            this.photoURL = auth.facebook.photoURL;
          }
          else if (auth.twitter){
            this.photoURL = auth.twitter.photoURL;
          } else {
            this.photoURL = auth.auth.photoURL;
          }
        }
      }
    );
  }

  public toggleMenu() {
    this.isMenuCollapsed = !this.isMenuCollapsed;
    this._state.notifyDataChanged('menu.isCollapsed', this.isMenuCollapsed);
    return false;
  }

  public scrolledChanged(isScrolled) {
    this.isScrolled = isScrolled;
  }

  public userPhoto(){
    //return this.afService.getUser().photoURL;
    return this.photoURL;
  }

  public signOut(){
    this.afService.logout().then((data) => {
      // Send them to the homepage if they are logged in
      this.router.navigate(['/login']);
    });
  }
}
