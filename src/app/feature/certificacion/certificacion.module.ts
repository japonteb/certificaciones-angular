import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CertificacionRoutingModule } from './certificacion-routing.module';
import { CertificacionComponent } from './components/certificacion/certificacion.component';
import { CrearCertificacionComponent } from './components/crear-certificacion/crear-certificacion.component';
import { BorrarCertificacionComponent } from './components/borrar-certificacion/borrar-certificacion.component';
import { ListarCertificacionComponent } from './components/listar-certificacion/listar-certificacion.component';

@NgModule({
  declarations: [
    CertificacionComponent,
    CrearCertificacionComponent,
    BorrarCertificacionComponent,
    ListarCertificacionComponent,
  ],
  imports: [CommonModule, CertificacionRoutingModule],
})
export class CertificacionModule {}
