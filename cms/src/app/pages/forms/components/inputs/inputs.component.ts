import {Component, Inject} from '@angular/core';
import {FormReport} from '../layouts/formsreport';
import { Http, Response, Headers, RequestOptions } from '@angular/http'
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import {Observable} from 'rxjs/Rx';
import { CeiboShare } from 'ng2-social-share';
import { DOCUMENT } from '@angular/platform-browser';
import { BASEURL } from '../../../baseURL';

@Component({
  selector: 'inputs',
  templateUrl: './inputs.html',
})

//@Inject(DOCUMENT)
export class Inputs {


  private hazeReport:any
  private dengueReport:any
  private report:Object
  //
  // variable to share
  //public repoUrl = 'https://github.com/Epotignano/ng2-social-share';
  //public repo2 = 'http://10.27.249.249:8080/#/pages/forms/layouts';
  //public imageUrl = 'https://avatars2.githubusercontent.com/u/10674541?v=3&s=200';
  public repoUrl:any;
  //public imageUrl:any;

  constructor(private http:Http,  @Inject(DOCUMENT)private document: any){
    this.repoUrl = this.document.location.href;
    this.Reports = this.getForms();
  }

  private formsUrl1 = "http://10.27.127.105:8000/CMS_System/reportList/Haze/";
  private formsUrl2 = "http://10.27.127.105:8000/CMS_System/reportList/Dengue/";
  private formsUrl = BASEURL + "reportList/verified=True/"
  private Reports = this.getForms();



  getForms(): Observable<FormReport[]> {
    return this.http.get(this.formsUrl)
                    .map((res:Response) => res.json() as FormReport)
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

}
