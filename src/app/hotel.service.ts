import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private readonly endpoint = '/hoteles'; // Ruta del endpoint de búsqueda de hoteles

  constructor(private http: HttpClient) { }


  buscarHoteles(checkIn: string, checkOut: string, guests: number, city: string): Observable<any> {
    // Realizar la llamada HTTP al servidor para buscar los hoteles
    const params = {
      checkIn,
      checkOut,
      guests: guests.toString(),
      city
    }

    return this.http.get(this.endpoint, {
      params
    });
  }

  crearHotel(nuevoHotel: any): Observable<any> {
    return this.http.post<any>(`${this.endpoint}`, nuevoHotel);


  }
}
