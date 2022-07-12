import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosFormComponent } from './alumnos/alumnos-form/alumnos-form.component';
import { AlumnosListComponent } from './alumnos/alumnos-list/alumnos-list.component';
import { CursosListComponent } from './components/cursos/cursos-list/cursos-list.component';

import { CursosMenuComponent } from './cursos/cursos-menu/cursos-menu.component';
import { AlumnosMenuComponent } from './alumnos/alumnos-menu/alumnos-menu.component';

const routes: Routes = [
  { path: 'cursos', component: CursosListComponent },
  { path: 'alumnos', component:AlumnosListComponent },
  { path: 'home', component:AlumnosListComponent },
  { path: 'alumnosModule',
    component: AlumnosMenuComponent, 
    loadChildren: () => import('./alumnos/alumnos.module').then(m => m.AlumnosModule)
  },
  { path: 'cursosModule',
    component: CursosMenuComponent, 
    loadChildren: () => import('./cursos/cursos.module').then(m => m.CursosModule)
  },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
