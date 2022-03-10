import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '@home/home.component';
import { CrearExamenComponent } from './components/crear-examen/crear-examen.component';
import { DetalleClienteComponent } from './components/detalle-cliente/detalle-cliente.component';
import { ListarCertificacionComponent } from './components/listar-certificacion/listar-certificacion.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [],
  },

  {
    path: 'certificaciones',
    component: ListarCertificacionComponent,
  },

  {
    path: 'clientes',
    component: ListarClienteComponent,
  },
  {
    path: 'clientes/detalle/:id',
    component: DetalleClienteComponent,
  },

  {
    path: 'examenes',
    component: CrearExamenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoRoutingModule {}
