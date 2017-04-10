import { Routes, RouterModule }  from '@angular/router';
import { PMReportComponent } from './pmreport.component';

const routes: Routes = [
  {
    path: '',
    component: PMReportComponent
  }
];

export const routing = RouterModule.forChild(routes);