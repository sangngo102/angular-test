import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './page/homepage/homepage.component';

const routes: Routes = [{ path: '', component: HomepageComponent }];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [],
})
export class AppRoutingModule {}
