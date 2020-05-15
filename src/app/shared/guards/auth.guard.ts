import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { GlobalVars } from '../vars/global.vars';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private readonly gVars: GlobalVars,
    private readonly router: Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuth: boolean = this.gVars.isAuthorized;
    if (!isAuth) {
      this.router.navigate(['/index']);
    }
    return isAuth;
  }

}
