import { NgModule }      from '@angular/core';
import {RouterModule} from '@angular/router';
import { LopmoComponent }   from './lopmo/lopmo.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { BrowserModule } from '@angular/platform-browser';

@NgModule({

  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: 'danhsachlopmo',
        component: LopmoComponent,
      },
  ]),
  
  ],
  declarations: [LopmoComponent],
  bootstrap: [],
  providers: [],
})
export class LopMoModule { }
