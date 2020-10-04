import { NgModule }      from '@angular/core';
import {RouterModule} from '@angular/router';

import { HocphanComponent }   from './hocphan/hocphan.component';


@NgModule({

  imports: [
    
    RouterModule.forChild([
      {
        path: 'dshp',
        component: HocphanComponent,
      },
  ]),
  
  ],
  declarations: [],
  bootstrap: [],
  providers: [],
})
export class HocPhanModule { }
