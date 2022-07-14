
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cursos } from '../../../shared/interfaces/cursos.model';

import { ServiceCursos } from 'src/app/shared/services/cursos.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cursos-list',
  templateUrl: './cursos-list.component.html',
  styleUrls: ['./cursos-list.component.scss']
})
export class CursosListComponent implements OnInit {
  public displayedColumns = ['id', 'name', 'email', 'phone', 'company', 'actions'];
    
  public dataSource = new MatTableDataSource<Cursos>();
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  constructor(private http: HttpClient, public  serviceCursos:  ServiceCursos) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log('DataSource', this.dataSource)
  
    this.serviceCursos.getAllCursos().subscribe((data) => {

      this.dataSource.data = data as Cursos[];
    })
  }

  ngAfterViewInit(): void {
    //this.dataSource.sort = this.sort;
  }

  

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  
}
