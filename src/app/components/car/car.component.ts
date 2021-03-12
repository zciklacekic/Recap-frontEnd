import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { CarService } from 'src/app/services/car.service';
import { CarDetailService } from 'src/app/services/cardetail.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
cars:Car[]=[];
carDetails:CarDetail[]=[];
dataLoaded=false;
apiUrl='https://localhost:44311/api/cars/getall';
  constructor(private carService:CarService,private carDetailService:CarDetailService) { }

  ngOnInit(): void {
    this.getCars();
    this.getCarDetails();
  }
getCars() {
  this.carService.getCars().subscribe(response=>{
    this.cars=response.data
    this.dataLoaded=true;})
}
getCarDetails() {
  this.carDetailService.getCarDetails().subscribe(response=>{
    this.carDetails=response.data
    this.dataLoaded=true;})
}
}
