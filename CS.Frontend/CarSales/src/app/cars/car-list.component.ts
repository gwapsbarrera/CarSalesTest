import { Component, OnInit } from '@angular/core';
import { ICar } from './car';
import { CarService } from './car.service';

@Component({
    templateUrl:'./car-list.component.html',
    styleUrls:['./car-list.component.css']
})
export class CarListComponent implements OnInit{

    pageTitle:string = 'Car List';
    errorMessage:string;
    

    cars:ICar[] = [];

      constructor(private carService:CarService) {
        
      }

      ngOnInit(): void {
        this.carService.getCars().subscribe({
          next:cars => {
            this.cars = cars;
          },
          error: err => this.errorMessage =err
        });
        
      }
}