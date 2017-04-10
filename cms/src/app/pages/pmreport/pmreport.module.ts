import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { PMReportComponent } from './pmreport.component';
import { PMReportService } from './pmreport.service';
import { routing } from './pmreport.routing';
import { NgaModule } from '../../theme/nga.module';

@NgModule({
  imports: [
    CommonModule,
    NgaModule,
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
