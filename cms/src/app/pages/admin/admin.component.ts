import {Component} from '@angular/core';
import {AdminService} from './admin.service';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Rx';

import {BASEURL} from '../baseURL';

import {FormReport}  from './formsreport';
@Component({
  selector: 'admin',
  templateUrl: './admin.html'
})
export class AdminComponent {
  public reportList:any;
  private formsUrl = BASEURL + "reportList/";
  private crisisUrl = BASEURL + "getCrisisState/"
  private feedback: string;
  private submitted = false;
  private crisisState = "Unchanged";
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

    message["verified"] = true;
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

  private deleteReport(message:any) {
    this.submitted = true;
    console.log(message["id"]);
    this.feedback = "Deleted report, please reload the page";
    let url = this.formsUrl + message["id"] + "/";
    this.http.delete(url)
              .map((res:Response) => res.json())
              .subscribe(data => console.log(data), error => console.log(error), () => console.log("Delete complete"));
  }

  updateAfterCrisis(){
    console.log("To here")
    let body = {'crisisState': "After"};
    this.crisisState = "After Crisis";
    this.updateCrisisState(body);
  }

  updateInCrisis(){
    let body = {'crisisState': "In"};
    this.crisisState = "In Crisis";
    this.updateCrisisState(body);
  }

  updateBeforeCrisis(){
    let body = {'crisisState': "Before"};
    this.crisisState = "Before Crisis";
    this.updateCrisisState(body);
  }

  updateCrisisState(body:Object){
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option 
    console.log("Starting to post a request");
    console.log(bodyString);
    this.http.post(this.crisisUrl, bodyString, options) // ...using post request
                         .map((res:Response) => console.log(res.text())) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')).subscribe(data => console.log(data));

    console.log("Post success");
    this.loadReport();
    this.submitted = true;
    this.feedback = "Changed Crisis State to " + this.crisisState;
  }
}
