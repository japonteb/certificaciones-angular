import { Injectable } from '@angular/core';
import { HttpService } from '@core-service/http.service';
import { environment } from 'src/environments/environment';
import { Certificacion } from '../model/certificacion';

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
    return this.http.doPost<Certificacion, Certificacion>(
      `${environment.endpoint}/certificaciones`,
      certificacion,
      this.http.optsName('crear certificaciones')
    );
  }

  public eliminar(certificacionId: number) {
    return this.http.doDelete<boolean>(
      `${environment.endpoint}/certificaciones/${certificacionId}`,
      this.http.optsName('eliminar certificaciones')
    );
  }
}
