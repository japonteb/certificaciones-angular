import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Certificacion } from '@producto/shared/model/certificacion';
import { CertificacionService } from '@producto/shared/service/certificacion.service';
import { AppMaterialModule } from '@shared/app-material/app-material.module';
import { of, throwError } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { CrearCertificacionComponent } from './crear-certificacion.component';

describe('CrearCertificacionComponent', () => {
  let component: CrearCertificacionComponent;
  let fixture: ComponentFixture<CrearCertificacionComponent>;
  let certificacionService: CertificacionService;
  const certificacion: Certificacion = new Certificacion(
    1,
    'Test nombre',
    'Test Detalle',
    120,
    500
  );

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CrearCertificacionComponent],
        imports: [
          CommonModule,
          HttpClientModule,
          RouterTestingModule,
          ReactiveFormsModule,
          FormsModule,
          AppMaterialModule,
          RouterModule,
        ],
        providers: [CertificacionService, HttpService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCertificacionComponent);
    component = fixture.componentInstance;
    certificacionService = TestBed.inject(CertificacionService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#ngOnInit -> Debería ejecutar lo de ngOnInit, por lo que debe ser llamada la funcion construirFormularioCertificacion', () => {
    const llamarFormulario = spyOn(
      component,
      'construirFormularioCertificacion'
    );
    component.ngOnInit();
    expect(llamarFormulario).toHaveBeenCalled();
  });

  it(`#crear -> Debería llamar al servicio guardar certificacion`, fakeAsync(() => {
    // arrange
    component.construirFormularioCertificacion();
    const respuestaServicioGuardar = spyOn(
      certificacionService,
      'guardar'
    ).and.returnValue(of(certificacion));

    // act
    component.crear();
    tick(100);
    // assert
    expect(component.certificacion).toBe(certificacion);
    expect(respuestaServicioGuardar).toHaveBeenCalled();
  }));

  it(`#crear -> Debería presentarse un error e irse a catch, y mostrar el mensaje de error`, fakeAsync(() => {
    // arrange
    const mensajeError =
      'No fue posible crear la certificación, ocurrió un error.';
    component.construirFormularioCertificacion();
    const respuestaServicioGuardar = spyOn(
      certificacionService,
      'guardar'
    ).and.returnValue(
      throwError({ status: 404, error: { mensaje: mensajeError } })
    );

    // act
    component.crear();
    tick(100);
    // assert
    expect(respuestaServicioGuardar).toHaveBeenCalled();
    expect(component.mensajeError).toBe(mensajeError);
    expect(component.existeError).toBeTrue();
  }));

  it(`#construirFormularioCertificacion -> Formulario invalido cuando está vacio`, () => {
    // act - assert
    component.construirFormularioCertificacion();
    expect(component.certificacionForm.valid).toBeFalsy();
  });

  it(`#construirFormularioCertificacion -> Formulario valido cuando está diligenciado`, () => {
    // act
    component.construirFormularioCertificacion();
    component.certificacionForm.controls.nombre.setValue('Test nombre');
    component.certificacionForm.controls.detalle.setValue('Test Detalle');
    component.certificacionForm.controls.duracion.setValue(120);
    component.certificacionForm.controls.precio.setValue(500);
    // assert
    expect(component.certificacionForm.valid).toBeTruthy();
  });
});
