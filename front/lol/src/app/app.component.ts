import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
//import { CriarPedidoComponent } from './criar-pedido/criar-pedido.component';
import { CriarPedidoComponent } from './cliente/criar-pedido/criar-pedido.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PaginaInicialClienteComponent } from './cliente/pagina-inicial-cliente/pagina-inicial-cliente.component';
//import { ConsultarPedidoComponent } from './consultar-pedido/consultar-pedido.component';
import { ConsultarPedidoComponent } from './cliente/consultar-pedido/consultar-pedido.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
//import { LoginService } from './services/loginService';
import { LoginService } from './services/login.service';
import { User } from './shared/models/user';
//import { RoupaComponent } from './crud/roupa/roupa.component';
//import { RoupaComponent } from './funcionario';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    CriarPedidoComponent,
    PaginaInicialClienteComponent,
    HeaderComponent,
    FooterComponent,
    ConsultarPedidoComponent,
    HttpClientModule,
    CommonModule, 
    RouterModule,
  //  RoupaComponent,
    
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lol';
  
  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  get usuarioLogado(): User | null {
    return this.loginService.usuarioLogado;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
  
}
