import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { BookingComponent } from './components/booking/booking.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BookingsListComponent } from './bookings-list/bookings-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TreeComponent } from './tree/tree.component';



@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    BookingsListComponent,
    TreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TreeComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
