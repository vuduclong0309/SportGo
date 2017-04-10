import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Rx';

import {FormReport}  from './formreport';
import {BASEURL} from '../baseURL';

@Injectable()
export class PMReportService {

  private crisisUrl = BASEURL + "getCrisisState/";
  private formsUrlVerified = BASEURL + "reportList/verified=True";
  private formsUrl = BASEURL + "reportList/"

  private crisisState:any;

  constructor(private http:Http){}

  getReportListVerified(){
    return this.http.get(this.formsUrlVerified)
                    .map((res:Response) => res.json() as FormReport)
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getReportList(){
    return this.http.get(this.formsUrl)
                    .map((res:Response) => res.json() as FormReport)
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getCrisisState(): void {
    this.http.get(this.crisisUrl)
             .map((res:Response) => res.json())
             .subscribe((data:any) => {this.crisisState = data.crisisState});
                  //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    //console.log(this.crisisState);
    return this.crisisState;
  }

}
