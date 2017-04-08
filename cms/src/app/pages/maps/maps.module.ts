import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './maps.routing';
import { Maps } from './maps.component';
import { DengueMaps } from './components/DengueMaps/DengueMaps.component';
import { HazeMaps } from './components/HazeMaps/HazeMaps.component';
import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCp2XAJXj7C3KQce9AgHlYnAzFoUTAl5_I'
    })
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
