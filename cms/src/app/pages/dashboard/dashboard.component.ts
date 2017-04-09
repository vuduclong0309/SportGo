import {Component} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import {BASEURL} from '../baseURL';

@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  private crisisUrl = BASEURL + "getCrisisState/";
  public crisisState:any;
  
    constructor(private http:Http) {
        this.getCrisisState();
    }

    getCrisisState(): void {
    	this.http.get(this.crisisUrl)
                    .map((res:Response) => res.json())
                    .subscribe((data:any) => {this.crisisState = data.crisisState});
                    //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        console.log(this.crisisState);
  }
}
