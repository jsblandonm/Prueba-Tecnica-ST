import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface ReservaHotel {
  hotel: string;
  habitacion: string;
  fechaReserva: Date;
}

@Component({
  selector: 'app-detalle-reserva-hotel',
  templateUrl: './detalle-reserva-hotel.component.html',
  styleUrls: ['./detalle-reserva-hotel.component.css']
})
export class DetalleReservaHotelComponent implements OnInit {
  reserva: ReservaHotel | undefined;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.reserva = { hotel: 'Hotel A', habitacion: 'Habitación 101', fechaReserva: new Date('2023-06-01') };
  }
}
