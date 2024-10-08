import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';
import { Roupa } from '../shared/models/roupas';



@Injectable({
  providedIn: 'root'
})
export class RoupaService {

  //private apiUrl = 'http://localhost:3000/roupas';
  private apiUrl = 'http://localhost:8080/roupas'; //ajustado para o backend
  

  constructor(private http: HttpClient) { }

  getRoupa(): Observable<Roupa[]> {
    return this.http.get<Roupa[]>(this.apiUrl).pipe(
      catchError(this.handleError)
    );
  }

  // addRoupa(roupa: Roupa): Observable<Roupa> {
  //   return this.http.post<Roupa>(this.apiUrl, roupa);
  // }

  // updateRoupa(roupa: Roupa): Observable<Roupa> {
  //   return this.http.put<Roupa>(`${this.apiUrl}/${roupa.id}`, roupa);
  // }

  saveRoupa(roupa: Roupa): Observable<Roupa> {
    if (roupa.id) {
      return this.http.put<Roupa>(`${this.apiUrl}/${roupa.id}`, roupa).pipe(
        catchError(this.handleError)
      );
    } else {
      return this.http.post<Roupa>(this.apiUrl, roupa);
    }
  }
  
  // deleteRoupa(id: number): Observable<Roupa> {
  //   return this.http.delete<Roupa>(`${this.apiUrl}/${id}`);
  // }

  deleteRoupa(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Erro do lado do cliente
      errorMessage = `Erro: ${error.error.message}`;
    } else {
      // Erro do lado do servidor
      errorMessage = `Código do erro: ${error.status}\nMensagem: ${error.message}`;
    }
    // Aqui você pode adicionar lógica para logar o erro ou exibir uma mensagem ao usuário
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }


}
