import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import {HocphanComponent} from './hocphan/hocphan.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'dshp',
        component: HocphanComponent,
      },
  ]),  
  ]
})
export class HocPhanModule { }
