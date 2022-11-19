import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { SigninComponent } from './Components/signin/signin.component';
import { SignupComponent } from './Components/signup/signup.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'admin', loadChildren: () => import('./Modules/admin/admin.module').then(m => m.AdminModule) },  //lazy load admin module
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent},
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
