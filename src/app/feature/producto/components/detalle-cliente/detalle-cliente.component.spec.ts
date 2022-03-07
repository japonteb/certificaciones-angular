import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { Cliente } from '@producto/shared/model/cliente';
import { ClienteService } from '@producto/shared/service/cliente.service';
import { ExamenService } from '@producto/shared/service/examen.service';
import { AppMaterialModule } from '@shared/app-material/app-material.module';
import { of } from 'rxjs';
import { DetalleClienteComponent } from './detalle-cliente.component';

describe('DetalleClienteComponent', () => {
  let component: DetalleClienteComponent;
  let fixture: ComponentFixture<DetalleClienteComponent>;
  let clienteService: ClienteService;

  const cliente = new Cliente(1, 'Test nombre', 1);

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
  });

  it('Deberia buscar el cliente con el id como parametro ', () => {
    //arrange
    const clienteId = 1;
    const respuestaServicioConsultarPorId = spyOn(
      clienteService,
      'consultarPorId'
    ).and.returnValue(of(cliente));

    //act
    component.consultarPorId(clienteId);

    //assert
    expect(component).toBeTruthy();
    expect(respuestaServicioConsultarPorId).toHaveBeenCalled();
    expect(respuestaServicioConsultarPorId).toBeTruthy();
  });
});
