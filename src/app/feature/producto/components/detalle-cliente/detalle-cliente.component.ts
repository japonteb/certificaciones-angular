import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cliente } from '@producto/shared/model/cliente';
import { ExamenCertificacion } from '@producto/shared/model/examen-certificacion';
import { ClienteService } from '@producto/shared/service/cliente.service';
import { ExamenService } from '@producto/shared/service/examen.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detalle-cliente',
  templateUrl: './detalle-cliente.component.html',
  styleUrls: ['./detalle-cliente.component.scss'],
})
export class DetalleClienteComponent implements OnInit {
  public cliente: Cliente;
  public listaExamenes: Observable<ExamenCertificacion[]>;
  columnasAMostrar = ['nombre', 'detalle', 'fechaPresentacion', 'precioTotal'];
  existeError = false;
  mensajeError: string;

  constructor(
    protected clienteService: ClienteService,
    private activatedRouter: ActivatedRoute,
    protected examenService: ExamenService
  ) {}

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params.id;
    if (id !== undefined) {
      this.consultarPorId(id);
      this.consultarExamenesPorClienteId(id);
    }
  }

  consultarPorId(clienteId: number) {
    this.clienteService.consultarPorId(clienteId).subscribe(
      (data) => {
        this.cliente = data;
      },
      (error) => {
        this.mensajeError = error.error.mensaje;
        this.existeError = true;
      }
    );
  }

  consultarExamenesPorClienteId(clienteId: number) {
    this.listaExamenes = this.examenService.consultarPorClientId(clienteId);
  }
}
