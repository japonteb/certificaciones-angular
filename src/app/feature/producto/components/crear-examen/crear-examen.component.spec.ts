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
import { HttpService } from '@core/services/http.service';
import { Certificacion } from '@producto/shared/model/certificacion';
import { Cliente } from '@producto/shared/model/cliente';
import { CertificacionService } from '@producto/shared/service/certificacion.service';
import { ClienteService } from '@producto/shared/service/cliente.service';
import { ExamenService } from '@producto/shared/service/examen.service';
import { AppMaterialModule } from '@shared/app-material/app-material.module';
import { of, throwError } from 'rxjs';
import { CrearExamenComponent } from './crear-examen.component';

describe('CrearExamenComponent', () => {
  let component: CrearExamenComponent;
  let fixture: ComponentFixture<CrearExamenComponent>;
  let examenService: ExamenService;
  let clienteService: ClienteService;
  let certificacionService: CertificacionService;
  const listaClientes: Cliente[] = [new Cliente(1, 'test nombre', 1)];
  const listaCertificaciones: Certificacion[] = [
    new Certificacion(1, 'Test nombre', 'Test Detalle', 120, 500),
    new Certificacion(2, 'Test nombre 2', 'Test Detalle 2', 150, 700),
  ];

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
          RouterModule,
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
    clienteService = TestBed.inject(ClienteService);
    certificacionService = TestBed.inject(CertificacionService);
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

  it(`#cargar Listas Clientes -> Prueba del método para cargar lista de clientes`, fakeAsync(() => {
    const respuestaServicioConsultarClientes = spyOn(
      clienteService,
      'consultar'
    ).and.returnValue(of(listaClientes));

    component.cargarListasClientes();
    tick(100);

    // assert
    expect(component.cargarListasClientes).toBeTruthy();
    expect(respuestaServicioConsultarClientes).toHaveBeenCalled();
    expect(component.listaClientes).toBe(listaClientes);
    expect(respuestaServicioConsultarClientes).toHaveBeenCalled();
  }));

  it(`#cargar Listas Clientes -> Debería presentarse un error e irse a catch, y mostrar el mensaje de error`, fakeAsync(() => {
    // arrange
    const mensajeError =
      'No fue posible cargar la lista de clientes, ocurrió un error.';

    const respuestaServicioConsultarClientes = spyOn(
      clienteService,
      'consultar'
    ).and.returnValue(
      throwError({ status: 404, error: { mensaje: mensajeError } })
    );

    // act
    component.cargarListasClientes();
    tick(100);
    // assert
    expect(respuestaServicioConsultarClientes).toHaveBeenCalled();
    expect(component.mensajeError).toBe(mensajeError);
    expect(component.existeError).toBeTrue();
  }));

  it(`#cargar Listas Certificaciones -> Prueba del método para cargar lista de certificaciones`, fakeAsync(() => {
    const respuestaServicioConsultarCertificaciones = spyOn(
      certificacionService,
      'consultar'
    ).and.returnValue(of(listaCertificaciones));

    component.cargarListasCertificaciones();
    tick(100);

    // assert
    expect(component.cargarListasCertificaciones).toBeTruthy();
    expect(respuestaServicioConsultarCertificaciones).toHaveBeenCalled();
    expect(component.listaCertificaciones).toBe(listaCertificaciones);
    expect(respuestaServicioConsultarCertificaciones).toHaveBeenCalled();
  }));

  it(`#cargar Listas Certificaciones -> Debería presentarse un error e irse a catch, y mostrar el mensaje de error`, fakeAsync(() => {
    // arrange
    const mensajeError =
      'No fue posible cargar la lista de certificaciones, ocurrió un error.';

    const respuestaServicioConsultarCertificaciones = spyOn(
      certificacionService,
      'consultar'
    ).and.returnValue(
      throwError({ status: 404, error: { mensaje: mensajeError } })
    );

    // act
    component.cargarListasCertificaciones();
    tick(100);
    // assert
    expect(respuestaServicioConsultarCertificaciones).toHaveBeenCalled();
    expect(component.mensajeError).toBe(mensajeError);
    expect(component.existeError).toBeTrue();
  }));

  it(`#crear -> Debería llamar al servicio guardar examen`, fakeAsync(() => {
    // arrange
    component.construirFormularioExamen();
    const respuestaServicioGuardar = spyOn(
      examenService,
      'guardar'
    ).and.returnValue(of(true));

    // act
    component.crear();
    tick(100);
    // assert
    expect(component.examenCreado).toBe(true);
    expect(respuestaServicioGuardar).toHaveBeenCalled();
  }));

  it(`#crear -> Debería presentarse un error e irse a catch, y mostrar el mensaje de error`, fakeAsync(() => {
    // arrange
    const mensajeError = 'No fue posible crear el examen, ocurrió un error.';
    component.construirFormularioExamen();
    const respuestaServicioGuardarExamen = spyOn(
      examenService,
      'guardar'
    ).and.returnValue(
      throwError({ status: 404, error: { mensaje: mensajeError } })
    );

    // act
    component.crear();
    tick(100);
    // assert
    expect(respuestaServicioGuardarExamen).toHaveBeenCalled();
    expect(component.mensajeError).toBe(mensajeError);
    expect(component.existeError).toBeTrue();
  }));
});
