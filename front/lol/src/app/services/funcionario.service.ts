import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Funcionario } from '../shared/models/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private apiUrl = 'http://localhost:3000/funcionarios';
   

  constructor(private http: HttpClient) { }

  getFuncionario(): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(this.apiUrl);
  }

  addFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.apiUrl, funcionario);
  }

  updateFuncionario(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.put<Funcionario>(`${this.apiUrl}/${funcionario.id}`, funcionario);
  }

  
  deleteFuncionario(id: number): Observable<Funcionario> {
    return this.http.delete<Funcionario>(`${this.apiUrl}/${id}`);
  }

}
