import { Component, OnInit } from '@angular/core';
import {UsersService} from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  allCurrency = {};
  currencies: any = [];

  constructor(private money: UsersService) {
    this.money.getData().subscribe(data => {
      this.allCurrency = data;
    })
  }

  ngOnInit(){
    setTimeout(() => {
      Object.entries({...this.allCurrency}).map((item: any, i) => {
        this.currencies = {
          ...this.currencies,
          [item[1].cc]: item[1].rate
        }
      })
      this.currencies = Object.assign(this.currencies, {"UKR": 1})
    }, 500)
  }

}
