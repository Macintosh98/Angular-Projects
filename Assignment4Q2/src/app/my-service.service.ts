import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MyServiceService {

  // Add dependency in service constructor for httpclient
  constructor(private http:HttpClient){ }

  private _url:string = "/assets/data.json";

 // Write method in service class which returns array of batch details

GetBatchDetails():Observable<IBatches[]>{
  return this.http.get<IBatches[]>(this._url);
}

}

interface IBatches{
    Name: string,
    Age : number
}
