import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../shared/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private BASE_URL = 'http://localhost:3000/usuarios/';

  httpOptions = {
    headers: new Headers({
      'Content-type': 'application/json'
    })
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.BASE_URL);
  }

  addUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.BASE_URL,
                                     user);
  }

  delete(cpf: string) {
    return this.httpClient.delete<User>(this.BASE_URL + cpf);
  }

  update(user: User): Observable<User> {
    return this.httpClient.put<User>(this.BASE_URL + user.cpf,
                                     JSON.stringify(user));
  }

  getById(id: number): Observable<User> {
    return this.httpClient.get<User>(this.BASE_URL + id);
  }

  
}
