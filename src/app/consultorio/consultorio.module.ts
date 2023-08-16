import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultorioRoutingModule } from './consultorio-routing.module';
import {PacientesComponent} from "./components/pacientes/pacientes.component";


@NgModule({
  declarations: [
    PacientesComponent
  ],
  imports: [
    CommonModule,
    ConsultorioRoutingModule
  ]
})
export class ConsultorioModule { }
