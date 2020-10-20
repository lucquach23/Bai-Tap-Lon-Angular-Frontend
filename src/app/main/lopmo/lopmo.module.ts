import { NgModule }      from '@angular/core';
import {RouterModule} from '@angular/router';

import { LopmoComponent }   from './lopmo/lopmo.component';


@NgModule({

  imports: [
    
    RouterModule.forChild([
      {
        path: 'danhsachlopmo',
        component: LopmoComponent,
      },
  ]),
  
  ],
  declarations: [],
  bootstrap: [],
  providers: [],
})
export class LopMoModule { }
