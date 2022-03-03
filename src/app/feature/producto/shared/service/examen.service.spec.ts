import { HttpResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HttpService } from 'src/app/core/services/http.service';
import { environment } from 'src/environments/environment';
import { Certificacion } from '../model/certificacion';
import { Cliente } from '../model/cliente';
import { Examen } from '../model/examen';
import { ExamenService } from './examen.service';

describe('ExamenService', () => {
  let httpMock: HttpTestingController;
  let service: ExamenService;
  const apiEndpointExamenes = `${environment.endpoint}/examenes`;

  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExamenService, HttpService],
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ExamenService);
  });

  it('should be created', () => {
    const examenService: ExamenService = TestBed.inject(ExamenService);
    expect(examenService).toBeTruthy();
  });

  it('deberia crear una examen', () => {
    const dummyExamen = new Examen(
      1,
      new Cliente(1, 'test nombre', 1),
      new Certificacion(1, 'Test nombre', 'Test Detalle', 120, 500),
      '2022-09-15',
      500
    );
    service.guardar(dummyExamen).subscribe((respuesta) => {
      expect(respuesta).toEqual(true);
    });
    const req = httpMock.expectOne(apiEndpointExamenes);
    expect(req.request.method).toBe('POST');
    req.event(new HttpResponse<boolean>({ body: true }));
  });
});
