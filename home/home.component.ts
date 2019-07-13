import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private h:Router) { }

  ngOnInit() {
  }
fn() {
  this.h.navigate(['/mobiles'],{
    queryParams:{id:1,
      name:"RedMi"

    }
  })
}
}
