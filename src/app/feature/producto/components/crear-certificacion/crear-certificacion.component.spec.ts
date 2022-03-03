import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { CertificacionService } from '@producto/shared/service/certificacion.service';
import { AppMaterialModule } from '@shared/app-material/app-material.module';
import { HttpService } from 'src/app/core/services/http.service';
import { CrearCertificacionComponent } from './crear-certificacion.component';

describe('CrearCertificacionComponent', () => {
  let component: CrearCertificacionComponent;
  let fixture: ComponentFixture<CrearCertificacionComponent>;
  let certificacionService: CertificacionService;

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
        ],
        providers: [CertificacionService, HttpService],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearCertificacionComponent);
    component = fixture.componentInstance;
    certificacionService = TestBed.inject(CertificacionService);
    spyOn(certificacionService, 'guardar');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.certificacionForm.valid).toBeFalsy();
  });

  it('Registrando certificacion', () => {
    expect(component.certificacionForm.valid).toBeFalsy();
    component.certificacionForm.controls.nombre.setValue('test nombre 1');
    component.certificacionForm.controls.descripcion.setValue(
      'Certificacion test'
    );
    component.certificacionForm.controls.duracion.setValue(120);
    component.certificacionForm.controls.precio.setValue(500);
    expect(component.certificacionForm.valid).toBeTruthy();

    component.crear();
  });
});
