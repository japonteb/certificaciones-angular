import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SecurityGuard } from '@core/guard/security.guard';
import { HomeComponent } from '@home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [SecurityGuard] },
  {
    path: 'producto',
    loadChildren: () =>
      import('@producto/producto.module').then((mod) => mod.ProductoModule),
  },
  {
    path: 'certificacion',
    loadChildren: () =>
      import('@certificacion/certificacion.module').then(
        (mod) => mod.CertificacionModule
      ),
  },
  {
    path: 'cliente',
    loadChildren: () =>
      import('@cliente/cliente.module').then((mod) => mod.ClienteModule),
  },
  {
    path: 'examen',
    loadChildren: () =>
      import('@examen/examen.module').then((mod) => mod.ExamenModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
