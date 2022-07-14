import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosFormComponent } from './cursos-form/cursos-form.component';
import { CursosListComponent } from './cursos-list/cursos-list.component';
import { CursosMenuComponent } from './cursos-menu/cursos-menu.component';
import { NombreCompletoPipe } from '../shared/pipes/nombre-completo.pipe';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceAlumnos } from '../shared/services/alumnos.service';
import { ThemeInitializerProvider } from '../theme/theme-initializer.provider';
import { RoundBlockDirective } from '../shared/directives/round-block.directive';
import { ResaltarDirective } from '../shared/directives/resaltar.directive';
import { CursosDeleteComponent } from './cursos-delete/cursos-delete.component';
import { CursosEditComponent } from './cursos-edit/cursos-edit.component';
import { ModalComponent } from './modal/modal.component';
import { ResaltarCursosDirective } from '../shared/directives/resaltar-cursos.directive';
import { RoundBlockCursosDirective } from '../shared/directives/round-block-cursos.directive';

@NgModule({
  declarations: [
    RoundBlockCursosDirective,
    RoundBlockCursosDirective,
    CursosFormComponent,
    CursosListComponent,
    CursosMenuComponent,
    NombreCompletoPipe,
    CursosDeleteComponent,
    CursosEditComponent,
    ModalComponent,
    ResaltarCursosDirective,
    RoundBlockCursosDirective,
  ],
  imports: [
    CommonModule,
    CursosRoutingModule,
    MaterialModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
  ],
  providers: [ServiceAlumnos, ThemeInitializerProvider],
})
export class CursosModule { }
