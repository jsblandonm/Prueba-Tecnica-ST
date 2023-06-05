import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleReservaHotelComponent } from './detalle-reserva-hotel.component';

describe('DetalleReservaHotelComponent', () => {
  let component: DetalleReservaHotelComponent;
  let fixture: ComponentFixture<DetalleReservaHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleReservaHotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleReservaHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
