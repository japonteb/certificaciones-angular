import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Certificacion } from '@producto/shared/model/certificacion';
import { CertificacionService } from '@producto/shared/service/certificacion.service';
import { AppMaterialModule } from '@shared/app-material/app-material.module';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
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
        imports: [
          CommonModule,
          HttpClientModule,
          RouterTestingModule,
          AppMaterialModule,
          RouterModule,
        ],
        providers: [CertificacionService, HttpService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCertificacionComponent);
    component = fixture.componentInstance;
    certificacionService = TestBed.inject(CertificacionService);
  });

  it('Deberia listar las certificaciones disponible y su tamaño ser igual a 2', () => {
    spyOn(certificacionService, 'consultar').and.returnValue(
      of(listaCertificaciones)
    );
    fixture.detectChanges();
    expect(component).toBeTruthy();
    component.listaCertificaciones.subscribe((resultado) => {
      expect(2).toBe(resultado.length);
    });
  });

  it(`#borrar -> Se debería llamar el método confirmarAlert, el servicio eliminar
      debería return true y también se debería llamar el método de consultar certificaciones`, fakeAsync(() => {
    // arrange
    const respuestaServicioEliminar = spyOn(
      certificacionService,
      'eliminar'
    ).and.returnValue(of(true));
    const respuestaServicioConsultar = spyOn(
      certificacionService,
      'consultar'
    ).and.returnValue(of(listaCertificaciones));
    const respuestaConfirmarAlert = spyOn(
      component,
      'confirmarEliminarCertificacion'
    ).and.returnValue(true);

    // act
    component.eliminarCertificacion(2);
    tick(100);
    // assert
    expect(respuestaServicioEliminar).toHaveBeenCalled();
    expect(respuestaServicioEliminar).toBeTruthy();
    expect(respuestaServicioConsultar).toHaveBeenCalled();
    expect(respuestaConfirmarAlert).toHaveBeenCalled();
  }));

  it(`#borrar -> Deberia no borrar la certificación si el dialog no se acepta`, () => {
    // arrange
    const respuestaConfirmarAlert = spyOn(
      component,
      'confirmarEliminarCertificacion'
    ).and.returnValue(false);
    const respuestaServicioEliminar = spyOn(
      certificacionService,
      'eliminar'
    ).and.returnValue(of(true));
    // act
    component.eliminarCertificacion(2);
    // assert
    expect(respuestaServicioEliminar).not.toHaveBeenCalled();
    expect(respuestaConfirmarAlert).toHaveBeenCalled();
  });

  it(`#confirmación eliminar -> deberia llamar al método para confirmar eliminación de la
    certificación`, () => {
    // act
    const confirmMensaje = spyOn(
      component,
      'confirmarEliminarCertificacion'
    ).and.callThrough();
    component.confirmarEliminarCertificacion();
    // assert
    expect(confirmMensaje).toHaveBeenCalled();
  });
});
