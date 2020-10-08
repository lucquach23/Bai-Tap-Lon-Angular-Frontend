import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisPageComponent} from './regis-page/regis-page.component'
import {RegisPageGVComponent} from './regis-page-gv/regis-page-gv.component';
import { FileNotFoundComponent } from './shared/file-not-found/file-not-found.component';
import { RoleGuard } from './lib/auth.guard';
import { Role } from './models/role';
import { AuthGuard } from './lib/auth.guard';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register-sv',component:RegisPageComponent ,
    canActivate: [AuthGuard],

  },
  {
    path: 'register-gv',component:RegisPageGVComponent,
    canActivate: [AuthGuard],
  },
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
    canActivate: [AuthGuard]
  },
  {
    path: '**',
    component: FileNotFoundComponent,
  }, 
];
@NgModule({
  //imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
