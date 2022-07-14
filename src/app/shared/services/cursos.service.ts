import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, catchError, map, of, Subject } from 'rxjs';

import { CursoForm } from '../interfaces/cursos.model'

@Injectable({
  providedIn: 'root'
})
export class ServiceCursos {

  cursos:CursoForm[] =[]

  curso = new BehaviorSubject<any>([]);

  constructor(private http: HttpClient) { }

  public getAllCursos(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/users');
  }

  public deleteCursoById(id?: number){
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .subscribe((response: any) => {
      this.curso.next(response);
     });
  }

  public selectCursosById(id?: number){
    //this.alumnos = this.alumnos.filter((_, i) => id != i)
    //this.alumnos$.next(id !== undefined ? this.alumnos[id] : null)
    return this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .subscribe((response: any) => {
      this.curso.next(response);
     });
  }

  getCursoSelect(){
    return this.curso.asObservable()
  }
}

