import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AlumnosFormComponent } from './alumnos-form/alumnos-form.component';
import { AlumnosListComponent } from './alumnos-list/alumnos-list.component';

const routes: Routes = [
  {
    path: 'form',
    component: AlumnosFormComponent
  },
  {
    path: 'list',
    component: AlumnosListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlumnosRoutingModule { }
