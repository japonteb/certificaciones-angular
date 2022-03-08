import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Certificacion } from '@producto/shared/model/certificacion';
import { CertificacionService } from '@producto/shared/service/certificacion.service';

@Component({
  selector: 'app-crear-certificacion',
  templateUrl: './crear-certificacion.component.html',
  styleUrls: ['./crear-certificacion.component.scss'],
})
export class CrearCertificacionComponent implements OnInit {
  certificacionForm: FormGroup;
  certificacion: Certificacion;
  existeError = false;
  mensajeError: string;

  constructor(protected certificacionServices: CertificacionService) {}

  ngOnInit(): void {
    this.construirFormularioCertificacion();
  }

  async crear() {
    try {
      this.certificacion = await this.certificacionServices
        .guardar(this.certificacionForm.value)
        .toPromise()
        .then();
    } catch (error) {
      this.mensajeError = error.error.mensaje;
      this.existeError = true;
    }
  }

  public construirFormularioCertificacion() {
    this.certificacionForm = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      detalle: new FormControl('', [Validators.required]),
      duracion: new FormControl('', [Validators.required]),
      precio: new FormControl('', [Validators.required]),
    });
  }
}
