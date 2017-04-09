import {Component} from '@angular/core';

import {MapsService} from './maps.service';

@Component({
  selector: 'maps',
  templateUrl: 'maps.html', 
  styleUrls: ['maps.component.css'],
})
export class Maps {

	title: string = 'Crisis Map';
  lat: number = 0;
  lng: number = 0;
  lat2: number = 1;
  mapService: MapsService;
  public reportList:any;
  constructor(private _mapService: MapsService){
  		this.reportList = this._mapService.getReportList();
  		console.log(this.reportList);
  }

  private convertStringToNumber(value: string): number {
        return +value;
    }

  //this.reportList = this.mapService.getReportList();

}
