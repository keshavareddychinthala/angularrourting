import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer/customer.component';
import { RouterModule, Routes } from '@angular/router';
const ar:Routes=[{
  path:'',
  component:CustomerComponent
}]
@NgModule({
  declarations: [CustomerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ar)
  ],
  exports:[CustomerComponent

  ]
})
export class CustomModule { 
  constructor() {
  console.log("this is customer");
  }
}
