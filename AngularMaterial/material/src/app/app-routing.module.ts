import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './components/booking/booking.component';
import { BookingsListComponent } from './bookings-list/bookings-list.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  {path:"booking",component:BookingComponent},
  {path:"bookinglist",component:BookingsListComponent},
  {path:"tree",component:TreeComponent},
  {path:"",redirectTo:"/booking",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
