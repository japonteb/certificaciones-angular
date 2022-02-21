import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CrearCertificacionComponent } from "./components/crear-certificacion/crear-certificacion.component";
import { ListarCertificacionComponent } from "./components/listar-certificacion/listar-certificacion.component";
import { BorrarCertificacionComponent } from "./components/borrar-certificacion/borrar-certificacion.component";
import { CertificacionComponent } from "./components/certificacion/certificacion.component";

const routes: Routes = [
  {
    path: "",
    component: CertificacionComponent,
    children: [
      {
        path: "crear",
        component: CrearCertificacionComponent,
      },
      {
        path: "listar",
        component: ListarCertificacionComponent,
      },
      {
        path: "borrar",
        component: BorrarCertificacionComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CertificacionRoutingModule {}
