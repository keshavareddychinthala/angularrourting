import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { ClothesComponent } from './clothes/clothes.component';

@Injectable({
  providedIn: 'root'
})
export class Deactive1Guard implements CanDeactivate<ClothesComponent> {
  canDeactivate():boolean {
   let f= window.confirm("warning it will exit from here");
   if(f){
 return true;
}
else {
  return false;
}
  }
  
}
