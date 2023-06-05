import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionReservasHotelesComponent } from './gestion-reservas-hoteles.component';

describe('GestionReservasHotelesComponent', () => {
  let component: GestionReservasHotelesComponent;
  let fixture: ComponentFixture<GestionReservasHotelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionReservasHotelesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionReservasHotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
