import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private p:FirstService,private t:Router) { }

  ngOnInit() {
  }
 date=this.p.date;
 save(g) {
   this.t.navigate([
     'login'
     
   ])
 }
}
