import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/interceptors/guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataGenerationComponent } from './data-generation/data-generation.component';
import { StudentManagementComponent } from './student-management/student-management.component';
import { DataProcessingComponent } from './data-processing/data-processing.component';
import { StudentReportComponent } from './student-report/student-report.component';
import { FileUploadComponent } from './file-upload/file-upload.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { 
    path: '', 
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'data-generation', component: DataGenerationComponent },
      { path: 'data-processing', component: DataProcessingComponent },
      { path: 'file-upload', component: FileUploadComponent },
      { path: 'student-management', component: StudentManagementComponent },
      { path: 'student-report', component: StudentReportComponent },
      { path: '', redirectTo: 'student-report', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }