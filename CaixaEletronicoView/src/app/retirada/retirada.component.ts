import { AlertService } from './../shared/components/alert/alert.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RetiradaService } from './retirada.service';
import { Retirada } from './retirada';


@Component({
  selector: 'app-retirada',
  templateUrl: './retirada.component.html',
  styleUrls: ['./retirada.component.css']
})
export class RetiradaComponent implements OnInit {

  saqueForm: FormGroup;
  @ViewChild('valorSaqueInput') valorSaqueInput: ElementRef<HTMLInputElement>;

  informacoesConta: any;
  cedulasParaValorSolicitado: any[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private retiradaService: RetiradaService,
    private router: Router,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.saqueForm = this.formBuilder.group({
      valorSaque: ['', [Validators.required, Validators.maxLength(5), Validators.minLength(1), Validators.max(1500)]],
    })

    this.valorSaqueInput.nativeElement.focus();
    this.getInformacoes();
  }

  getInformacoes() {

    this.retiradaService.getInformacoes()
      .subscribe(data => {
        this.informacoesConta = data.content;
        console.log(data)
      })
  }

  saque() {
    const valorSaque = this.saqueForm.get('valorSaque').value;
    let retirada: Retirada = {
      valor: valorSaque.replace(/\D/g, '')
    }

    console.log(valorSaque.replace(/\D/g, ''))

    this.retiradaService.postSacar(retirada)
      .subscribe(data => {
        if (!data.content) {
          this.alertService.warning(data.mensagem)
        } else {
          this.alertService.success(data.mensagem);
          this.informacoesConta.saldo = data.content.saldo;
          this.cedulasParaValorSolicitado = data.content.cedulas;
          this.saqueForm.reset()
        }
        console.log(data)
      }, err => {
        console.log(err);
        this.valorSaqueInput.nativeElement.focus();
      });
  }

}
