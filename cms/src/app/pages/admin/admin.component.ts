import {Component} from '@angular/core';
import {AdminService} from './admin.service';
import {Report} from './report'
@Component({
  selector: 'admin',
  templateUrl: './admin.html'
})
export class AdminComponent {
  public reportList:Array<Report>;

  constructor(private _adminService:AdminService) {
  }

  ngOnInit() {
    this.loadReport();
  }

  private loadReport() {
    this.reportList = this._adminService.getReportList();
  }

  private deleteCrisis(values:Report){
  		this._adminService.deleteCrisis(values);
  };
}