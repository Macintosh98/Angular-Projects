import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  // Create array to hold the information of batches
  public batches = [];

  // Add instance of Service in constructor
  constructor(private _batchservice:MyServiceService)
  {
  }

  // Call the service method once
  ngOnInit()
  {
    this._batchservice.GetBatchDetails()
    .subscribe(data=>this.batches=data);
  }
}
