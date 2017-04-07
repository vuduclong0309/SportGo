import {Component} from '@angular/core';
import {AdminService} from './admin.service';

@Component({
  selector: 'admin',
  templateUrl: './admin.html'
})
export class AdminComponent {
  public reportList:Array<Object>;

  constructor(private _adminService:AdminService) {
  }

  ngOnInit() {
    this.loadReport();
  }

  private loadReport() {
    this.reportList = this._adminService.getReportList();
  }

  private deleteCrisis(values:Object){
  		console.log("deleted");
  };
}