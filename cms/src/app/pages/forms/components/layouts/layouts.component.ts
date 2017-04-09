import {Component} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import {GeolocationService} from './GeolocationService'
import {FormReport}  from './formsreport';

@Component({
  selector: 'layouts',
  templateUrl: './layouts.html',
})
export class Layouts {

  private formsUrl = "http://172.20.114.92:8000/CMS_System/reportList/";
  public postResponse: any;
  private formToSend = {};
  public error: any;
  public reportForm:FormGroup;
  public submitted:boolean = false;
  public firstName:AbstractControl;
  public lastName:AbstractControl;
  public tel:AbstractControl;
  public location:AbstractControl;
  public itype:AbstractControl;
  public description:AbstractControl;
  public positionObs: Observable<Position>;
  public position: Position;
  public latitude: any;
  public longitude: any;
  constructor(fb:FormBuilder , private http:Http, public gService: GeolocationService) {

    this.reportForm = fb.group({
      'firstName': ['', Validators.compose([Validators.required])],
      'lastName': ['', Validators.compose([Validators.required])],
      'tel': [''],
      'location': ['', Validators.compose([Validators.required])],
      'description': ['', Validators.compose([Validators.required])],
      'itype' : ['', Validators.compose([Validators.required])],
    });
    this.firstName = this.reportForm.controls['firstName'];
    this.lastName = this.reportForm.controls['lastName'];
    this.tel = this.reportForm.controls['tel'];
    this.location = this.reportForm.controls['location'];
    this.itype = this.reportForm.controls['itype'];
    this.description = this.reportForm.controls['description'];

    //this.positionObs = this.gService.getCurrentPosition();
    //this.position = this.getValueFromObservable();
    //console.log(this.positionObs);
    //console.log(this.position);

    navigator.geolocation.getCurrentPosition(this.successCallback,this.errorCallback,this.options);
  }
  getValueFromObservable():Position {
    let output;
    this.positionObs.subscribe(
        (data:any) => {
            output = data
        }
    ).unsubscribe();
    return output;
  }

  successCallback = (position)=> {
            this.latitude = position.coords.latitude;
            this.longitude = position.coords.longitude;
            console.log(this.latitude);
            console.log(this.longitude);
    }

    errorCallback = (error) => {
            let errorMessage = 'Unknown error';
            switch(error.code) {
              case 1:
                errorMessage = 'Permission denied';
                break;
              case 2:
                errorMessage = 'Position unavailable';
                break;
              case 3:
                errorMessage = 'Timeout';
                break;
            }
            console.log(errorMessage);
          };

      options = {
            enableHighAccuracy: true,
            timeout: 1000,
            maximumAge: 0
          };
  public SubmitForm(values:Object):void {
    
    this.submitted = true;
    this.formToSend = {
      "firstName" : values['firstName'],
      "lastName" : values['lastName'],
      "telephone" : values['tel'],
      "location" : values['location'],
      "description" : values['description'],
      "crisisType" : values['itype'],
      "latitude" : this.latitude,
      "longitude" : this.longitude,

    }

    this.addForms(this.formToSend);
    //this.formToSend = this.getForms();
    //console.log(this.formToSend);
  }

  getForms(): Observable<FormReport[]> {
    return this.http.get(this.formsUrl)
                    .map((res:Response) => res.json())
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

  }
//  Observable<FormReport[]>
  addForms(body:Object) {
    let bodyString = JSON.stringify(body); // Stringify payload
    let headers      = new Headers({ 'Content-Type': 'application/json'}); // ... Set content type to JSON
    let options       = new RequestOptions({ headers: headers }); // Create a request option

    console.log("Starting to post a request");
    console.log(bodyString);
    this.http.post(this.formsUrl, bodyString, options) // ...using post request
                         .map((res:Response) => console.log(res.text())) // ...and calling .json() on the response to return data
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error')).subscribe(data => console.log(data));

    console.log("Post success");

  }
}
