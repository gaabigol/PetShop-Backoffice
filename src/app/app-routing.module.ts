import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginPageModule } from './pages/account/login/login.module';
import { LoginPageRoutingModule } from './pages/account/login/login-routing.module';

const routes: Routes = [
  
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule) },
  { path: 'login', loadChildren: () => import('./pages/account/login/login.module').then(m => m.LoginPageModule) },
  {
    path: 'frame',
    loadChildren: () => import('./pages/shared/frame/frame.module').then( m => m.FramePageModule)
  },
  {
    path: 'frameless',
    loadChildren: () => import('./pages/shared/frameless/frameless.module').then( m => m.FramelessPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
