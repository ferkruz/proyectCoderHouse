import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { AlumnosForm } from '../interfaces/alumnos.model';

@Injectable({
  providedIn: 'root'
})
export class ServiceAlumnos {

  alumnos:AlumnosForm[] =[]

  constructor(private http: HttpClient) { }

  public getAllAlumnos(): Observable<any>{
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }

  public addAlumno(alumno:AlumnosForm){
    this.alumnos.push(alumno)
    //this.alumnos$.next(this.alumnos)
    console.log (this.alumnos.length)
  }

  public deleteAlumnoById(id?: number){
    this.alumnos = this.alumnos.filter((_, i) => id != i)
    //this.alumnos$.next(this.alumnos)
  }

  public selectAlumnoById(id?: number): Observable<any>{
    //this.alumnos = this.alumnos.filter((_, i) => id != i)
    //this.alumnos$.next(id !== undefined ? this.alumnos[id] : null)
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}

