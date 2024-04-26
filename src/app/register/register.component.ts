import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  tellUs:any;
  address:any;
  intrestedClasses:any;
  contactInfo:any;

  "users" = [
    {
      "userName": "Shankar Pandey",
      "email": "",
      "country": "USA",
      "password": "12345",
      "job": "Manager",
      "companyName": "Google",
      "id": 1
    },
    {
      "userName": "rahul",
      "email": "rahul@gmail.com",
      "country": "India",
      "password": "12345",
      "job": "Admin",
      "companyName": "Google",
      "id": 2
    },
    {
      "userName": "Kamal Saru",
      "email": "",
      "country": "Baltimore",
      "password": "12345",
      "job": "Manager",
      "companyName": "Apple",
      "id": 3
    },
    {
      "userName": "Kumar",
      "email": "rahul@gmail.com",
      "country": "India",
      "password": "12345",
      "job": "Admin",
      "companyName": "Facebook",
      "id": 4
    },
    {
      "userName": "Yad Pandey",
      "email": "",
      "country": "USA",
      "password": "12345",
      "job": "Manager",
      "companyName": "Google",
      "id": 5
    },
    {
      "userName": "Krishna",
      "email": "krishna@gmail.com",
      "country": "India",
      "password": "12345",
      "job": "Admin",
      "companyName": "Vindravan",
      "id": 6
    },
    {
      "userName": "Rosan Puri",
      "email": "",
      "country": "Va",
      "password": "12345",
      "job": "Manager",
      "companyName": "Apple",
      "id": 7
    },
    {
      "userName": "Bishnu ",
      "email": "rahul@gmail.com",
      "country": "India",
      "password": "12345",
      "job": "Admin",
      "companyName": "Himalayan heritage",
      "id": 8
    },
  ];

  

  ngOnInit(): void {
    
  }

}

