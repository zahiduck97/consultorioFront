import {Injectable, signal} from '@angular/core';

import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = signal(false);

  get isLoggedIn() {
    return this.loggedIn();
  }

  constructor(
    private router: Router
  ) { }

  login() {
    this.loggedIn.set(true);
    this.router.navigate(['/']);
  }

  logout() {
    this.loggedIn.set(false);
    this.router.navigate(['/login']);
  }
}
