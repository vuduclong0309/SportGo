import {Component} from '@angular/core';
import {AdminService} from './admin.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Rx';

import {FormReport}  from './formsreport';
@Component({
  selector: 'admin',
  templateUrl: './admin.html'
})
export class AdminComponent {
  public reportList:any;
  private formsUrl = "http://172.20.114.92:8000/CMS_System/reportList/";

  constructor(private _adminService:AdminService, private http:Http) {
  }

  ngOnInit() {
    this.loadReport();
  }

  private loadReport() {
    this.reportList = this._adminService.getReportList();
  }

  private verifyReport(message:any) {
    //console.log("Verify this report: " + message);
    console.log(message["id"]);

    message["verified"] = false;
    //console.log(message);
    let bodyString = JSON.stringify(message); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers });
    let url = this.formsUrl + message["id"] + "/";

    //console.log(`${this.formsUrl}${message['id']}/`);
    //console.log(bodyString);

    this.http.put(url, bodyString, options) // ...using put request
                         .map((res:Response) => res.json()) // ...and calling .json() on the response to return data
                         //.catch((error:any) => Observable.throw(error.json().error || 'Server error'))
                         .subscribe(data => console.log(data), error => console.log(error), () => console.log("Put complete"));
  }
}
