import {Component} from '@angular/core';

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

}
