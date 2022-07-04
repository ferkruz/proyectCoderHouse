import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosListComponent } from './components/alumnos/alumnos-list/alumnos-list.component';
import { CursosListComponent } from './components/cursos/cursos-list/cursos-list.component';

const routes: Routes = [
  { path: 'cursos', component: CursosListComponent },
  { path: 'alumnos', component:AlumnosListComponent },
  { path: 'home', component:AlumnosListComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
