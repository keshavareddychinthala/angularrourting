import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SecondserviceService } from '../secondservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private p:Router,private a:SecondserviceService) { }
ok
  ngOnInit() {
  
  }
  fb(e) {
    this.p.navigate(['/mobiles'])
    this.ok=e;
    localStorage.setItem("details",JSON.stringify(this.ok))
    

 
    }
    
  
}
