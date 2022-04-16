import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, combineLatest, distinctUntilChanged, filter, first, map, of, single, take, zip } from 'rxjs';

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class Converter {


  @Input() currencies: any;
  form: FormGroup;
  namesOfcurrencies: any;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      input: [0],
      output: [0],
      inputCurrency: ['USD'],
      outputCurrency: ['UKR']
    });
  }

  get input() {
    return this.form?.get('input')
  }

  get output() {
    return this.form?.get('output')
  }

  get inputCurrency() {
    return this.form?.get('inputCurrency')
  }

  get outputCurrency() {
    return this.form?.get('outputCurrency')
  }

  ngOnInit() {
    setTimeout(() => {
      if (this.currencies) {
        this.namesOfcurrencies = Object.keys(this.currencies).sort()
      }
    }, 600)

    this.input?.valueChanges.pipe(filter(x => !!x), distinctUntilChanged()).subscribe(value => {
      this.output?.setValue(value * this.currencies[this.inputCurrency?.value] / this.currencies[this.outputCurrency?.value])
    })

    this.output?.valueChanges.pipe(filter(x => !!x), distinctUntilChanged()).subscribe(value => {
      this.input?.setValue(value * this.currencies[this.outputCurrency?.value] / this.currencies[this.inputCurrency?.value])
    })

    this.inputCurrency?.valueChanges.pipe(filter(x => !!x), distinctUntilChanged()).subscribe(value => {
      this.output?.setValue(this.input?.value * this.currencies[value] / this.currencies[this.outputCurrency?.value])
    })

    this.outputCurrency?.valueChanges.pipe(filter(x => !!x), distinctUntilChanged()).subscribe(value => {
      this.input?.setValue(this.output?.value * this.currencies[value] / this.currencies[this.inputCurrency?.value])
    })
  }
}
