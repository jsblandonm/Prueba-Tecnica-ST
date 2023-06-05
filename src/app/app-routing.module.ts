import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AsignarHabitacionesComponent } from './asignar-habitaciones/asignar-habitaciones.component';
import { BuscadorHotelesComponent } from './buscador-hoteles/buscador-hoteles.component';
import { CrearHotelComponent } from './crear-hotel/crear-hotel.component';
import { DetalleReservaHotelComponent } from './detalle-reserva-hotel/detalle-reserva-hotel.component';
import { FormularioReservaComponent } from './formulario-reserva/formulario-reserva.component';
import { GestionReservasHotelesComponent } from './gestion-reservas-hoteles/gestion-reservas-hoteles.component';
import { HabitacionesComponent } from './habitaciones/habitaciones.component';
import { ModificarDatosHotelComponent } from './modificar-datos-hotel/modificar-datos-hotel.component';
import { ModificarHabitacionesComponent } from './modificar-habitaciones/modificar-habitaciones.component';

const routes: Routes = [
  { path: 'asignar-habitaciones', component: AsignarHabitacionesComponent },
  { path: 'buscador-hoteles', component: BuscadorHotelesComponent },
  { path: 'crear-hotel', component: CrearHotelComponent },
  { path: 'reserva-hotel', component: DetalleReservaHotelComponent },
  { path: 'formulario-reserva', component: FormularioReservaComponent },
  { path: 'gestion-reservas-hoteles', component: GestionReservasHotelesComponent },
  { path: 'habitaciones', component: HabitacionesComponent },
  { path: 'modificar-datos-hotel', component: ModificarDatosHotelComponent },
  { path: 'modificar-habitaciones', component: ModificarHabitacionesComponent },
  { path: 'habitaciones', component: HabitacionesComponent },
  { path: 'buscador-hoteles', component: BuscadorHotelesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
