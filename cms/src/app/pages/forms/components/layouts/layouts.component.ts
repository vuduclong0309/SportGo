import {Component} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'layouts',
  templateUrl: './layouts.html',
})
export class Layouts {

  public error: any;
  public reportForm:FormGroup;
  public submitted:boolean = false;

  constructor(fb:FormBuilder) {

    this.reportForm = fb.group({
      'firstName': ['', Validators.compose([Validators.required])],
      'lastName': ['', Validators.compose([Validators.required)],
      'tel': [''],
      'location': ['', Validators.compose([Validators.required)],
      'description': ['', Validators.compose([Validators.required)],
      'itype' : ['', Validators.compose([Validators.required)],
    });
    this.firstName = this.reportForm.controls['firstName'];
    this.lastName = this.reportForm.controls['lastName'];
    this.tel = this.reportForm.controls['tel'];
    this.location = this.reportForm.controls['location'];
    this.itype = this.reportForm.controls['itype'];
    this.description = this.reportForm.controls['description']
  }

  public SubmitForm():void {
    this.submitted = true;
    this.reportForm = fb.group({
      'firstName': ['', Validators.compose([Validators.required])],
      'lastName': ['', Validators.compose([Validators.required)],
      'tel': [''],
      'location': ['', Validators.compose([Validators.required)],
      'description': ['', Validators.compose([Validators.required)],
      'itype' : ['', Validators.compose([Validators.required)],
    });
    
  }
}
