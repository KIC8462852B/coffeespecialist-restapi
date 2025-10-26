import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ApiService } from '../../../auth/services/api.service';
import { BaristaOrder } from '../../models/barista-order';
import { Coffee } from '../../models/coffee';

@Component({
  standalone: true,                   // <<--- marcamos el componente como standalone
  selector: 'app-add-coffee',
  imports: [CommonModule, FormsModule], // <<--- Importamos FormsModule para usar [(ngModel)]
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  coffees: Coffee[] = [];

  // Pedido que se está creando
  baristaOrder: BaristaOrder = {
    id: 0,
    clientName: '',
    coffeeName: '',
    quantity: 1,
  };

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    // Cargar la lista de cafés de la API
    this.loadCoffees();
  }

  loadCoffees() {
    this.apiService.getCoffees().subscribe({
      next: (data) => {
        this.coffees = data; // array de coffees
      },
      error: (err) => {
        console.error('Error al obtener cafés:', err);
      }
    });
  }

  // Método para crear un nuevo pedido
  createOrder(form: NgForm) {
    if (form.valid) {
      // Generamos un ID único (simplemente con la fecha)
      this.baristaOrder.id = new Date().getTime();

      // Guardamos en localStorage (o donde prefieras)
      const existingOrdersStr = localStorage.getItem('baristaOrders');
      const existingOrders = existingOrdersStr ? JSON.parse(existingOrdersStr) : [];
      existingOrders.push(this.baristaOrder);
      localStorage.setItem('baristaOrders', JSON.stringify(existingOrders));

      console.log('Pedido guardado:', this.baristaOrder);

      // Reseteamos el objeto y el formulario
      this.baristaOrder = { id: 0, clientName: '', coffeeName: '', quantity: 1, };
      form.resetForm({
        id: 0,
        clientName: '',
        coffeeName: '',
        quantity: 1,
      
      });
    }
  }
}
