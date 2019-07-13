import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.css']
})
export class ClothesComponent implements OnInit {
t;
  constructor(private ht:HttpClient) { 
   
  }

  ngOnInit() {
    this.ht.get("http://localhost:3000/clothes").subscribe(f=>this.t=f)
  }
  
}
