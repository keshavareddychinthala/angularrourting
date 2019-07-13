import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ClothesComponent } from './clothes/clothes.component';
import { DetailsComponent } from './details/details.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { DudeGuard } from './dude.guard';
import { Deactive1Guard } from './deactive1.guard';

const myroot:Routes=[{
  path:'home',
  component: HomeComponent,
  children:[{
    path:'login',
    component:LoginComponent
  },
 {
   path:'logout',
   component: LogoutComponent
 }]
 },
 {
   path:'mobiles',
   component:MobilesComponent
   
  },
  {
   path:'clothes',
   component: ClothesComponent,
    canActivate:[DudeGuard],
    canDeactivate:[Deactive1Guard ]

  },
  {
    path:'details/:id',
    component: DetailsComponent
  },
  {
    path:'details/:id/:pic',
    component: DetailsComponent
  }
  ,
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'customer',
    loadChildren:'./custom/custom.module#CustomModule'
  },
  {
    path:'server',
    loadChildren:'./serv/serv.module#ServModule'
  }
  
 ]
 

@NgModule({
  imports: [RouterModule.forRoot(myroot)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
