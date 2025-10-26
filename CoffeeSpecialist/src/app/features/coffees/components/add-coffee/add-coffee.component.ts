import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { AddCoffee } from '../../models/add-coffee';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-add-coffee',
  imports: [FormsModule, CommonModule],
  templateUrl: './add-coffee.component.html',
  styleUrls: ['./add-coffee.component.css'],
  
})
export class AddCoffeeComponent {
  coffee: AddCoffee = {
    id: 0,
    name: '',
    description: '',
    ingredients: '',
    imageUrl: ''
  };

  @Output() coffeeAdded = new EventEmitter<AddCoffee>(); // Emitimos el evento

  addCoffee(form: NgForm) {
    if (form.valid) {
      this.coffee.id = new Date().getTime(); // Generar ID único
      this.coffeeAdded.emit({ ...this.coffee }); // Emitir evento al padre
      console.log('Café creado:', this.coffee);

      // Resetear el formulario
      this.coffee = { id: 0, name: '', description: '', ingredients: '', imageUrl: '' };
      form.resetForm();
    }
  }
}
