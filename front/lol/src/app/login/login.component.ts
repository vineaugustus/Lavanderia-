import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Login } from '../shared/models/login';
import { LoginService } from '../services/login.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  @ViewChild('formLogin') formLogin! : NgForm;
  login: Login = new Login();
  loading: boolean = false;
  message!: string;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(
    private loginService: LoginService,
    private router: Router,
    private route: ActivatedRoute){ 
      // if (this.loginService.usuarioLogado) {
      //   this.router.navigate( ["/home"] )
      // }
    }

    public logar(): void {
      this.loading = true;

      if (this.formLogin.valid) {
        this.loginService.login(this.login).subscribe( (usu => {
          if(usu != null) {
            this.loginService.usuarioLogado = usu;
            this.loading = false;
            this.router.navigate( ["/home"] )
          } else {
            this.loading = false;
            this.message = "Usuário/Senha inválidos."
          }
        }))
      }
    }
}
