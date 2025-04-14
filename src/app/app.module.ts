// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
// import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// // Material
// import { MatModule } from './shared/mat.module';

// // Interceptors
// import { JwtInterceptor } from './shared/interceptors/jwt.interceptor';
// import { AuthGuard } from './shared/interceptors/guards/auth.guard';

// // Routing
// import { AppRoutingModule } from './app-routing.module';

// // Components
// import { AppComponent } from './app.component';
// import { LoginComponent } from './auth/login/login.component';
// import { DashboardComponent } from './dashboard/dashboard.component';

// @NgModule({
//   declarations: [
//     AppComponent // Only non-standalone components
//   ],
//   imports: [
//     // Angular modules
//     BrowserModule,
//     HttpClientModule,
//     FormsModule,
//     ReactiveFormsModule,
    
//     // App modules
//     AppRoutingModule,
//     MatModule,
    
//     // Standalone components
//     LoginComponent,
//     DashboardComponent
//   ],
//   providers: [
//     { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
//     AuthGuard
//   ],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }