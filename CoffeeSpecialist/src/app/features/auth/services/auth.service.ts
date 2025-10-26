import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private barista: boolean = true; 

  constructor() {}

  isBarista(): boolean {
    return this.barista;
  }

}
