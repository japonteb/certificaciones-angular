import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Cliente } from '@producto/shared/model/cliente';
import { ClienteService } from '@producto/shared/service/cliente.service';
import { AppMaterialModule } from '@shared/app-material/app-material.module';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { ListarClienteComponent } from './listar-cliente.component';

describe('ListarClienteComponent', () => {
  let component: ListarClienteComponent;
  let fixture: ComponentFixture<ListarClienteComponent>;
  let clienteService: ClienteService;
  const listaClientes: Cliente[] = [new Cliente(1, 'test nombre', 1)];

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [ListarClienteComponent],
        imports: [
          CommonModule,
          HttpClientModule,
          RouterTestingModule,
          AppMaterialModule,
          RouterModule,
        ],
        providers: [ClienteService, HttpService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarClienteComponent);
    component = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);
  });

  it('Deberia listar los clientes disponibles y su tamaño ser igual a 2', () => {
    spyOn(clienteService, 'consultar').and.returnValue(of(listaClientes));
    fixture.detectChanges();
    expect(component).toBeTruthy();
    component.listaClientes.subscribe((resultado) => {
      expect(1).toBe(resultado.length);
    });
  });
});
