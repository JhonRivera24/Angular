import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'] // O .scss si usas SCSS
})
export class NavigationComponent {
  // Variables para los estilos dinámicos del botón
  buttonBackgroundColor: string = ''; // Color de fondo inicial
  buttonTextColor: string = ''; // Color de texto inicial

  // Método para cambiar los colores
  changeColor(isHovering: boolean): void {
    if (isHovering) {
      this.buttonBackgroundColor = '#28a745'; // Verde
      this.buttonTextColor = '#fff'; // Blanco
    } else {
      this.buttonBackgroundColor = ''; // Restaurar color original
      this.buttonTextColor = ''; // Restaurar color original
    }
  }
}
