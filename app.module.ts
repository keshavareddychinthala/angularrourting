import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PhonesComponent } from './phones/phones.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { ClothesComponent } from './clothes/clothes.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { MessagesComponent } from './messages/messages.component';
import { SettingsComponent } from './settings/settings.component';
import { DetailsComponent } from './details/details.component'
import { FirstService } from './first.service';
import { SecondserviceService } from './secondservice.service';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LogoutComponent } from './logout/logout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSliderModule} from '@angular/material/slider';
// import { ServModule } from './serv/serv.module';
// import { CustomModule } from './custom/custom.module';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    PhonesComponent,
    MobilesComponent,
    ClothesComponent,
    ProfilesComponent,
    MessagesComponent,
    SettingsComponent,
    DetailsComponent,
    LoginComponent,
    WelcomeComponent,
    LogoutComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // CustomModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatSliderModule,
    BrowserAnimationsModule
    // ServModule
    

  ],
  providers: [ FirstService,SecondserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
