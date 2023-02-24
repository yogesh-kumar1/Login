import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { AuthComponent } from './auth/auth.component';
const routes: Routes = [
  {path : '', redirectTo: '/login' , pathMatch: 'full'},
  {path : 'login', component: LoginComponent},

  {path: 'auth', component: AuthComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
