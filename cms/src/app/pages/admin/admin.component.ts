import {Component} from '@angular/core';
import {AdminService} from './admin.service';

@Component({
  selector: 'admin',
  templateUrl: './admin.html'
})
export class AdminComponent {
  public reportList:Array<Object>;

  constructor() {
  }

  ngOnInit() {
    this.loadReport();
  }

  private loadReport() {
    this.reportList = [
    {
        "id": 1,
        "firstName": "Michael",
        "lastName": "Le",
        "telephone": 12345678,
        "location": "NTU",
        "description": "reporting haze",
        "crisisType": "Haze"
    },
    {
        "id": 2,
        "firstName": "Kelvin",
        "lastName": "Chong",
        "telephone": 98765432,
        "location": "East Coast Park",
        "description": "reporting dengue",
        "crisisType": "Dengue"
    },
    {
        "id": 5,
        "firstName": "Tuan",
        "lastName": "Phan",
        "telephone": 98762345,
        "location": "NTU",
        "description": "very haze",
        "crisisType": "Haze"
    }];
  }

  private deleteCrisis(values:Object){
  		console.log("deleted");
  };
}