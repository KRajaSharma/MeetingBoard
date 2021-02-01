import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGaurdService } from './service/auth-gaurd.service';


const routes: Routes = [
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGaurdService]},
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
