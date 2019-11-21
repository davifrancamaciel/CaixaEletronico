import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RetiradaComponent } from './retirada.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MoneyMaskDirective } from '../shared/directives/money-mask.directive';
import { RetiradaService } from './retirada.service';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
  ],
  declarations: [RetiradaComponent, MoneyMaskDirective],
  providers: [RetiradaService]
})
export class RetiradaModule { }
