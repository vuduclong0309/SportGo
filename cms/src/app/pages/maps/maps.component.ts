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
  mapService: MapsService;
  public reportList:any;
  constructor(private _mapService: MapsService){
  		this.reportList = this._mapService.getReportList();
  		console.log(this.reportList);
      navigator.geolocation.getCurrentPosition(this.successCallback,this.errorCallback,this.options);
  }

  successCallback = (position)=> {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
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

  private convertStringToNumber(value: string): number {
        return +value;
    }

  
}
