export class Certificacion {
  id: number;
  nombre: string;
  detalle: string;
  duracion: number;
  precio: number;

  constructor(
    id: number,
    nombre: string,
    detalle: string,
    duracion: number,
    precio: number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.detalle = detalle;
    this.duracion = duracion;
    this.precio = precio;
  }
}
