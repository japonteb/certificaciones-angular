import { Component, OnInit } from '@angular/core';
import { Certificacion } from '@producto/shared/model/certificacion';
import { CertificacionService } from '@producto/shared/service/certificacion.service';
import { Observable } from 'rxjs';

const MENSAJE_CONFIRMAR_ELIMINAR_CERTIFICACION =
  '¿Realmente quiere borrar la certificación?';

@Component({
  selector: 'app-listar-certificacion',
  templateUrl: './listar-certificacion.component.html',
  styleUrls: ['./listar-certificacion.component.scss'],
})
export class ListarCertificacionComponent implements OnInit {
  public listaCertificaciones: Observable<Certificacion[]>;
  columnasAMostrar = ['nombre', 'detalle', 'duracion', 'precio', 'borrar'];

  constructor(protected certificacionService: CertificacionService) {}

  ngOnInit(): void {
    this.listaCertificaciones = this.certificacionService.consultar();
  }

  async eliminarCertificacion(certificacionId: number) {
    if (this.confirmarEliminarCertificacion()) {
      try {
        await this.certificacionService.eliminar(certificacionId).toPromise();
        this.listaCertificaciones = this.certificacionService.consultar();
      } catch (error) {
        console.log(error);
      }
    }
  }

  confirmarEliminarCertificacion() {
    return confirm(MENSAJE_CONFIRMAR_ELIMINAR_CERTIFICACION);
  }
}
