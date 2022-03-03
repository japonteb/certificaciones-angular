import { Component, OnInit } from '@angular/core';
import { Certificacion } from '@producto/shared/model/certificacion';
import { CertificacionService } from '@producto/shared/service/certificacion.service';
import { Observable } from 'rxjs';

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

  async eliminarCertificacion(certificacion: Certificacion) {
    if (confirm('¿Realmente quiere borrar la certificación?')) {
      try {
        await this.certificacionService.eliminar(certificacion).toPromise();
        this.listaCertificaciones = this.certificacionService.consultar();
      } catch (error) {
        console.log(error);
      }
    }
  }
}
