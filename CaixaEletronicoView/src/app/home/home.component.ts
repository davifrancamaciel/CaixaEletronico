import { HomeService } from './home.service';
import { Component, OnInit } from '@angular/core';

@Component({
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeCompontent implements OnInit {


  cedulas: any[] = [];


  constructor(private homeService: HomeService) {


  }
  ngOnInit() {
    this.listar();
  }
  listar() {

    this.homeService.getCedulas()
      .subscribe(data => {
        this.cedulas = data.content;
        console.log(data)
      })
  }
}
