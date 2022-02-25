import { Component } from "@angular/core";
import { MenuItem } from "@core/modelo/menu-item";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "app-base";
  public companies: MenuItem[] = [
    { url: "/home", nombre: "Inicio" },
    { url: "/certificacion", nombre: "Certificacion" },
    { url: "/cliente", nombre: "Cliente" },
    { url: "/examen", nombre: "Examen" },
  ];
}
