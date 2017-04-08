import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './maps.routing';
import { Maps } from './maps.component';
import { GoogleMaps } from './components/googleMaps/googleMaps.component';
import { LeafletMaps } from './components/leafletMaps/leafletMaps.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    Maps,
    GoogleMaps,
    LeafletMaps
  ],
  providers: [
  ]
})
export class MapsModule {}
