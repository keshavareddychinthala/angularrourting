import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SecondserviceService } from '../secondservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  n;
  id;
  name;
  na: any;
  ag: any;
  z;
  pm;
  a: any;
  constructor(private p:SecondserviceService,private ht:HttpClient,private m:ActivatedRoute) { }

  ngOnInit()
 {
    this.p.getmobiles().subscribe(e=>this.n=e)
    console.log(this.m)
  // this.id=this.m.snapshot.queryParams.id;
  // this.na=this.m.snapshot.queryParams.name;
  // this.ag=this.m.snapshot.queryParams.age;
 this.pm= localStorage.getItem("details")
 this.a=JSON.parse(this.pm)
 console.log(this.a);

  }
 

}
