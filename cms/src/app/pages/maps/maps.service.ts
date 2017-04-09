import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {Report} from './formreport';
import {BASEURL} from "../baseURL";

@Injectable()
export class MapsService {
  private formsUrl = BASEURL + "reportList/verified=True/";
  constructor(private http: Http){};
  getReportList(): Observable<Report[]> {
    return this.http.get(this.formsUrl)
                    .map((res:Response) => res.json() as Report)
                    .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }
}
