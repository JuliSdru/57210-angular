import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';


import { AppComponent } from './app.component';


import { StudentService } from './services/student.service';


import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { StudentListComponent } from './components/student-list/student-list.component';
import { StudentFormComponent } from './components/student-form/student-form.component';

@NgModule({
  imports: [
    BrowserModule,           
    BrowserAnimationsModule,    
    ReactiveFormsModule,        
    MatTableModule,             
    MatToolbarModule,          
    MatSidenavModule,         
    MatButtonModule,          
    MatInputModule,           
    MatCardModule,           

    // componentes-standalone
    ToolbarComponent,
    NavbarComponent,
    StudentListComponent,
    StudentFormComponent
  ],
  providers: [
    StudentService              
  ],
})
export class AppModule { }
