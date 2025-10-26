import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const isBaristaGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  
  return authService.isBarista(); // Retorna true o false según el estado del barista
};
