import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { CertificacionService } from '../../shared/service/certificacion.service';
import { Certificacion } from './../../shared/model/certificacion';
import { ListarCertificacionComponent } from './listar-certificacion.component';

describe('ListarCertificacionComponent', () => {
  let component: ListarCertificacionComponent;
  let fixture: ComponentFixture<ListarCertificacionComponent>;
  let certificacionService: CertificacionService;
  const listaCertificaciones: Certificacion[] = [
    new Certificacion(1, 'Test nombre', 'Test Detalle', 120, 500),
    new Certificacion(2, 'Test nombre 2', 'Test Detalle 2', 150, 700),
  ];

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ListarCertificacionComponent],
        imports: [CommonModule, HttpClientModule, RouterTestingModule],
        providers: [CertificacionService, HttpService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCertificacionComponent);
    component = fixture.componentInstance;
    certificacionService = TestBed.inject(CertificacionService);
    spyOn(certificacionService, 'consultar').and.returnValue(
      of(listaCertificaciones)
    );
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaCertificaciones.subscribe((resultado) => {
      expect(2).toBe(resultado.length);
    });
  });
});
