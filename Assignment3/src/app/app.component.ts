import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = "Assignment3";
  fun()
  {
    console.log("hiiii");
    this.title="hello world";
  }
}
