export class Cliente {
  id: number;
  nombre: string;
  tipoCliente: number;

  constructor(id: number, nombre: string, tipoCliente: number) {
    this.id = id;
    this.nombre = nombre;
    this.tipoCliente = tipoCliente;
  }
}
