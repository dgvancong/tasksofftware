import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'auth', loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule) },

  { path: 'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule) },

  { path: 'project', loadChildren: () => import('./modules/project/project.module').then(m => m.ProjectModule) },

  { path: '**', loadChildren: () => import('./modules/error/error.module').then(m => m.ErrorModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
