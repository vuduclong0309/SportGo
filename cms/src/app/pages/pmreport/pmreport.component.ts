import {Component} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Rx';

import {BASEURL} from '../baseURL';
import {PMReportService} from './pmreport.service';
import {FormReport}  from './formreport';

@Component({
  selector: 'pmreport',
  templateUrl: 'pmreport.html' 
})
export class PMReportComponent {
  crisisState: any;
  reportList: any;
  private crisisUrl = BASEURL + "getCrisisState/";
  constructor(private http:Http, pmservice: PMReportService) {
    this.crisisState = this.getCrisisState();
    this.reportList = pmservice.getReportList();
  }

  getCrisisState(): void {
      this.http.get(this.crisisUrl)
                    .map((res:Response) => res.json())
                    .subscribe((data:any) => {this.crisisState = data.crisisState});
                    //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
        console.log(this.crisisState);
  }
}