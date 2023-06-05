import { Component } from '@angular/core';


interface Hotel {
  nombre: string;
  direccion: string;
  habitacionesDisponibles: number;
}

@Component({
  selector: 'app-modificar-habitaciones',
  templateUrl: './modificar-habitaciones.component.html',
  styleUrls: ['./modificar-habitaciones.component.css']
})
export class ModificarHabitacionesComponent {
  hoteles: Hotel[] = [
    { nombre: 'Hotel A', direccion: 'Dirección A', habitacionesDisponibles: 10 },
    { nombre: 'Hotel B', direccion: 'Dirección B', habitacionesDisponibles: 5 },
    { nombre: 'Hotel C', direccion: 'Dirección C', habitacionesDisponibles: 8 }
  ];
  hotelSeleccionado: Hotel | null = null;
  habitacionesDisponibles: number = 0;

  modificarHabitaciones() {
    if (this.hotelSeleccionado) {
      // Actualizar el número de habitaciones disponibles del hotel seleccionado
      this.hotelSeleccionado.habitacionesDisponibles = this.habitacionesDisponibles;

      console.log(this.hotelSeleccionado);
    }
  }
}
