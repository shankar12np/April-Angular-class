import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  menuItems: string[] = ['Home', 'About', 'Services', 'Contact'];
  selectedItem: string = ''; 

  selectMenuItem(item: string): void {
    this.selectedItem = item; 
  }

}
