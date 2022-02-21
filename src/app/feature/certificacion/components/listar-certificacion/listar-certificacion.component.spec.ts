import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarCertificacionComponent } from './listar-certificacion.component';

describe('ListarCertificacionComponent', () => {
  let component: ListarCertificacionComponent;
  let fixture: ComponentFixture<ListarCertificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarCertificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarCertificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
