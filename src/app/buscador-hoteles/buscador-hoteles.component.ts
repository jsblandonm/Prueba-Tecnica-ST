import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-buscador-hoteles',
  templateUrl: './buscador-hoteles.component.html',
  styleUrls: ['./buscador-hoteles.component.css']
})
export class BuscadorHotelesComponent {
  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private hotelService: HotelService) {
    this.searchForm = this.formBuilder.group({
      checkIn: [''],
      checkOut: [''],
      guests: [''],
      city: ['']
    });
  }

  onSubmit() {
    // Obtener los valores del formulario de búsqueda
    const checkIn = this.searchForm.value.checkIn;
    const checkOut = this.searchForm.value.checkOut;
    const guests = this.searchForm.value.guests;
    const city = this.searchForm.value.city;

    // Llamar al servicio de búsqueda de hoteles
    this.hotelService.buscarHoteles(checkIn, checkOut, guests, city).subscribe(
      (data: any) => {
        console.log(data);
      },
      (error: any) => {
        console.error('Error al buscar hoteles:', error);
      }
    )
  }
}
