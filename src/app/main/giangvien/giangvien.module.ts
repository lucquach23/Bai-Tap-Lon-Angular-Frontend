import { NgModule }      from '@angular/core';
import {RouterModule} from '@angular/router';

import { GiangvienComponent }   from './giangvien/giangvien.component';


@NgModule({

  imports: [
    
    RouterModule.forChild([
      {
        path: 'dsgv',
        component: GiangvienComponent,
      },
  ]),
  
  ],
  declarations: [],
  bootstrap: [],
  providers: [],
})
export class GiangVienModule { }
