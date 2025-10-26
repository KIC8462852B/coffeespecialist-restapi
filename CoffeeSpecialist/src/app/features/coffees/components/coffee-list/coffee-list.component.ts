import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AddCoffee } from '../../models/add-coffee';
import { ApiService } from '../../../auth/services/api.service';
import { Coffee } from '../../models/coffee';
import { AddCoffeeComponent } from '../add-coffee/add-coffee.component'; 

@Component({
  standalone: true,
  selector: 'app-coffee-list',
  imports: [CommonModule, AddCoffeeComponent], // Módulos necesarios
  templateUrl: './coffee-list.component.html',
  styleUrls: ['./coffee-list.component.css']
})
export class CoffeeListComponent implements OnInit {

  coffees: Coffee[] = [];
  customCoffees: AddCoffee[] = []; // Lista de cafés personalizados
  showCoffeeId: number | null = null; // ID del café que tiene detalles abiertos
  

  isLoading = false;
  errorMessage = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadCoffees();
    this.loadCustomCoffees();

  }

  loadCoffees() {
    this.isLoading = true;
    this.apiService.getCoffees().subscribe({
      next: (data) => {
        this.coffees = data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.message || 'Error al cargar cafés.';
        this.isLoading = false;
      }
    });
  }

  showDetails(coffeeId: number) {
    this.showCoffeeId = this.showCoffeeId === coffeeId ? null : coffeeId;
  }

  loadCustomCoffees() {
    const storedCoffees = localStorage.getItem('customCoffees');
    this.customCoffees = storedCoffees ? JSON.parse(storedCoffees) : [];
  }

  onCoffeeAdded(newCoffee: AddCoffee) {
    this.customCoffees.push(newCoffee); // Añadir a la lista personalizada
    localStorage.setItem('customCoffees', JSON.stringify(this.customCoffees)); // Guardar en localStorage
  }
}
