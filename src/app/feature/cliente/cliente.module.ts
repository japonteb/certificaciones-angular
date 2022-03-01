import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AppMaterialModule } from './../../shared/app-material/app.material.module.ts/app.material.module.ts.module';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { ClienteService } from './shared/service/cliente.service';

@NgModule({
  declarations: [ClienteComponent, ListarClienteComponent],
  imports: [CommonModule, ClienteRoutingModule, AppMaterialModule],
  providers: [ClienteService],
})
export class ClienteModule {}
