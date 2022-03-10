import { NgModule } from '@angular/core';
import { AppMaterialModule } from '@shared/app-material/app-material.module';
import { SharedModule } from '@shared/shared.module';
import { CrearCertificacionComponent } from './components/crear-certificacion/crear-certificacion.component';
import { CrearExamenComponent } from './components/crear-examen/crear-examen.component';
import { DetalleClienteComponent } from './components/detalle-cliente/detalle-cliente.component';
import { ListarCertificacionComponent } from './components/listar-certificacion/listar-certificacion.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { ProductoRoutingModule } from './producto-routing.module';
import { CertificacionService } from './shared/service/certificacion.service';
import { ClienteService } from './shared/service/cliente.service';
import { ExamenService } from './shared/service/examen.service';

@NgModule({
  declarations: [
    CrearCertificacionComponent,
    ListarCertificacionComponent,
    DetalleClienteComponent,
    ListarClienteComponent,
    CrearExamenComponent,
  ],
  imports: [ProductoRoutingModule, SharedModule, AppMaterialModule],
  providers: [CertificacionService, ClienteService, ExamenService],
})
export class ProductoModule {}
