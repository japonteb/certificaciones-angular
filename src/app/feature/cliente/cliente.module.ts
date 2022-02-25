import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ClienteRoutingModule } from "./cliente-routing.module";
import { ClienteComponent } from "./components/cliente/cliente.component";
import { ListarClienteComponent } from "./components/listar-cliente/listar-cliente.component";

@NgModule({
  declarations: [ClienteComponent, ListarClienteComponent],
  imports: [CommonModule, ClienteRoutingModule],
})
export class ClienteModule {}
