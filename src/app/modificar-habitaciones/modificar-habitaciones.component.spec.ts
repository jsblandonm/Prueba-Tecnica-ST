import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarHabitacionesComponent } from './modificar-habitaciones.component';

describe('ModificarHabitacionesComponent', () => {
  let component: ModificarHabitacionesComponent;
  let fixture: ComponentFixture<ModificarHabitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarHabitacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarHabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
