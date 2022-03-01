import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Certificacion } from './../model/certificacion';

@Injectable()
export class CertificacionService {
  constructor(protected http: HttpService) {}

  public consultar() {
    return this.http.doGet<Certificacion[]>(
      `${environment.endpoint}/certificaciones`,
      this.http.optsName('consultar certificaciones')
    );
  }

  public guardar(certificacion: Certificacion) {
    return this.http.doPost<Certificacion, boolean>(
      `${environment.endpoint}/certificaciones`,
      certificacion,
      this.http.optsName('crear/actualizar certificaciones')
    );
  }

  public eliminar(certificacion: Certificacion) {
    return this.http.doDelete<boolean>(
      `${environment.endpoint}/certificaciones/${certificacion.id}`,
      this.http.optsName('eliminar certificaciones')
    );
  }
}