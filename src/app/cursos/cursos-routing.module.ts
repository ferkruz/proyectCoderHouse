import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosListComponent } from './cursos-list/cursos-list.component';

const routes: Routes = [
  {
    path: 'form',
    component: CursosFormComponent
  },
  {
    path: 'list',
    component: CursosListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
