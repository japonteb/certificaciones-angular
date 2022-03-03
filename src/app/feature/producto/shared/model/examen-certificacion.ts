export class ExamenCertificacion {
  id: number;
  nombre: string;
  detalle: string;
  fechaPresentacion: string;
  precio: number;

  constructor(
    id: number,
    nombre: string,
    detalle: string,
    fechaPresentacion: string,
    precio: number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.detalle = detalle;
    this.fechaPresentacion = fechaPresentacion;
    this.precio = precio;
  }
}
