import {Component} from '@angular/core';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {

  public crisisState = "Before Crisis";
  
    constructor() {
        this.crisisState = "Before Crisis";
    }

}
