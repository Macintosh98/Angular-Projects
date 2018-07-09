import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {

      // Create object of event class
      @Output() public MyEvent = new EventEmitter();

      // Add input decorator as it will receve the data from parent
      @Input() public parentData;

      public message:string;
  constructor() { }

  SendEventToParent(){
      // Send the event to parent
      this.MyEvent.emit('Hello from child');
  }

  GetEventToParent(){
      this.message=this.parentData;
  }
  ngOnInit() {
  }

}
