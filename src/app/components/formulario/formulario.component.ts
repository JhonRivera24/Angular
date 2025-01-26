
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario', // Cambia el selector al nombre apropiado del nuevo componente
  standalone: true, // Mantiene la configuración standalone
  imports: [ReactiveFormsModule], // Se mantiene ReactiveFormsModule
  templateUrl: './formulario.component.html', // Ajusta la ruta del template
  styleUrls: ['./formulario.component.css'] // Ajusta la ruta del archivo de estilos
})
export class FormularioComponent {
  movieForm: FormGroup;
  name: FormControl;
  duration: FormControl;
  director: FormControl;

  constructor() {
    this.name = new FormControl('', Validators.required);
    this.duration = new FormControl('', [
      Validators.required,
      Validators.max(300)
    ]);
    this.director = new FormControl('');

    this.movieForm = new FormGroup({
      name: this.name,
      duration: this.duration,
      director: this.director
    });
  }

  handleSubmit(): void {
    console.log('Movie created:', this.movieForm.value);
    this.movieForm.reset();
  }
}
