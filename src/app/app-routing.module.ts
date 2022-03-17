import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth/services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule), canActivate:[AuthGuard] }, 
  { path: 'movies', loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule), canActivate:[AuthGuard] }, 
  { path: 'sign-in', loadChildren: () => import('./pages/auth/sign-in/sign-in.module').then(m => m.SignInModule) }, 
  { path: 'sign-up', loadChildren: () => import('./pages/auth/sign-up/sign-up.module').then(m => m.SignUpModule) },
  { path: '**', redirectTo:'/home', pathMatch:'full'}, // If does not match redirect.
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
