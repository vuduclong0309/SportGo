import { Routes, RouterModule }  from '@angular/router';

import { Agency } from './agency.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Agency,
  }
];

export const routing = RouterModule.forChild(routes);
