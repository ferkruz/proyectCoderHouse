import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ServiceCursos } from 'src/app/shared/services/cursos.service';

@Component({
  selector: 'app-cursos-delete',
  templateUrl: './cursos-delete.component.html',
  styleUrls: ['./cursos-delete.component.scss']
})
export class CursosDeleteComponent implements OnInit {
  susbcriptions: Subscription = new Subscription();

  cursoid:number=0

  constructor(private serviceCursos: ServiceCursos) { }

  ngOnInit(): void {
    this.susbcriptions.add(
      this.serviceCursos.getCursoSelect().subscribe({
          next: (curso) => {
            console.log ("curso", curso)
            if(curso){
              this.cursoid=curso.id
            }
          }, error : (error) => {
            console.error(error)
          }
        })
    )
  }

}
