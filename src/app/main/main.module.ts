import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';
import { MainComponent } from './main.component';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SinhvienComponent } from './sinhvien/sinhvien/sinhvien.component';
import { HocphanComponent } from './hocphan/hocphan/hocphan.component';
import { GiangvienComponent } from './giangvien/giangvien/giangvien.component';
import { HocPhanModule } from './hocphan/hocphan.module';

export const mainRoutes: Routes = [
  {
      path: '', component: MainComponent,
      children: [
          {
              path: '', component: DashboardComponent
          },
          {
              path: 'danhsach',  loadChildren: () => import('./user/user.module').then(m => m.UserModule)
          },
          {
              path: 'hocphan', loadChildren: () => import('./hocphan/hocphan.module').then(m => m.HocPhanModule)
          },
      ]
  }
];
@NgModule({
  declarations: [
    SidebarComponent,
    FooterComponent,
    NavbarComponent,
    MainComponent,
    SinhvienComponent,
    HocphanComponent,
    GiangvienComponent,

  ],
  imports: [
    CommonModule,

    RouterModule.forChild(mainRoutes)
  ]
})
export class MainModule { }
