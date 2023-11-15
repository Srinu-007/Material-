import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bookings } from '../model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private httpclient:HttpClient) { }

  getbookings():Observable<Bookings[]>{
    return this.httpclient.get<Bookings[]>('http://localhost:7000/bookings');
  }
}
