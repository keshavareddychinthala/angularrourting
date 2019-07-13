import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecondserviceService {

  constructor(private ht:HttpClient) { }
  getmobiles(i?:number) {
    if(i) {
    return  this.ht.get(`http://localhost:3000/phone/${i}`)
    }
    else {


    return this.ht.get("http://localhost:3000/phone")
  }
  }
}
