import {Component, ElementRef} from '@angular/core';
import * as GoogleMapsLoader from 'google-maps';

@Component({
  selector: 'google-maps',
  styleUrls: ['./googleMaps.scss'],
  templateUrl: './googleMaps.html',
})
export class GoogleMaps {

  constructor(private _elementRef:ElementRef) {
  }

  ngAfterViewInit() {
    /*
    let el = this._elementRef.nativeElement.querySelector('.google-maps');

    // TODO: do not load this each time as we already have the library after first attempt
    GoogleMapsLoader.load((google) => {
      var map = new google.maps.Map(el, {
          zoom: 11,
          center: {lat: 41.876, lng: -87.624}
        });
      new google.maps.KmlLayer({
        url : 'https://data.gov.sg/dataset/dengue-clusters/resource/ce15cf3c-702c-4573-96db-69c50e6cb7f8/view/7bb2a106-0e86-4f18-873b-726bb5b6f922',
        map : new google.maps.Map(el, {
          center: {lat: 1.3756324, lng: 103.9351488},
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        })
      })
      ,
      new google.maps.Map(el, {
        center: new google.maps.LatLng(1.34, 103.68),
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });
    
    });
    */
  }
}
