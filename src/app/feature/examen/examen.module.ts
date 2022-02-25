import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExamenRoutingModule } from './examen-routing.module';
import { CrearExamenComponent } from './components/crear-examen/crear-examen.component';
import { ExamenComponent } from './components/examen/examen.component';


@NgModule({
  declarations: [
    CrearExamenComponent,
    ExamenComponent
  ],
  imports: [
    CommonModule,
    ExamenRoutingModule
  ]
})
export class ExamenModule { }
