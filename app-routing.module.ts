import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  
  
  

  {
    path: 'login',
    loadChildren: './usuario/login/login.module#LoginPageModule'
  },
  { path: 'perfil', loadChildren: './usuario/perfil/perfil.module#PerfilPageModule' },
  
  {
    path: 'cadastro', loadChildren: './produto/cadastro/cadastro.module#CadastroPageModule'
  },
  { path: 'perfil/:key', loadChildren: './produto/perfil/perfil.module#PerfilPageModule' },
  { path: 'list', loadChildren: './produto/list/list.module#ListPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
