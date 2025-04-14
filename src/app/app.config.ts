import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { MatModule } from './shared/mat.module';
import { jwtInterceptor } from './shared/interceptors/jwt.interceptor';

// Export the appConfig constant
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([jwtInterceptor])
    ),
    importProvidersFrom(MatModule),
    // Add other providers here
  ]
};