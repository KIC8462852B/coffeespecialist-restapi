import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';

import { ApiService } from '../../../auth/services/api.service';

import { Coffee } from '../../models/coffee';

@Component({
  standalone: true,
  selector: 'app-coffee-detail',
  imports: [CommonModule, RouterModule], // RouterModule para usar directivas de enrutado si hicieras un enlace "Volver"
  templateUrl: './coffee-detail.component.html',
  styleUrls: ['./coffee-detail.component.css']
})
export class CoffeeDetailComponent implements OnInit {

  coffee: Coffee | null = null;
  isLoading = false;
  errorMessage = '';

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const coffeeId = +params['id']; // Convierte de string a número
      this.getCoffeeDetails(coffeeId);
    });
  }

  getCoffeeDetails(id: number) {
    this.isLoading = true;
    this.apiService.getCoffees().subscribe({
      next: (coffeeList) => {
        // Como la API no tiene endpoint individual, buscamos en el array
        this.coffee = coffeeList.find(c => c.id === id) || null;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.message || 'Error al cargar detalle de café.';
        this.isLoading = false;
      }
    });
  }
}
