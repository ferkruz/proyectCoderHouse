
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumnos } from '../../../shared/interfaces/alumnos.model';

import { map, Observable, Subscription, tap } from 'rxjs';

import { ServiceAlumnos } from 'src/app/shared/services/alumnos.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.scss']
})
  export class AlumnosListComponent implements OnInit {
    public displayedColumns = ['id', 'title', 'body', 'userId', 'actions'];
    
    public dataSource = new MatTableDataSource<Alumnos>();
    public dataId:any = [];

    public tableDataSource$: Observable<MatTableDataSource<Alumnos>>;
    
    @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort!: MatSort;

    constructor(public serviceAlumnos: ServiceAlumnos) {
      this.tableDataSource$ = this.serviceAlumnos.getAllAlumnos().pipe(tap((alumnos) => console.log(alumnos)),
      map((alumnos) => new MatTableDataSource<Alumnos>(alumnos)));
     }

    ngOnInit(): void {
      
    }

    

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

    deleteAlumno(id?: number){
      console.log ("----id",id)
      this.serviceAlumnos.deleteAlumnoById(id)
    }

    selectAlumno(id?: number){
      console.log ("----id",id)
      this.serviceAlumnos.selectAlumnoById(id).subscribe((data) => {
        this.dataId.data = data as Alumnos[];
        console.log (this.dataId.data)
      });

    }
    
  }
