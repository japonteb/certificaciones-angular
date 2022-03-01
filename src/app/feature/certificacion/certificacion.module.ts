import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { AppMaterialModule } from './../../shared/app-material/app.material.module.ts/app.material.module.ts.module';
import { CertificacionRoutingModule } from './certificacion-routing.module';
import { BorrarCertificacionComponent } from './components/borrar-certificacion/borrar-certificacion.component';
import { CertificacionComponent } from './components/certificacion/certificacion.component';
import { CrearCertificacionComponent } from './components/crear-certificacion/crear-certificacion.component';
import { ListarCertificacionComponent } from './components/listar-certificacion/listar-certificacion.component';
import { CertificacionService } from './shared/service/certificacion.service';

@NgModule({
  declarations: [
    CertificacionComponent,
    CrearCertificacionComponent,
    BorrarCertificacionComponent,
    ListarCertificacionComponent,
  ],
  imports: [
    CommonModule,
    CertificacionRoutingModule,
    AppMaterialModule,
    SharedModule,
  ],
  providers: [CertificacionService],
})
export class CertificacionModule {}
