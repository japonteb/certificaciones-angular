import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ClienteRoutingModule } from "./cliente-routing.module";
import { ClienteComponent } from "./components/cliente/cliente.component";
import { CrearClienteComponent } from "./components/crear-cliente/crear-cliente.component";
import { ListarClienteComponent } from "./components/listar-cliente/listar-cliente.component";
import { BorrarClienteComponent } from "./components/borrar-cliente/borrar-cliente.component";

@NgModule({
  declarations: [
    ClienteComponent,
    CrearClienteComponent,
    ListarClienteComponent,
    BorrarClienteComponent,
  ],
  imports: [CommonModule, ClienteRoutingModule],
})
export class ClienteModule {}
