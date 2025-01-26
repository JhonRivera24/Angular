import { Routes } from '@angular/router';
import { NotFoundComponent } from './components/error-pages/not-found/not-found.component';
import { ServerErrorComponent } from './components/error-pages/server-error/server-error.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HomeComponent } from './pages/home/home.component';  // Importar el componente Home
import { AboutComponent } from './pages/about/about.component'; // Importar el componente About
import { ContactComponent } from './pages/contact/contact.component'; // Importar el componente Contact
import { ServicesComponent } from './pages/services/services.component'; // Importar el componente Services
import { FormularioComponent } from './components/formulario/formulario.component'; // Importar el componente Formulario

export const routes: Routes = [
  { path: '', component: NavigationComponent }, // Ruta principal con el NavigationComponent
  { path: 'home', component: HomeComponent }, // Ruta para el componente Home
  { path: 'about', component: AboutComponent }, // Ruta para el componente About
  { path: 'contact', component: ContactComponent }, // Ruta para el componente Contact
  { path: 'services', component: ServicesComponent }, // Ruta para el componente Services
  { path: 'formulario', component: FormularioComponent }, // Ruta para el formulario
  { path: '404', component: NotFoundComponent }, 
  { path: '500', component: ServerErrorComponent },
  { path: '**', redirectTo: '404' } // Ruta comodín
];
