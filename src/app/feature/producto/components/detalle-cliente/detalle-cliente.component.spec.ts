import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Cliente } from '@producto/shared/model/cliente';
import { ExamenCertificacion } from '@producto/shared/model/examen-certificacion';
import { ClienteService } from '@producto/shared/service/cliente.service';
import { ExamenService } from '@producto/shared/service/examen.service';
import { AppMaterialModule } from '@shared/app-material/app-material.module';
import { of, throwError } from 'rxjs';
import { DetalleClienteComponent } from './detalle-cliente.component';

describe('DetalleClienteComponent', () => {
  let component: DetalleClienteComponent;
  let fixture: ComponentFixture<DetalleClienteComponent>;
  let clienteService: ClienteService;
  let examenService: ExamenService;
  const clienteDummy = new Cliente(1, 'Test nombre', 1);
  const listaExamenes: ExamenCertificacion[] = [
    new ExamenCertificacion(
      1,
      'Test nombre',
      'Test Detalle',
      '2022-02-23 19:34:55',
      500
    ),
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetalleClienteComponent],
      imports: [
        CommonModule,
        HttpClientModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
        AppMaterialModule,
        RouterModule,
      ],
      providers: [ClienteService, ExamenService, HttpService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleClienteComponent);
    component = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);
    examenService = TestBed.inject(ExamenService);
  });

  it('Deberia buscar el cliente con el id como parametro ', () => {
    // arrange
    const clienteId = 1;
    const respuestaServicioConsultarPorId = spyOn(
      clienteService,
      'consultarPorId'
    ).and.returnValue(of(clienteDummy));

    // act
    component.consultarPorId(clienteId);

    // assert
    expect(component).toBeTruthy();
    expect(respuestaServicioConsultarPorId).toHaveBeenCalled();
    expect(respuestaServicioConsultarPorId).toBeTruthy();
  });

  it('Deberia buscar los exámenes asociados a un cliente, por el id del cliente ', () => {
    // arrange
    const clienteId = 2;
    const respuestaServicioConsultarExamenes = spyOn(
      examenService,
      'consultarPorClientId'
    )
      .withArgs(clienteId)
      .and.callThrough();

    component.consultarExamenesPorClienteId(clienteId);

    // assert
    expect(component.consultarExamenesPorClienteId).toBeTruthy();
    expect(respuestaServicioConsultarExamenes).toHaveBeenCalled();
  });

  it('Deberia buscar un cliente por su id ', () => {
    // arrange
    const clienteId = 1;
    spyOn(clienteService, 'consultarPorId')
      .withArgs(clienteId)
      .and.returnValue(of(clienteDummy));

    component.consultarPorId(clienteId);

    // assert
    expect(component.consultarPorId).toBeTruthy();
    expect(component.cliente).toBe(clienteDummy);
  });

  it(`Deberia presentarse un error e irse a catch, y mostrar mensaje de error`, fakeAsync(() => {
    // arrange
    const clienteId = 1;
    const mensajeError =
      'No fue posible consultar el cliente por id, ocurrió un error.';
    const respuestaServicioConsultarClientePorId = spyOn(
      clienteService,
      'consultarPorId'
    )
      .withArgs(clienteId)
      .and.returnValue(
        throwError({ status: 404, error: { mensaje: mensajeError } })
      );

    // act
    component.consultarPorId(clienteId);
    tick(100);

    // assert
    expect(respuestaServicioConsultarClientePorId).toHaveBeenCalled();
    expect(component.mensajeError).toBe(mensajeError);
    expect(component.existeError).toBeTrue();
  }));

  it('Deberia buscar exámenes por el id del cliente ', () => {
    // arrange
    const clienteId = 1;
    spyOn(examenService, 'consultarPorClientId')
      .withArgs(clienteId)
      .and.returnValue(of(listaExamenes));
    fixture.detectChanges();

    component.consultarExamenesPorClienteId(clienteId);

    // assert
    expect(component.consultarExamenesPorClienteId).toBeTruthy();
    component.listaExamenes.subscribe((resultado) => {
      expect(1).toBe(resultado.length);
    });
  });
});
