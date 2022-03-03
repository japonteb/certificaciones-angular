import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from '@core/services/http.service';
import { ExamenService } from '@producto/shared/service/examen.service';
import { AppMaterialModule } from '@shared/app-material/app-material.module';

import { CrearExamenComponent } from './crear-examen.component';

describe('CrearExamenComponent', () => {
  let component: CrearExamenComponent;
  let fixture: ComponentFixture<CrearExamenComponent>;
  let examenService: ExamenService;

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
        providers: [ExamenService, HttpService],
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('formulario es invalido cuando esta vacio', () => {
    expect(component.examenForm.valid).toBeFalsy();
  });
});
