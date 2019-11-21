import { AlertModule } from './../shared/components/alert/alert.module';
import { HeaderCompoenent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@NgModule({

  declarations: [
    HeaderCompoenent,
    FooterComponent
  ],
  exports: [
    HeaderCompoenent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AlertModule
  ],
  providers: [



  ]
})

export class CoreMudule {


}
