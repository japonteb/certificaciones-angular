import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearCertificacionComponent } from './crear-certificacion.component';

describe('CrearCertificacionComponent', () => {
  let component: CrearCertificacionComponent;
  let fixture: ComponentFixture<CrearCertificacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearCertificacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCertificacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
