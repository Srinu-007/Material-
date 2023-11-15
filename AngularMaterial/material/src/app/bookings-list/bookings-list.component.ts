import { Component, OnInit, ViewChild } from '@angular/core';
import { Bookings } from '../model';
import { BookingService } from '../services/booking.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormGroup, FormControl } from "@angular/forms";


@Component({
  selector: 'app-bookings-list',
  templateUrl: './bookings-list.component.html',
  styleUrls: ['./bookings-list.component.scss']
})
export class BookingsListComponent implements OnInit{
 
  @ViewChild(MatPaginator) paginator : MatPaginator | any;
  @ViewChild(MatSort) sort : MatSort | any;

  formGroup:FormGroup;

  bookings: MatTableDataSource<Bookings> = new MatTableDataSource<Bookings>([]);;

  columnsToDisplay:any = ['customerName','location','date','actions']

  rows:Bookings[] = [];

  constructor(private bookingsservice:BookingService){
   this.formGroup=new FormGroup({
    search:new FormControl(null)
   })
  }

  ngOnInit(): void {
         this.bookingsservice.getbookings().subscribe((response:Bookings[])=>{
          this.bookings=new MatTableDataSource<Bookings>(response);
          this.bookings.paginator = this.paginator;
          this.bookings.sort = this.sort;

          this.rows = response;
         },
         (error)=>{
          console.log(error);
         })
  }

  filterBookings()
  {
    if (this.formGroup.value.search != null && this.bookings)
    {
      this.bookings.filter = this.formGroup.value.search.trim();
    }
  }

  clearFilter()
  {
    this.formGroup.patchValue({ search: "" });
    this.filterBookings();
  }
}
