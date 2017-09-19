import {Router, RouterStateSnapshot, CanActivate, ActivatedRoute, ActivatedRouteSnapshot} from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthorizeGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('presentUser')) {
      return true;
    }
    this.router.navigate(['/login'], {queryParams: { returnUrl: state.url }});
    return false;
  }

  // TODO cambiar este método a un servicio que consulte con el backend la existencia del usuario
  private isAuthorized(): boolean {
    const isAuthorized: boolean = Math.random() < 0.5;
    console.log(`is authorized = ${isAuthorized}`);

    if ( !isAuthorized ) {
      console.log(``);
    }
    return isAuthorized;
  }

}
