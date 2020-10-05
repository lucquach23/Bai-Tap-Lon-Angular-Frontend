import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {RegisPageComponent} from './regis-page/regis-page.component'
import {RegisPageGVComponent} from './regis-page-gv/regis-page-gv.component';
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register-sv',component:RegisPageComponent    
  },
  {
    path: 'register-gv',component:RegisPageGVComponent    
  },
  {
    path: '',
    loadChildren: () => import('./main/main.module').then((m) => m.MainModule),
  },
];
@NgModule({
  //imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
