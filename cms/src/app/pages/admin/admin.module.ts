import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminService } from './admin.service';
import { routing } from './admin.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    AdminComponent
  ],
  providers: [
    AdminService,
  ]
})
export class AdminModule {}
