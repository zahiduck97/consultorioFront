import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "./auth.service";

export const LoginGuard: CanActivateFn = (route, state) => {
  console.log('Login: ', inject(AuthService).isLoggedIn)
  return inject(AuthService).isLoggedIn
    ? inject(Router).createUrlTree(['/'])
    : true;
};
