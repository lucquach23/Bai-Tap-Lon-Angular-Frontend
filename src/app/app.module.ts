import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes,RouterModule } from "@angular/router";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SlidebarComponent } from './slidebar/slidebar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { GiangvienComponent } from './main-content/giangvien/giangvien.component';
import { SinhvienComponent } from './main-content/sinhvien/sinhvien.component';
import {LoginComponent} from './login/login.component';
import { PageStudentRegisterComponent } from './page-student-register/page-student-register.component'
const route:Routes=[
  {
    path: '',
    component: SinhvienComponent
  },
    {
      path: 'sinhvien',
      component: SinhvienComponent
    },
    {
      path: 'giangvien',
      component: GiangvienComponent
    },
    {
      path:'login',
      component:LoginComponent
    }
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SlidebarComponent,
    MainContentComponent,
    GiangvienComponent,
    SinhvienComponent,
    PageStudentRegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
