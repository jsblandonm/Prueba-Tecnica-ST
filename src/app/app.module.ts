import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearHotelComponent } from './crear-hotel/crear-hotel.component';
import { AsignarHabitacionesComponent } from './asignar-habitaciones/asignar-habitaciones.component';
import { ModificarHabitacionesComponent } from './modificar-habitaciones/modificar-habitaciones.component';
import { ModificarDatosHotelComponent } from './modificar-datos-hotel/modificar-datos-hotel.component';
import { GestionReservasHotelesComponent } from './gestion-reservas-hoteles/gestion-reservas-hoteles.component';
import { DetalleReservaHotelComponent } from './detalle-reserva-hotel/detalle-reserva-hotel.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { BuscadorHotelesComponent } from './buscador-hoteles/buscador-hoteles.component';
import { FormularioReservaComponent } from './formulario-reserva/formulario-reserva.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearHotelComponent,
    AsignarHabitacionesComponent,
    ModificarHabitacionesComponent,
    ModificarDatosHotelComponent,
    GestionReservasHotelesComponent,
    DetalleReservaHotelComponent,
    HabitacionesComponent,
    BuscadorHotelesComponent,
    FormularioReservaComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
