import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { HttpService } from 'src/app/core/services/http.service';
import { ClienteService } from '../../shared/service/cliente.service';
import { Cliente } from './../../shared/model/cliente';
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
        imports: [CommonModule, HttpClientModule, RouterTestingModule],
        providers: [ClienteService, HttpService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarClienteComponent);
    component = fixture.componentInstance;
    clienteService = TestBed.inject(ClienteService);
    spyOn(clienteService, 'consultar').and.returnValue(of(listaClientes));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.listaClientes.subscribe((resultado) => {
      expect(1).toBe(resultado.length);
    });
  });
});
