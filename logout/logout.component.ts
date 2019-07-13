import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  pm;
  a;
  

  constructor() { }

  ngOnInit() {
    this.pm= localStorage.getItem("details")
 this.a=JSON.parse(this.pm)
 console.log(this.a);
  }

}
