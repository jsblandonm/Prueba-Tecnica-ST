import { Component } from '@angular/core';

interface Hotel {
  nombre: string;
  direccion: string;
  habitacionesDisponibles: number;
}

@Component({
  selector: 'app-modificar-datos-hotel',
  templateUrl: './modificar-datos-hotel.component.html',
  styleUrls: ['./modificar-datos-hotel.component.css']
})
export class ModificarDatosHotelComponent {
  hoteles: Hotel[] = [
    { nombre: 'Hotel A', direccion: 'Dirección A', habitacionesDisponibles: 10 },
    { nombre: 'Hotel B', direccion: 'Dirección B', habitacionesDisponibles: 5 },
    { nombre: 'Hotel C', direccion: 'Dirección C', habitacionesDisponibles: 8 }
  ];
  hotelSeleccionado: Hotel | null = null;
  nombreHotel: string = '';
  direccionHotel: string = '';

  modificarDatosHotel() {
    if (this.hotelSeleccionado) {
      // Actualizar los datos del hotel seleccionado
      this.hotelSeleccionado.nombre = this.nombreHotel;
      this.hotelSeleccionado.direccion = this.direccionHotel;

      console.log(this.hotelSeleccionado);
    }
  }
}
