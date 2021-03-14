import { Component, OnInit } from '@angular/core';
import { RentalDetail } from 'src/app/models/rentalDetail';
import { map } from 'rxjs/operators';
import { RentalService } from 'src/app/services/rental.service';
import { RentalDetailService } from 'src/app/services/rentaldetail.service';
import { Rental } from 'src/app/models/rental';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  rentalDetails: RentalDetail[] = [];
  rentals: Rental[] = [];
  dataLoaded = false;
  constructor(
    private rentalService: RentalService,
    private rentalDetailService: RentalDetailService
  ) {}

  ngOnInit(): void {
    this.getRentalDetails();
  }
  getRentalDetails() {
    this.rentalDetailService.getRentalDetails().subscribe((response) => {
      this.rentalDetails = response.data;
      this.dataLoaded = true;
    });
  }
  getRentals() {
    this.rentalService.getRentals().subscribe((response) => {
      this.rentals = response.data;
      this.dataLoaded = true;
    });
  }
}
