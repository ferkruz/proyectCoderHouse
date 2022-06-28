import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RoundBlockDirective } from './shared/directives/round-block.directive';
import { ResaltarDirective } from './shared/directives/resaltar.directive';

import { ServiceAlumnos } from './shared/services/alumnos.service';
import { NombreCompletoPipe } from './shared/pipes/nombre-completo.pipe';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AlumnosListComponent } from './components/alumnos/alumnos-list/alumnos-list.component';
import { CursosListComponent } from './components/cursos/cursos-list/cursos-list.component';
import { ClasesListComponent } from './components/clases/clases-list/clases-list.component';
import { AlumnosFormComponent } from './components/alumnos/alumnos-form/alumnos-form.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { ThemeInitializerProvider } from './theme/theme-initializer.provider';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AlumnosListComponent,
    CursosListComponent,
    CursosListComponent,
    ClasesListComponent,
    AlumnosFormComponent,
    RoundBlockDirective,
    ResaltarDirective,
    NombreCompletoPipe,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    
  ],
  providers: [ServiceAlumnos, ThemeInitializerProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
