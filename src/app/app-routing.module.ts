import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate, Router } from '@angular/router';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home/:index', component: HomeComponent },
  // { path: 'update/:id' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: JWT_OPTIONS, useValue: JWT_OPTIONS }],
})
export class AppRoutingModule {}
