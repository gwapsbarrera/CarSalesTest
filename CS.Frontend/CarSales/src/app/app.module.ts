import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { CarModule } from './cars/car.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path:'home',component:HomeComponent },
      { path:'',redirectTo:'home',pathMatch:'full' },
      { path:'**',redirectTo:'home',pathMatch:'full' },
    ]),
    CarModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
