import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import {HttpClientModule} from '@angular/common/http'; // Import httpclientmodule
import { MyServiceService } from './my-service.service'; // Import the required service



@NgModule({
  declarations: [
    AppComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule    // Add the name into import
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
