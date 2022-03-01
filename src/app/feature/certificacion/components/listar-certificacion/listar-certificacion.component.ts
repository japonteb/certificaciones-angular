import { Component, OnInit } from '@angular/core';
import { Certificacion } from '@certificacion/shared/model/certificacion';
import { CertificacionService } from '@certificacion/shared/service/certificacion.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-certificacion',
  templateUrl: './listar-certificacion.component.html',
  styleUrls: ['./listar-certificacion.component.scss'],
})
export class ListarCertificacionComponent implements OnInit {
  public listaCertificaciones: Observable<Certificacion[]>;
  columnasAMostrar = ['nombre', 'detalle', 'duracion', 'precio'];

  constructor(protected certificacionService: CertificacionService) {}

  ngOnInit(): void {
    this.listaCertificaciones = this.certificacionService.consultar();
  }
}
