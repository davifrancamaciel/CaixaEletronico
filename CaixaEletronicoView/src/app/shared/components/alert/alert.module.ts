import { NgModule } from '@angular/core';

import { AlertCoponent } from './alert.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


@NgModule({

  declarations: [AlertCoponent],
  exports: [AlertCoponent],
  imports: [
    CommonModule,
    RouterModule,

  ]
})

export class AlertModule {

}
