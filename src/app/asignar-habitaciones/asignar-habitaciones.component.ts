import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

interface Hotel {
  nombre: string;
  direccion: string;
  habitacionesDisponibles: number;
}

@Component({
  selector: 'app-asignar-habitaciones',
  templateUrl: './asignar-habitaciones.component.html',
  styleUrls: ['./asignar-habitaciones.component.css']
})
export class AsignarHabitacionesComponent {
  hoteles: Hotel[] = [
    { nombre: 'Hotel A', direccion: 'Dirección A', habitacionesDisponibles: 10 },
    { nombre: 'Hotel B', direccion: 'Dirección B', habitacionesDisponibles: 5 },
    { nombre: 'Hotel C', direccion: 'Dirección C', habitacionesDisponibles: 8 }
  ];
  hotelSeleccionado: Hotel | null = null;
  habitacionesDisponibles: number = 0;

  constructor(private http: HttpClient) { }

  asignarHabitaciones() {
    if (this.hotelSeleccionado) {
      // Actualizar el número de habitaciones disponibles del hotel seleccionado
      this.hotelSeleccionado.habitacionesDisponibles += this.habitacionesDisponibles;

      //Enviar la asignacion de habitaciones al servidor
      this.http.post('/api/asignar-habitaciones', {
        hotel: this.hotelSeleccionado.nombre,
        habitaciones: this.habitacionesDisponibles
      }).subscribe(response => {
        console.log('Asignacion de habitaciones enviada al servidor', response);
      }, error => {
        console.log('Error al enviar la asignacion de habitaciones al servidor', error);
      });

      //Almacenar la asignacion de habitaciones localmente
      localStorage.setItem('asignacionHabitaciones', JSON.stringify(this.hotelSeleccionado));

      console.log(this.hotelSeleccionado);
    }
  }
}
