import { Configuracao } from '../core/config/config';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';;

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  getCedulas() {
    return this.http.get<any>(`${Configuracao.URL}/cedulas`);
  }
}
