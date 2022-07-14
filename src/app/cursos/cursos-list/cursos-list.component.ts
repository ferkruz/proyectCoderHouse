
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Cursos } from '../../shared/interfaces/cursos.model';

import { ServiceCursos } from 'src/app/shared/services/cursos.service';

import { ModalService } from '../../shared/services/modal.service';
import { CursosEditComponent as CursosEditComponentType} from '../cursos-edit/cursos-edit.component';
import { CursosDeleteComponent as CursosDeleteComponentType} from '../cursos-delete/cursos-delete.component';


import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

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

  constructor(
    public  serviceCursos:  ServiceCursos,
    private modalService: ModalService<CursosEditComponentType>,
    private modalServiceDelete: ModalService<CursosDeleteComponentType>,
    ) { }

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

  async deleteCurso(id?: number): Promise<void> {
    console.log ("----id",id)
    this.serviceCursos.deleteCursoById(id)

    const { CursosDeleteComponent } = await import(
      '../cursos-delete/cursos-delete.component'
    );
    await this.modalServiceDelete.open(CursosDeleteComponent,id);
  }

  async selectCurso(id?: number): Promise<void> {

    console.log ("----id",id)
    this.serviceCursos.selectCursosById(id)
    
    const { CursosEditComponent } = await import(
      '../cursos-edit/cursos-edit.component'
    );
    await this.modalService.open(CursosEditComponent,id);
  }
  
}

