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
import { UnauthorizedComponent } from '../shared/unauthorized/unauthorized.component';
import { FileNotFoundComponent } from '../shared/file-not-found/file-not-found.component';
import { RoleGuard } from '../lib/auth.guard';
import { Role } from '../models/role';
export const mainRoutes: Routes = [
  {
      path: '', component: MainComponent,
      children: [
          {
              path: '', component: DashboardComponent
          },
          {
            path: 'not-found',
            component: FileNotFoundComponent,
          },
          {
            path: 'unauthorized',
            component: UnauthorizedComponent,
          },
          {
              path: 'giang-vien', 
              loadChildren: () => import('./giangvien/giangvien.module').then(m => m.GiangVienModule),
              canActivate: [RoleGuard],
              data: { roles: [Role.User] },
          },
          {
            path: 'sinh-vien',  
            loadChildren: () => import('./sinhvien/sinhvien.module').then(m => m.SinhVienModule),
            canActivate: [RoleGuard],
              data: { roles: [Role.User] },
        },
          {
            path: 'lop-mo',  
            loadChildren: () => import('./user/user.module').then(m => m.UserModule),
            canActivate: [RoleGuard],
              data: { roles: [Role.User] },
        },
          {
              path: 'hoc-phan', 
              loadChildren: () => import('./hocphan/hocphan.module').then(m => m.HocPhanModule),
              canActivate: [RoleGuard],
              data: { roles: [Role.User] },
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