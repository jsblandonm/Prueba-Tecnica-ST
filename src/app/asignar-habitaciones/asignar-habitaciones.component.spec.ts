import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarHabitacionesComponent } from './asignar-habitaciones.component';

describe('AsignarHabitacionesComponent', () => {
  let component: AsignarHabitacionesComponent;
  let fixture: ComponentFixture<AsignarHabitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarHabitacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignarHabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
