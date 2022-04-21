import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrderProcessingComponent } from './order-processing/order-processing.component';
import { RegisterComponent } from './signup/signup.component';

const routes: Routes = [
  {path: '' ,component:LoginComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:RegisterComponent},
  {path: 'home', component:HomeComponent},
  {path: 'order', component:OrderProcessingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
