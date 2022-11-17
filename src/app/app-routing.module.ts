import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
   { path: '', pathMatch: 'full', redirectTo: '/home' },
  // {
  //   path: 'path', 
  //   component: Component,
  //   children: [
  //     { path: 'childpath', component: ChildComponent }  //usar childPaths no admin module
  //             ]
  // },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
