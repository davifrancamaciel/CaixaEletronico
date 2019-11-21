import { HomeService } from './home.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeCompontent } from './home.component';
import { RouterModule } from '@angular/router';

@NgModule({

  declarations: [
    HomeCompontent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  providers: [HomeService]
})

export class HomeModule {


}
