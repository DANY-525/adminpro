import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from '../app-routing.module';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [LoginComponent,
    RegisterComponent],

   exports:[LoginComponent,
    RegisterComponent],


  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class AuthModule { }
