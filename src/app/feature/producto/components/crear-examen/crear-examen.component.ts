import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Certificacion } from '@producto/shared/model/certificacion';
import { Cliente } from '@producto/shared/model/cliente';
import { Examen } from '@producto/shared/model/examen';
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
  examen: Examen;
  public listaCertificaciones: Certificacion[];
  public listaClientes: Cliente[];

  constructor(
    protected examenService: ExamenService,
    protected certificacionService: CertificacionService,
    protected clienteService: ClienteService
  ) {}

  ngOnInit(): void {
    this.construirFormularioExamen();
    this.cargarListas();
  }

  async cargarListas() {
    try {
      this.listaCertificaciones = await this.certificacionService
        .consultar()
        .toPromise()
        .then();
      this.listaClientes = await this.clienteService
        .consultar()
        .toPromise()
        .then();
    } catch (error) {
      console.log(error.error.mensaje);
    }
  }
  async crear() {
    console.log(this.examenForm.value);
    try {
      this.examen = await this.examenService
        .guardar(this.examenForm.value)
        .toPromise()
        .then();
    } catch (error) {
      console.log(error.error.mensaje);
    }
  }

  private construirFormularioExamen() {
    this.examenForm = new FormGroup({
      id: new FormControl(),
      comandoCliente: new FormControl(),
      comandoCertificacion: new FormControl(),
      fechaPresentacion: new FormControl('', [Validators.required]),
      precioTotal: new FormControl(),
    });
  }
}
