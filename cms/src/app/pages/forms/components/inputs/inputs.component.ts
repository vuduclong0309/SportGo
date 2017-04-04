import {Component} from '@angular/core';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'inputs',
  templateUrl: './inputs.html',
})
export class Inputs {
	public reportList = [
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
  	constructor() {
  		
   }
}
