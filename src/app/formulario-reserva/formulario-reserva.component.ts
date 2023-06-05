import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habitacion } from '../habitaciones/habitaciones.component';

export interface Reserva {
  nombre: string;
  correo: string;
  telefono: string;
  pasajeros: Pasajero[];
  contactoEmergencia: ContactoEmergencia;
}

export interface Pasajero {
  nombresApellidos: string;
  fechaNacimiento: Date;
  genero: string;
  tipoDocumento: string;
  numeroDocumento: string;
  email: string;
  telefonoContacto: string;
}

export interface ContactoEmergencia {
  nombresCompletos: string;
  telefonoContacto: string;
}


@Component({
  selector: 'app-formulario-reserva',
  templateUrl: './formulario-reserva.component.html',
  styleUrls: ['./formulario-reserva.component.css']
})
export class FormularioReservaComponent implements OnInit {
  habitacion: Habitacion | undefined;
  reservaForm!: FormGroup;
  pasajeros: number[] = [1]; // Inicialmente se muestra un pasajero

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.reservaForm = this.formBuilder.group({
      nombreContacto: ['', Validators.required],
      telefonoContacto: ['', Validators.required]
    });

    this.addPasajeroControls();
  }

  addPasajeroControls(): void {
    for (let i = 0; i < this.pasajeros.length; i++) {
      const pasajeroGroup = this.formBuilder.group({
        nombresApellidos: ['', Validators.required],
        fechaNacimiento: ['', Validators.required],
        genero: ['', Validators.required],
        tipoDocumento: ['', Validators.required],
        numeroDocumento: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        telefono: ['', Validators.required]
      });

      this.reservaForm.addControl(`pasajero${i}`, pasajeroGroup);
    }
  }

  onSubmit(): void {
    if (this.reservaForm.valid) {
      // Lógica para enviar la reserva
      console.log('Reserva enviada:', this.reservaForm.value);
    }
  }

  agregarPasajero(): void {
    this.pasajeros.push(this.pasajeros.length + 1);
    this.addPasajeroControls();
  }
}