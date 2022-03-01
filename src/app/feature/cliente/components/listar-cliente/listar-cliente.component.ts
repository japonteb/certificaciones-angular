import { Component, OnInit } from '@angular/core';
import { Cliente } from '@cliente/shared/model/cliente';
import { ClienteService } from '@cliente/shared/service/cliente.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-cliente',
  templateUrl: './listar-cliente.component.html',
  styleUrls: ['./listar-cliente.component.scss'],
})
export class ListarClienteComponent implements OnInit {
  public listaClientes: Observable<Cliente[]>;
  columnasAMostrar = ['nombre', 'tipoCliente'];

  constructor(protected clienteService: ClienteService) {}

  ngOnInit(): void {
    this.listaClientes = this.clienteService.consultar();
  }
}
