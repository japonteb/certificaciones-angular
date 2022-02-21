import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrarCertificacionComponent } from './borrar-certificacion.component';

describe('BorrarCertificacionComponent', () => {
  let component: BorrarCertificacionComponent;
  let fixture: ComponentFixture<BorrarCertificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrarCertificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorrarCertificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
