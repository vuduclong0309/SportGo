import {Component} from '@angular/core';

@Component({
  selector: 'agency',
  templateUrl: 'agency.html', 
})
export class Agency {
  public AgencyList: Array<Object>;
  constructor() {
  		this.AgencyList = [
  		{
  			name: "Emergency Ambulance – Singapore Civil Defence Force (SCDF)",
  			tel: "1800 286 5555",
  		},
  		{
  			name: "Gas Leak Control",
  			tel: "+123 345 6789",
  		},
  		{
  			name: "Emergency and evacuation",
  			tel: "+123 345 6789",
  		},
  		{
  			name: "Fire Fighter",
  			tel: "+123 345 6789",
  		}
  		
  		]
  }
}