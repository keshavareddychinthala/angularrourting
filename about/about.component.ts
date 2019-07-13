import { Component, OnInit } from '@angular/core';
import { FirstService } from '../first.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private p :FirstService) {console.log(this.p); }

  ngOnInit() {
  }
  date=this.p.date
  b() {
    this.p.a(
      
    );
  }
  g=this.p.phone;

}
