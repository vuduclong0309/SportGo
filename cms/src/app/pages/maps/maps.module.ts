import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './maps.routing';
import { Maps } from './maps.component';
import { DengueMaps } from './components/DengueMaps/DengueMaps.component';
import { HazeMaps } from './components/HazeMaps/HazeMaps.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Maps,
    DengueMaps,
    HazeMaps
  ],
  providers: [
  ]
})
export class MapsModule {}
