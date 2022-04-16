import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  constructor(private http:HttpClient) {}

  getData() {
    let url = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';

    return this.http.get(url);
  }
}
