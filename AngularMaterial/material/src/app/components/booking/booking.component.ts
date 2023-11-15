import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { BookingService } from 'src/app/services/booking.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit{
 
  countries:any = []
  formGroup:FormGroup;

  minDate: Date = new Date("2023-01-01");
  maxDate: Date = new Date("2050-12-31");

constructor(private bookingsservice:BookingService){
  this.formGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    customerName: new FormControl(null, [Validators.required, Validators.maxLength(30),]),
    country: new FormControl(null, [Validators.required]),
    city: new FormControl(null),
    receiveNewsLetters: new FormControl(null),
    gender: new FormControl(null, [Validators.required]),
    dateOfBirth: new FormControl(null),
    expertiseLevel: new FormControl(null)
  });
}


cities: any[] = [
  { id: 1, cityName: "Abu Dhabi" },
  { id: 2, cityName: "Amsterdam" },
  { id: 3, cityName: "Berlin" },
  { id: 4, cityName: "Chicago" },
  { id: 5, cityName: "Doha" },
  { id: 6, cityName: "Dubai" },
  { id: 7, cityName: "Istanbul" },
  { id: 8, cityName: "Las Vegas" },
  { id: 9, cityName: "London" },
  { id: 10, cityName: "Los Angeles" },
  { id: 11, cityName: "Moscow" },
  { id: 12, cityName: "New York" },
  { id: 13, cityName: "Paris" },
  { id: 14, cityName: "San Francisco" },
  { id: 15, cityName: "Seoul" },
  { id: 16, cityName: "Singapore" },
  { id: 17, cityName: "Sydney" },
  { id: 18, cityName: "Tokyo" },
  { id: 19, cityName: "Toronto" },
  { id: 20, cityName: "Washington" }
];
ngOnInit(): void {
 this.countries = [
    {value:"Afghanistan",name:"Afghanistan"},
    {value:"Iraq",name:"Iraq"},
    {value:"Israel",name:"Israel"},
    {value:"Gaja",name:"Gaja"},
    {value:"Iran",name:"Iran"},
    {value:"SoudiArabia",name:"Soudi Arabia"}
  ]
}

getFormControl(controlName: string): FormControl
{
  return this.formGroup.get(controlName) as FormControl;
}

getErrorMessage(controlName: string, errorType: string): string
{
  //controlName = "customerName"
  //errorType = "required"
  switch (controlName)
  {
    case "customerName":
      {
        if (errorType === "required")
          return "You must specify <strong>Name</strong>";
        else if (errorType === "maxlength")
          return "<strong>Name</strong> can contain up to 30 characters only";
        else
          return "";
      }

    case "email":
      {
        if (errorType === "required")
          return "<strong>Email</strong> can't be blank";
        else if (errorType === "email")
          return "<strong>Email</strong> should be in correct format. Eg: someone@example.com";
        else
          return "";
      }

    case "country":
      {
        if (errorType === "required")
          return "You must choose a <strong>Country</strong>";
        else
          return "";
      }

      case "gender":
        {
          if (errorType === "required")
            return "Choose gender either Male or Female or Others";
          else
            return "";
        }

    default: return "";
  }
}

postbooking(){
  console.log(this.formGroup)
}

}
