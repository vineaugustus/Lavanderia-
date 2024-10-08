import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { Observable } from 'rxjs';

// export class AuthGuard implements CanActivate {
//   constructor (
//     private loginService: LoginService,
//     private router: Router
//   ) {}
  
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
//    const usuarioLogado = this.loginService.usuarioLogado;
//    let url = state.url;
//    if (usuarioLogado) {
//       if(route.data?.['role'] && route.data?.['role'].indexOf(usuarioLogado.profile)===-1) {
//         this.router.navigate(['/login'], 
//         { queryParams: { error: "Proibido o acesso a " + url}})
//         return false;
//       } 
//       return true;
//    }
//    this.router.navigate(['/login'],
//     { queryParams: {error: "Deve fazer o login antes de  acessar " + url}})

//     return false;
//   }
  
// }
export const authGuard: CanActivateFn = (route, state) => {
  return true;
};
