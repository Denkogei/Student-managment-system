import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router'; // For router-outlet
import { StudentService } from '../shared/services/student.service';
import { SidebarComponent } from '../shared/components/sidebar/sidebar.component'; // Import Sidebar component
import { HeaderComponent } from '../header/header.component'; // Import Header component

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule, // To use router-outlet
    SidebarComponent, // Import Sidebar component
    HeaderComponent // Import Header component
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  studentCount = 0;

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudentCount();
  }

  loadStudentCount(): void {
    this.studentService.getStudentCount().subscribe({
      next: (count: number) => {
        this.studentCount = count;
      },
      error: (err: unknown) => {
        console.error('Failed to load student count:', err);
      }
    });
  }
}
