import {Component} from '@angular/core';
import {AuthService} from "../../../common/auth/auth.service";

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.scss']
})
export class PacientesComponent {
  constructor(
    private AuthService: AuthService,
  ) {
  }

  logOut() {
    this.AuthService.logout()
  }

}
