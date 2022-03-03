import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Examen } from '../model/examen';
import { ExamenCertificacion } from '../model/examen-certificacion';

@Injectable()
export class ExamenService {
  constructor(protected http: HttpService) {}

  public consultarPorClientId(clienteId: number) {
    return this.http.doGet<ExamenCertificacion[]>(
      `${environment.endpoint}/examenes/cliente/${clienteId}`,
      this.http.optsName('consultar examenes por id de cliente')
    );
  }

  public guardar(examen: Examen) {
    examen.fechaPresentacion =
      examen.fechaPresentacion.replace('T', ' ') + ':00';
    return this.http.doPost<Examen, boolean>(
      `${environment.endpoint}/examenes`,
      examen,
      this.http.optsName('crear examenes')
    );
  }
}
