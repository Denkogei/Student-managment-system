import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataGenerationComponent } from './data-generation/data-generation.component';
import { DataProcessingComponent } from './data-processing/data-processing.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { StudentReportComponent } from './student-report/student-report.component';


export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { 
      path: '', 
      component: DashboardComponent,
      children: [
        { path: 'data-generation', component: DataGenerationComponent }, // Or use loadComponent
        { path: 'data-processing', component: DataProcessingComponent },
        { path: 'file-upload', component: FileUploadComponent },
        { path: 'student-management', component: StudentManagementComponent },
        { path: 'student-report', component: StudentReportComponent }
      ]
    }
  ];