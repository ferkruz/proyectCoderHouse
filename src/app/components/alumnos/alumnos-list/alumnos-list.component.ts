
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumnos } from '../../../shared/interfaces/alumnos.model';

import { ServiceAlumnos } from 'src/app/shared/services/alumnos.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-alumnos-list',
  templateUrl: './alumnos-list.component.html',
  styleUrls: ['./alumnos-list.component.scss']
})
  export class AlumnosListComponent implements OnInit {
    public displayedColumns = ['id', 'title', 'body', 'userId', 'actions'];;
    
    public dataSource = new MatTableDataSource<Alumnos>();
    @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort!: MatSort;

    constructor(public serviceAlumnos: ServiceAlumnos) { }

    ngOnInit(): void {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log('DataSource', this.dataSource)
    
      this.serviceAlumnos.getAllAlumnos().subscribe((data) => {

        this.dataSource.data = data as Alumnos[];
      })
    }

    

    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
    
  }
