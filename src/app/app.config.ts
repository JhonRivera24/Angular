import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'; // Importa ReactiveFormsModule

import { routes } from './app.routes'; // Asegúrate de que el archivo de rutas esté correcto

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom(ReactiveFormsModule) // Importa el módulo de formularios reactivos
  ]
};
