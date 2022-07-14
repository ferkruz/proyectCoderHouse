
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Alumnos } from '../../../shared/interfaces/alumnos.model';

import { map, Observable, Subscription, tap } from 'rxjs';

import { ServiceAlumnos } from 'src/app/shared/services/alumnos.service';

import { ModalService } from '../../../shared/services/modal.service';
import {NewsletterComponent as NewsletterComponentType} from '../../newsletter/newsletter.component';


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
    
    @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
    @ViewChild(MatSort, {static: true}) sort!: MatSort;

    constructor(public serviceAlumnos: ServiceAlumnos, private modalService: ModalService<NewsletterComponentType>) { }

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

    deleteAlumno(id?: number){
      console.log ("----id",id)
      this.serviceAlumnos.deleteAlumnoById(id)
    }

    /* selectAlumno(id?: number){
      console.log ("----id",id)
      this.serviceAlumnos.selectAlumnoById(id).subscribe((data) => {
        this.dataId.data = data as Alumnos[];
        console.log ("----id",this.dataId.data) 
      });
    } */

    async selectAlumno(id?: number): Promise<void> {

      console.log ("----id",id)
      /* this.serviceAlumnos.selectAlumnoById(id).subscribe((data) => {
        this.dataId.data = data as Alumnos[];
        console.log ("----id",this.dataId.data) 
      }); */
      this.serviceAlumnos.selectAlumnoById(id)
      
      const {NewsletterComponent} = await import(
        '../../newsletter/newsletter.component'
      );
      await this.modalService.open(NewsletterComponent,id);
    }
    
  }
