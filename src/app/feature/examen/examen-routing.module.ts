import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { CrearExamenComponent } from "./components/crear-examen/crear-examen.component";
import { ExamenComponent } from "./components/examen/examen.component";

const routes: Routes = [
  {
    path: "",
    component: ExamenComponent,
    children: [
      {
        path: "crear",
        component: CrearExamenComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamenRoutingModule {}
