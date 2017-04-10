import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { PMReportComponent } from './pmreport.component';
import { PMReportService } from './pmreport.service';
import { routing } from './pmreport.routing';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [
    PMReportComponent
  ],
  providers: [
  	PMReportService,
  ]
})
export class PMReportModule {}