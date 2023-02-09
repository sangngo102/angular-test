import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './page/homepage/homepage.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'oauth', component: AuthComponent}];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
