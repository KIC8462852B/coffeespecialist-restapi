import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Coffee } from '../../coffees/models/coffee';

@Injectable({
  providedIn: 'root' 
})
export class ApiService {
  private readonly apiUrl = 'https://api.sampleapis.com/coffee/hot'; 

  constructor(private http: HttpClient) {}

 
  getCoffees(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.apiUrl).pipe(
      catchError(error => {
        console.error('Error al obtener cafés desde la API:', error);
        return throwError(() => new Error('No se pudieron cargar los cafés.'));
      })
    );
  }
}
