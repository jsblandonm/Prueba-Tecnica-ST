import { Component } from '@angular/core';
import { HotelService } from '../hotel.service';


interface Hotel {
  nombre: string;
  direccion: string;
  habitacionesDisponibles: number;
}

@Component({
  selector: 'app-crear-hotel',
  templateUrl: './crear-hotel.component.html',
  styleUrls: ['./crear-hotel.component.css']
})
export class CrearHotelComponent {
  nombreHotel: string = '';
  direccionHotel: string = '';
  habitacionesDisponibles: number = 0;

  constructor(private hotelService: HotelService) { }

  crearHotel() {
    const nuevoHotel: Hotel = {
      nombre: this.nombreHotel,
      direccion: this.direccionHotel,
      habitacionesDisponibles: this.habitacionesDisponibles
    };

    this.hotelService.crearHotel(nuevoHotel).subscribe(
      (response: any) => {

        console.log('Hotel creado exitosamente', response);
      },
      (error: any) => {
        console.error('Error al crear el hotel', error);
      }
    );
    console.log(nuevoHotel);
  }
}
