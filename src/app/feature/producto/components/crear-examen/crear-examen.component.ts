import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Certificacion } from '@producto/shared/model/certificacion';
import { Cliente } from '@producto/shared/model/cliente';
import { CertificacionService } from '@producto/shared/service/certificacion.service';
import { ClienteService } from '@producto/shared/service/cliente.service';
import { ExamenService } from '@producto/shared/service/examen.service';

@Component({
  selector: 'app-crear-examen',
  templateUrl: './crear-examen.component.html',
  styleUrls: ['./crear-examen.component.scss'],
})
export class CrearExamenComponent implements OnInit {
  examenForm: FormGroup;
  clientesFormControl = new FormControl();
  examenCreado: boolean;
  public listaCertificaciones: Certificacion[];
  public listaClientes: Cliente[];
  existeError = false;
  mensajeError: string;

  constructor(
    protected examenService: ExamenService,
    protected certificacionService: CertificacionService,
    protected clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.construirFormularioExamen();
    this.cargarListasCertificaciones();
    this.cargarListasClientes();
  }

  async cargarListasCertificaciones() {
    try {
      this.listaCertificaciones = await this.certificacionService
        .consultar()
        .toPromise()
        .then();
    } catch (error) {
      this.mensajeError = error.error.mensaje;
      this.existeError = true;
    }
  }

  async cargarListasClientes() {
    try {
      this.listaClientes = await this.clienteService
        .consultar()
        .toPromise()
        .then();
    } catch (error) {
      this.mensajeError = error.error.mensaje;
      this.existeError = true;
    }
  }

  async crear() {
    try {
      this.examenCreado = await this.examenService
        .guardar(this.examenForm.value)
        .toPromise()
        .then();
    } catch (error) {
      this.mensajeError = error.error.mensaje;
      this.existeError = true;
    }
  }

  public construirFormularioExamen() {
    this.examenForm = new FormGroup({
      id: new FormControl(),
      comandoCliente: new FormControl(),
      comandoCertificacion: new FormControl(),
      fechaPresentacion: new FormControl('', [Validators.required]),
      precioTotal: new FormControl(),
    });
  }
}
