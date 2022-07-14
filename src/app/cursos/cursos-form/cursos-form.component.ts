import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ServiceCursos } from 'src/app/shared/services/cursos.service';
import { CursoForm } from '../../shared/interfaces/cursos.model';
import { Cursos } from '../../shared/interfaces/cursos.model';

@Component({
  selector: 'app-cursos-form',
  templateUrl: './cursos-form.component.html',
  styleUrls: ['./cursos-form.component.scss']
})
export class CursosFormComponent implements OnInit {

  alumnosForm : FormGroup

  minCantChrNombre:number = 5
  maxCantChrNombre:number = 15
  maxCantChrMensaje:number = 150

  public dataId:any = [];
  susbcriptions: Subscription = new Subscription();

  

  constructor(private fb: FormBuilder, private serviceCursos: ServiceCursos) { 
    this.alumnosForm = fb.group({
      id : [''],
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
      phone : [, Validators.compose([
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
    /* this.serviceAlumnos.selectAlumnoById(2).subscribe((data) => {
      this.dataId.data = data as Alumnos[];
      console.log ("----id---",this.dataId.data)
    }); */

    this.susbcriptions.add(
      this.serviceCursos.getCursoSelect().subscribe({
          next: (alumno) => {
            console.log ("alumno", alumno)
            if(alumno){
              this.alumnosForm.patchValue(alumno)
            }else{
              this.alumnosForm.reset();
            }
          }, error : (error) => {
            console.error(error)
          }
        })
    )

  }

  submitForm() {
    console.log(this.alumnosForm.value)
    //this.serviceCursos.addCurso(this.alumnosForm.value)

    this.alumnosForm.reset()
  }

}

