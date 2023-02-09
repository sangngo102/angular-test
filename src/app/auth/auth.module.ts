import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthRoutingModule } from './auth-routing.module';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPassComponent,
  ],
  imports: [AppRoutingModule, CommonModule, AuthRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
