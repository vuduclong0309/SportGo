import { Routes, RouterModule }  from '@angular/router';

import { Maps } from './maps.component';

import { DengueMaps } from './components/DengueMaps/DengueMaps.component';
import { HazeMaps } from './components/HazeMaps/HazeMaps.component';


// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Maps,
    children: [
      { path: 'denguemaps', component: DengueMaps },
      { path: 'hazemaps', component: HazeMaps }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
