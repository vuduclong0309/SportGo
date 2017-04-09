import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Report} from './formreport';
@Injectable()
export class MapsService {
  private formsUrl = "http://172.20.114.92:8000/CMS_System/reportList/";
  constructor(private http: Http){};
  getReportList(): Observable<Report[]> {
    return this.http.get(this.formsUrl)
                    .map((res:Response) => res.json() as Report)
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
