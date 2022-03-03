import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CertificacionComponent } from './components/certificacion/certificacion.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { CrearCertificacionComponent } from './components/crear-certificacion/crear-certificacion.component';
import { CrearExamenComponent } from './components/crear-examen/crear-examen.component';
import { DetalleClienteComponent } from './components/detalle-cliente/detalle-cliente.component';
import { ExamenComponent } from './components/examen/examen.component';
import { ListarCertificacionComponent } from './components/listar-certificacion/listar-certificacion.component';
import { ListarClienteComponent } from './components/listar-cliente/listar-cliente.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  {
    path: '',
    component: ProductoComponent,
    children: [],
  },

  {
    path: 'certificaciones',
    component: CertificacionComponent,
    children: [
      {
        path: 'crear',
        component: CrearCertificacionComponent,
      },
      {
        path: 'listar',
        component: ListarCertificacionComponent,
      },
    ],
  },

  {
    path: 'clientes',
    component: ClienteComponent,
    children: [
      {
        path: 'listar',
        component: ListarClienteComponent,
      },
      {
        path: 'listar/detalle/:id',
        component: DetalleClienteComponent,
      },
    ],
  },

  {
    path: 'examenes',
    component: ExamenComponent,
    children: [
      {
        path: 'crear',
        component: CrearExamenComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductoRoutingModule {}
