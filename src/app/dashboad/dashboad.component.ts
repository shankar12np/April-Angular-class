import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboad',
  templateUrl: './dashboad.component.html',
  styleUrls: ['./dashboad.component.css']
})
export class DashboadComponent implements OnInit{

userName = 'shankar';
password!:number;
users!:Array<User>;

ngOnInit(): void {
  
}

}

interface User{
  userName:string;
  password:number;
}


