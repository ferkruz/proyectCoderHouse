import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { AlumnosFormComponent } from './alumnos-form/alumnos-form.component';
import { MaterialModule } from '../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RoundBlockDirective } from '../shared/directives/round-block.directive';
import { ResaltarDirective } from '../shared/directives/resaltar.directive';
import { AlumnosListComponent } from './alumnos-list/alumnos-list.component';
import { AlumnosEditComponent } from './alumnos-edit/alumnos-edit.component';
import { ModalComponent } from './modal/modal.component';
import { AlumnosMenuComponent } from './alumnos-menu/alumnos-menu.component';
import { AlumnosDeleteComponent } from './alumnos-delete/alumnos-delete.component';


@NgModule({
  declarations: [
    AlumnosFormComponent,
    RoundBlockDirective,
    ResaltarDirective,
    AlumnosListComponent,
    AlumnosEditComponent,
    ModalComponent,
    AlumnosMenuComponent,
    AlumnosDeleteComponent,
    //NombreCompletoPipe,
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
  ]
})
export class AlumnosModule { }
