import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Configuracao } from '../core/config/config';
import { Retirada } from './retirada';

@Injectable({
  providedIn: 'root'
})
export class RetiradaService {

  constructor(private http: HttpClient) { }

  postSacar(retirada: Retirada) {
    return this.http.post<any>(`${Configuracao.URL}/retirada`, retirada);
  }

  getInformacoes() {
    return this.http.get<any>(`${Configuracao.URL}/retirada`);
  }
}
