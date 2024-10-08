import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../shared/models/user';
import { Login } from '../shared/models/login';
import { HttpClient } from '@angular/common/http';

const LS_CHAVE: string = "usuarioLogado";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3000/usuarioLogado';



  constructor(private http: HttpClient) { }

  public get usuarioLogado(): User {
    let usu = this.getUser();
    return (usu ? JSON.parse(localStorage[LS_CHAVE]) : null); 

  }

  public set usuarioLogado(user: User) {
    localStorage[LS_CHAVE] = JSON.stringify(user);
  }

  addUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(this.apiUrl, user);
  }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  public login(login: Login): Observable<User | null> {
    let usu = new User(1, "085", "USER-FUNC", login.email, login.senha, "teste street 18th", "085987655678", "FUNC");
    
    if(login.email == login.senha) {
      if(login.email == "admin") {
        let usu = new User(1, "085", "USER-ADMIN", login.email, login.senha, "teste street 18th", "085987655678", "ADMIN");
      } else if (login.email == "cliente") {
        let usu = new User(1, "085", "USER-CLIENTE", login.email, login.senha, "teste street 18th", "085987655678", "CLIENTE");
      }
      return of(usu);
    }
    return of(null);
  }

  logout() {
    delete localStorage[LS_CHAVE];
  }
}
