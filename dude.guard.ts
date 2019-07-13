import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DudeGuard implements CanActivate {
  
  constructor(private k:Router) {

  }
  canActivate() :boolean
  
  {

let a=window.prompt("enter user name");


if(a==='keshava') {

return true;

}
else {
  this.k.navigate(['/home'])
  return false;

}
  


}
}
