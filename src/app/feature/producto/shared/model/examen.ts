import { Certificacion } from './certificacion';
import { Cliente } from './cliente';

export class Examen {
  id: number;
  comandoCliente: Cliente;
  comandoCertificacion: Certificacion;
  fechaPresentacion: string;
  precio: number;

  constructor(
    id: number,
    cliente: Cliente,
    certificacion: Certificacion,
    fechaPresentacion: string,
    precio: number
  ) {
    this.id = id;
    this.comandoCliente = cliente;
    this.comandoCertificacion = certificacion;
    this.fechaPresentacion = fechaPresentacion;
    this.precio = precio;
  }
}
