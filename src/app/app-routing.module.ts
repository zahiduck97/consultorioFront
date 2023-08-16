import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./common/components/login/login.component";
import {NotFoundComponent} from "./common/components/not-found/not-found.component";
import {AuthGuard} from "./common/auth/auth.guard";
import {LoginGuard} from "./common/auth/login.guard";

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard], // Valida si estás logeado
    loadChildren: () => import('./consultorio/consultorio.module').then(m => m.ConsultorioModule)
  },
  {
    path: 'login',
    // canActivate: [LoginGuard], // Si estas logeado te redirigue al home
    component: LoginComponent
  },
  {
    path: 'notFound',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '/notFound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
