import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor() { }
  date=new Date();
 a() {
   alert("have u done your ");
 }
 "phone"= [
  {
    "id":1,
    "name":"RedMI",
    "cost":14500,
    "pic": "assets/phone1.jpg"
  },
  {
    "id":2,
    "name":"asus",
    "cost":142500,
    "pic": "assets/phone2.jpg"
  },
  {
    "id":3,
    "name":"samsung",
    "cost":14534400,
    "pic": "assets/phone3.jpg"
  }
,
{
  "id":4,
  "name":"apple",
    "cost":14534400,
  "pic": "assets/phone4.jpg"
},
{
  "id":1,
  "name":"oneplus",
    "cost":14576500,
  "pic": "assets/phone5.jpg"
}
]
}
