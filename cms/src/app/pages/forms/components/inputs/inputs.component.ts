import {Component} from '@angular/core';
import {FormReport} from '../layouts/formsreport';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'inputs',
  templateUrl: './inputs.html',
})
export class Inputs {

  private HAZEREPORT: FormReport[] = [
      {id : "Report-No1", firstName : "Phan Anh" , lastName : "Tuan" , telephone : "+(65) 97742291", location : "NTU Hall 14",
       description : "A Strong Haze Status nearby. Feel very bad when stepping out from your room. Everyone around should take care yourself",
        crisisType : "Haze" , crisisState : "Before Crisis"},
      {id : "Report-No5", firstName : "Vu" , lastName : "Duc Long" , telephone : "91238762", location : "City Hall",
        description : "Heavy Haze right outside of windows of company. Expand from my home to workplace (Clementi to City Hall)",
        crisisType : "Haze" , crisisState : "In Crisis"},
      {id : "Report-No8", firstName : "Doan Do" , lastName : "Bao Nguyen" , telephone : "97744001", location : "Pasir Ris",
         description : "Stay in hall with my computer. Avoid any action outdoor since it will harm your health very bad",
        crisisType : "Haze" , crisisState : "Before Crisis"}
  ];

  private DENGUEREPORT : FormReport[] = [
    {id : "Report-No3", firstName : "Nguyen" , lastName : "Minh Duc" , telephone : "87742351", location : "Woodland",
     description : "Mostique all around. Everyone should find a way to reduce them",
     crisisType : "Dengue" , crisisState : "Before Crisis"},
    {id : "Report-No4", firstName : "Micheal" , lastName : "Le" , telephone : "91358262", location : "Marina Bay Sand",
      description : "Dengue and Heavy Dengue",
      crisisType : "Dengue" , crisisState : "Before Crisis"},
    {id : "Report-No10", firstName : "Tran Truong" , lastName : "Giang" , telephone : "94244091", location : "NTU Hall 10",
       description : "Should stay in hall",
       crisisType : "Dengue" , crisisState : "After Crisis"}
  ];

  private hazeReport:any
  private dengueReport:any
  private report:Object

  constructor(private http:Http){}

  private formsUrl1 = "http://10.27.127.105:8000/CMS_System/reportList/Haze/";
  private formsUrl2 = "http://10.27.127.105:8000/CMS_System/reportList/Dengue/";
  private formsUrl = "http://10.27.127.105:8000/CMS_System/reportList/"
  private formReport = this.getForms();



  getForms(): Observable<FormReport[]> {
    return this.http.get(this.formsUrl)
                    .map((res:Response) => res.json() as FormReport)
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
