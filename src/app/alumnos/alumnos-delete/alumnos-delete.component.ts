import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ServiceAlumnos } from 'src/app/shared/services/alumnos.service';

@Component({
  selector: 'app-alumnos-delete',
  templateUrl: './alumnos-delete.component.html',
  styleUrls: ['./alumnos-delete.component.scss']
})
export class AlumnosDeleteComponent implements OnInit {
  susbcriptions: Subscription = new Subscription();

  alumnoid:number=0

  constructor(private serviceAlumnos: ServiceAlumnos) { }

  ngOnInit(): void {
    this.susbcriptions.add(
      this.serviceAlumnos.getAlumnoSelect().subscribe({
          next: (alumno) => {
            console.log ("alumno", alumno)
            if(alumno){
              this.alumnoid=alumno.id
            }
          }, error : (error) => {
            console.error(error)
          }
        })
    )
  }

}
