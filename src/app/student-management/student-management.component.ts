import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL IMPORTS (MUST be exactly these)
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-student-management',
  standalone: true,
  imports: [
    CommonModule,
    // MATERIAL IMPORTS (Must be in this order)
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatChipsModule,
    MatDialogModule
  ],
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.scss']
})
export class StudentManagementComponent {
  displayedColumns: string[] = ['studentId', 'name', 'class', 'score', 'status', 'actions'];
  dataSource = []; // Initialize with your actual data source

  // Add these methods
  openAddDialog() {
    console.log('Add dialog would open here');
  }

  viewStudent(student: any) {
    console.log('View student:', student);
  }

  editStudent(student: any) {
    console.log('Edit student:', student);
  }

  deleteStudent(student: any) {
    console.log('Delete student:', student);
  }
}