import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private router: Router){}

  title ='April-class';
  userName : any; 
  password!: number;


  handleUserName(): void {
  alert(this.userName)
}

register(){
  this.router.navigate(['/register']);
}


}
