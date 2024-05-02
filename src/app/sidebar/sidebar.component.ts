import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{

@Input() dataFromParrent: any;
@Input() message!: string;
@Output() childEvent = new EventEmitter();

data="Shankar";
  
ngOnInit(): void {
this.childEvent.emit(this.data)
this.childEvent.emit(this.dataFromParrent)

}

sendMessage() {
  this.childEvent.emit("Message after click from event");
}

}
