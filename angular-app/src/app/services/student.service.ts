import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private students: Student[] = [
    { firstName: 'Juan', lastName: 'Pérez' },
    { firstName: 'Ana', lastName: 'García' }
  ];

  getStudents(): Student[] {
    return this.students;
  }
}
