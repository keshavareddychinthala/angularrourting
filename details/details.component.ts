import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { SecondserviceService } from '../secondservice.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css'],
  animations:[]
})
export class DetailsComponent implements OnInit {
  r;
  id;
  name;
  pic: any;
  
  constructor(private ht:HttpClient,private ar :ActivatedRoute,private f:SecondserviceService) {
    console.log(this.ar);


    this. id= this.ar.snapshot.params.id;

    console.log(this.pic);
  
   }

  ngOnInit() {
 this.f.getmobiles(this.id).subscribe(e=>this.r=e);
    
  }

}
