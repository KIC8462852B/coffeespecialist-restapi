import { Routes } from '@angular/router';
import { CoffeeListComponent } from './features/coffees/components/coffee-list/coffee-list.component';
import { NewOrderComponent } from './features/coffees/components/new-order/new-order.component';
import { isBaristaGuard } from './features/auth/guards/isBarista.guard';
import { AddCoffeeComponent } from './features/coffees/components/add-coffee/add-coffee.component';


export const appRoutes: Routes = [
  // /menu -> lista de cafés
  { path: 'coffee-list', component: CoffeeListComponent },
  // /new-order -> formulario de gestión de pedidos (protegido por guard)
  { path: 'new-order', component: NewOrderComponent, canActivate: [isBaristaGuard] },

  { path: 'add-coffee', component: AddCoffeeComponent},

  // Redirección por defecto
  { path: '', redirectTo: 'coffee-list', pathMatch: 'full' }
];
