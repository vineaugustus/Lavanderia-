import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CriarPedidoComponent } from './cliente/criar-pedido/criar-pedido.component';
import { LoginComponent } from './login/login.component';
import { AutoCadastroComponent } from './autocadastro/autocadastro.component';
import { PaginaInicialClienteComponent } from './cliente/pagina-inicial-cliente/pagina-inicial-cliente.component';
import { ConsultarPedidoComponent } from './cliente/consultar-pedido/consultar-pedido.component';
import { RoupaComponent } from './funcionario/crud/roupa/roupa.component';
import { FuncionarioComponent } from './funcionario';
import { InicialFuncionarioComponent } from './funcionario/pagina-inicial-funcionario/inicial-funcionario';
import { FuncListaPedidosComponent } from './funcionario/func-lista-pedidos/funcListaPedidos';


export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'autocadastro', component: AutoCadastroComponent },
    { path: 'pedidos/novo', component: CriarPedidoComponent },
    { path: 'pedidos/consultar/:id', component: ConsultarPedidoComponent },
    { path: 'home/cliente', component: PaginaInicialClienteComponent },
    { path: 'roupas', component: RoupaComponent },
    
    { path: 'consultar-pedido', component: ConsultarPedidoComponent },
    { path: 'funcionarios', component: FuncionarioComponent },
    { path: 'inicialfuncionario', component: InicialFuncionarioComponent },		
    { path: 'consultar-pedido', component: ConsultarPedidoComponent },		
    { path: 'funcListaPedido', component: FuncListaPedidosComponent }
];
