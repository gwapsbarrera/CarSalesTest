import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from './car-list.component';
import { RouterModule } from '@angular/router';
import { CarAddComponent } from './car-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path:'cars',component:CarListComponent },
      { path:'car',component:CarAddComponent }
    ])
  ],
  declarations: [  
    CarListComponent,
    CarAddComponent
  ]
})
export class CarModule { }
