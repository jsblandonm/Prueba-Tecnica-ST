import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarDatosHotelComponent } from './modificar-datos-hotel.component';

describe('ModificarDatosHotelComponent', () => {
  let component: ModificarDatosHotelComponent;
  let fixture: ComponentFixture<ModificarDatosHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarDatosHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarDatosHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
