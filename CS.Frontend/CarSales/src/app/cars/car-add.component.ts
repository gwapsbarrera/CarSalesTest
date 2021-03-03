import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { ICar } from './car';
import { CarService } from './car.service';

@Component({
    templateUrl:'./car-add.component.html'
})
export class CarAddComponent  {

    pageTitle:string = 'Create Car';
    errorMessage:string;
    vehicleTypes: any = [{id:0,text:'Car'}, {id:1,text:'Boat'},{id:2,text:'Bike'}];
    bodyTypes: any = [{id:0,text:'Hatch'}, {id:1,text:'Sedan'},{id:2,text:'Crossover'}];
    car:ICar;


    form = new FormGroup({
      vehicleType: new FormControl('',Validators.required),
      make: new FormControl('', Validators.required),
      model: new FormControl('', Validators.required),
      engine: new FormControl('', Validators.required),
      doors: new FormControl('', Validators.required),
      wheels: new FormControl('', Validators.required),
      bodyType: new FormControl('',Validators.required)
    });
    
    get f(){
      return this.form.controls;
    }

      constructor(private carService:CarService) {
        
      }


      onSubmit(){
        console.log(this.form.value);

        this.car = {
          'id': 0,
          'vehicleType' : Number(this.form.get('vehicleType').value),
          'make' : this.form.get('make').value,
          'model' : this.form.get('model').value,
          'engine' : this.form.get('model').value,
          'doors' : Number(this.form.get('doors').value),
          'wheels' : Number(this.form.get('wheels').value),
          'bodyType' : Number(this.form.get('bodyType').value)
        };


        this.carService.postCar(this.car).subscribe({
            next:car => {
              this.car = car;
            },
            error: err => this.errorMessage =err
          });
      }
  
}