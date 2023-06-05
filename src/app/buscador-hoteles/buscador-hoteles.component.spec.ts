import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscadorHotelesComponent } from './buscador-hoteles.component';

describe('BuscadorHotelesComponent', () => {
  let component: BuscadorHotelesComponent;
  let fixture: ComponentFixture<BuscadorHotelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscadorHotelesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuscadorHotelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
