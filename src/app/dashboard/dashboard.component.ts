import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private router: Router) { }

  students = [
    {
      "name": "Shankar",
      "address": "VA",
      "Phone": "202-531-3255"
    },
    {
      "name": "Kamal",
      "address": "MD",
      "Phone": "202-531-3255"
    },
    {
      "name": "Raj",
      "address": "VA",
      "Phone": "202-531-3255"
    },
    {
      "name": "Shakti",
      "address": "VA",
      "Phone": "202-531-3255"
    },
    {
      "name": "Bimal",
      "address": "VA",
      "Phone": "202-531-3255"
    }
  ]


  login() {
    this.router.navigate(['/login']);
  }
  register() {
    this.router.navigate(['/register']);
  }
}
