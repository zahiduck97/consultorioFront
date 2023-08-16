import {Component, computed, Inject, OnInit} from '@angular/core';
import {AuthService} from "../../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  isLoggedIn$;

  constructor(
    private AuthService: AuthService
  ) {
  }

  ngOnInit() {
  }

  loggedIn = computed(() => {
    return this.AuthService.isLoggedIn
  })

}
