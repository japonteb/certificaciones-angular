import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Certificacion } from '@producto/shared/model/certificacion';
import { Cliente } from '@producto/shared/model/cliente';
import { CertificacionService } from '@producto/shared/service/certificacion.service';
import { ClienteService } from '@producto/shared/service/cliente.service';
import { ExamenService } from '@producto/shared/service/examen.service';
import { AppMaterialModule } from '@shared/app-material/app-material.module';

import { CrearExamenComponent } from './crear-examen.component';

describe('CrearExamenComponent', () => {
  let component: CrearExamenComponent;
  let fixture: ComponentFixture<CrearExamenComponent>;
  let examenService: ExamenService;
  const certificacion: Certificacion = new Certificacion(
    1,
    'Test nombre',
    'Test Detalle',
    120,
    500
  );
  const cliente: Cliente = new Cliente(1, 'Test nombre', 1);

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CrearExamenComponent],
        imports: [
          CommonModule,
          HttpClientModule,
          RouterTestingModule,
          ReactiveFormsModule,
          FormsModule,
          AppMaterialModule,
        ],
        providers: [
          ExamenService,
          ClienteService,
          CertificacionService,
          HttpService,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearExamenComponent);
    component = fixture.componentInstance;
    examenService = TestBed.inject(ExamenService);
    spyOn(examenService, 'guardar');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('#ngOnInit -> Debería ejecutar lo de ngOnInit, por lo que debe ser llamada la funcion construirFormularioExamen', () => {
    const llamarFormulario = spyOn(component, 'construirFormularioExamen');
    component.ngOnInit();
    expect(llamarFormulario).toHaveBeenCalled();
  });

  it(`#construirFormularioCertificacion -> Formulario invalido cuando está vacio`, () => {
    // act - assert
    component.construirFormularioExamen();
    expect(component.examenForm.valid).toBeFalsy();
  });

  it(`#construirFormularioCertificacion -> Formulario valido cuando está diligenciado`, () => {
    // act
    component.construirFormularioExamen();
    component.examenForm.controls.comandoCliente.setValue(cliente);
    component.examenForm.controls.comandoCertificacion.setValue(certificacion);
    component.examenForm.controls.fechaPresentacion.setValue(
      '2022-02-23T19:34:55'
    );
    component.examenForm.controls.precioTotal.setValue(500);
    // assert
    expect(component.examenForm.valid).toBeTruthy();
  });
});
