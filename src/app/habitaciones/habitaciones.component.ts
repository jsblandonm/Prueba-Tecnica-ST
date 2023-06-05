import { Component, OnInit } from '@angular/core';

export interface Habitacion {
  id: number;
  costoBase: number;
  impuestos: number;
  tipoHabitacion: string;
  ubicacion: string;
}

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css']
})
export class HabitacionesComponent implements OnInit {
  habitaciones: Habitacion[] = [];
  nuevaHabitacion: Habitacion = { id: 0, costoBase: 0, impuestos: 0, tipoHabitacion: '', ubicacion: '' };

  constructor() { }

  ngOnInit(): void {
    // Aquí puedes inicializar las habitaciones o cargarlas desde una fuente de datos
    this.habitaciones = [
      { id: 1, costoBase: 100, impuestos: 10, tipoHabitacion: 'Individual', ubicacion: 'Piso 1' },
      { id: 2, costoBase: 150, impuestos: 15, tipoHabitacion: 'Doble', ubicacion: 'Piso 2' },
      { id: 3, costoBase: 200, impuestos: 20, tipoHabitacion: 'Suite', ubicacion: 'Piso 3' }
    ];
  }

  agregarHabitacion() {
    // Generar un nuevo ID para la habitación
    const nuevoId = this.habitaciones.length + 1;

    // Asignar el ID y agregar la nueva habitación a la lista
    const nuevaHabitacion: Habitacion = {
      id: nuevoId,
      costoBase: this.nuevaHabitacion.costoBase,
      impuestos: this.nuevaHabitacion.impuestos,
      tipoHabitacion: this.nuevaHabitacion.tipoHabitacion,
      ubicacion: this.nuevaHabitacion.ubicacion
    };

    this.habitaciones.push(nuevaHabitacion);

    // Reiniciar la propiedad nuevaHabitacion
    this.nuevaHabitacion = { id: 0, costoBase: 0, impuestos: 0, tipoHabitacion: '', ubicacion: '' };
  }
}
