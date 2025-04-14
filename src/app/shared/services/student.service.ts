import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  constructor() {}

  getStudentCount(): Observable<number> {
    // Simulating a backend API call
    return of(100); // Replace this with HttpClient call when backend is ready
  }
}
