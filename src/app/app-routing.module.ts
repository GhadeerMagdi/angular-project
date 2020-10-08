import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path:'' , redirectTo: 'signin', pathMatch:'full'},
  {path:'home' , canActivate:[AuthGuard] , component:HomeComponent},
  {path:'register' , component:RegisterComponent},
  {path:'signin' , component:LoginComponent},
  {path:'moviedetails/:id' , component:MoviedetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
