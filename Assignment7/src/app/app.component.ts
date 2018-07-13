import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  U;
  P;
  save()
  {
      this.U=(<HTMLInputElement>document.getElementById("U")).value;
      this.P=(<HTMLInputElement>document.getElementById("P")).value;
      alert("UserName:"+this.U+"\nPassword:"+this.P);
  }
}
