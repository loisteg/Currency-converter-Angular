import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class Inputs implements OnInit{

  @Input() currencies: any;

  @Input() value: number = 0;
  @Input() currency: any;
  @Input() onAmountChange: any;
  @Input() onCurrencyChange: any;


  namesOfcurrencies: any;

  ngOnInit() {
    setTimeout(() => {
      if(this.currencies) {
        this.namesOfcurrencies = Object.keys(this.currencies).sort()
      }
    }, 600)
  }
  
}