import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../services/student.service';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { FullNamePipe } from '../../pipes/full-name.pipe';
import { Student } from '../../models/student'; 
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  standalone: true,
  imports: [MatCardModule, MatTableModule, FullNamePipe],
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  students: Student[] = []
  displayedColumns: string[] = ['fullName', 'actions'];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.students = this.studentService.getStudents();
  }
}
