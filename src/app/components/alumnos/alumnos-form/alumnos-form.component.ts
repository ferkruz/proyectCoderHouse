import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ServiceAlumnos } from 'src/app/shared/services/alumnos.service';
import { AlumnosForm } from '../../../shared/interfaces/alumnos.model'

@Component({
  selector: 'app-alumnos-form',
  templateUrl: './alumnos-form.component.html',
  styleUrls: ['./alumnos-form.component.scss']
})
export class AlumnosFormComponent implements OnInit {

  alumnosForm : FormGroup

  minCantChrNombre:number = 5
  maxCantChrNombre:number = 15
  maxCantChrMensaje:number = 150

  constructor(private fb: FormBuilder, private serviceAlumnos: ServiceAlumnos) { 
    this.alumnosForm = fb.group({
      name : ['', Validators.compose([
        Validators.required,
        Validators.minLength(this.minCantChrNombre),
        Validators.maxLength(this.maxCantChrNombre)
      ])],
      surname : ['', Validators.compose([
        Validators.required,
        Validators.minLength(this.minCantChrNombre),
        Validators.maxLength(this.maxCantChrNombre)
      ])],
      email : ['', Validators.compose([
                    Validators.required,
                    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$')
      ])],
      telefono : [, Validators.compose([
        Validators.required,
        Validators.minLength(this.minCantChrNombre),
        Validators.maxLength(this.maxCantChrNombre)
      ])],
      curso : ['Seleccione un Curso', Validators.compose([
                      Validators.required,
      ])],
      modalidad : ['Seleccione un Modalidad', Validators.compose([
        Validators.required,
      ])],
      horario : ['Seleccione un Horario', Validators.compose([
        Validators.required,
      ])],
      mensaje : ['', Validators.compose([
        Validators.required,
        Validators.minLength(this.minCantChrNombre),
        Validators.maxLength(this.maxCantChrMensaje)
])],
      
    })
  }

  ngOnInit(): void {
  }

  submitForm() {
    console.log(this.alumnosForm.value)
    this.serviceAlumnos.addAlumno(this.alumnosForm.value)

    this.alumnosForm.reset()
  }

}

