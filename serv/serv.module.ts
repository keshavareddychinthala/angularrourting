import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerComponent } from './server/server.component';
import { Routes, Router, RouterModule } from '@angular/router';
const r :Routes=[{
  path:'',
  component:ServerComponent
}]
@NgModule({
  declarations: [ServerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(r)
  ]
})
export class ServModule {
  constructor() {
 
  }
 }

