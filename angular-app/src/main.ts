import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';

import { ToolbarComponent } from './app/components/toolbar/toolbar.component';
import { NavbarComponent } from './app/components/navbar/navbar.component';
import { StudentListComponent } from './app/components/student-list/student-list.component';
import { StudentFormComponent } from './app/components/student-form/student-form.component';

import { FullNamePipe } from './app/pipes/full-name.pipe';
import { TitleSizeDirective } from './app/directives/title-size.directive';
import { StudentService } from './app/services/student.service';


bootstrapApplication(AppComponent, {
  providers: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule,
    MatCardModule,
    ToolbarComponent,
    NavbarComponent,
    StudentListComponent,
    StudentFormComponent,
    FullNamePipe,
    TitleSizeDirective,
    StudentService,
  ]
})
  .catch(err => console.error(err));
