import { HttpResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';
import { Certificacion } from '../model/certificacion';
import { CertificacionService } from './certificacion.service';

describe('CertificacionService', () => {
  let httpMock: HttpTestingController;
  let service: CertificacionService;
  const apiEndpointCertificacionConsulta = `${environment.endpoint}/certificaciones`;
  const apiEndpointCertificaciones = `${environment.endpoint}/certificaciones`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CertificacionService, HttpService],
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(CertificacionService);
  });

  it('should be created', () => {
    const certificacionService: CertificacionService =
      TestBed.inject(CertificacionService);
    expect(certificacionService).toBeTruthy();
  });

  it('deberia listar certificaciones', () => {
    const dummyCertificaciones = [
      new Certificacion(1, 'Test nombre', 'Test Detalle', 120, 500),
      new Certificacion(2, 'Test nombre 2', 'Test Detalle 2', 150, 700),
    ];
    service.consultar().subscribe((certificaciones) => {
      expect(certificaciones.length).toBe(2);
      expect(certificaciones).toEqual(dummyCertificaciones);
    });
    const req = httpMock.expectOne(apiEndpointCertificacionConsulta);
    expect(req.request.method).toBe('GET');
    req.flush(dummyCertificaciones);
  });

  it('deberia crear una certificacion', () => {
    const dummyCertificacion = new Certificacion(
      1,
      'Test nombre',
      'Test Detalle',
      120,
      500
    );
    service.guardar(dummyCertificacion).subscribe((respuesta) => {
      expect(respuesta).toEqual(dummyCertificacion);
    });
    const req = httpMock.expectOne(apiEndpointCertificaciones);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<Certificacion>({ body: dummyCertificacion }));
  });

  it('deberia eliminar una certificacion', () => {
    const dummyCertificacion = new Certificacion(
      1,
      'Test nombre',
      'Test Detalle',
      120,
      500
    );
    service.eliminar(dummyCertificacion.id).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(`${apiEndpointCertificaciones}/1`);
    expect(req.request.method).toBe('DELETE');
    req.event(new HttpResponse<boolean>({ body: true }));
  });
});
