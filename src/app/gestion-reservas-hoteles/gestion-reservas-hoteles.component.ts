import { Component } from '@angular/core';

interface ReservaHotel {
  hotel: string;
  habitacion: string;
  fechaReserva: Date;
}

@Component({
  selector: 'app-gestion-reservas-hoteles',
  templateUrl: './gestion-reservas-hoteles.component.html',
  styleUrls: ['./gestion-reservas-hoteles.component.css']
})
export class GestionReservasHotelesComponent {
  reservas: ReservaHotel[] = [
    { hotel: 'Hotel A', habitacion: 'Habitación 101', fechaReserva: new Date('2023-06-01') },
    { hotel: 'Hotel B', habitacion: 'Habitación 205', fechaReserva: new Date('2023-06-02') },
    { hotel: 'Hotel C', habitacion: 'Habitación 306', fechaReserva: new Date('2023-06-03') }
  ];
}
