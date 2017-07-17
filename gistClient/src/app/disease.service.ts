import { Injectable } from '@angular/core';
import { Disease } from "app/disease";
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class DiseaseService {

  constructor(private http:Http) { }

  private baseUrl: string = 'http://localhost:3000/users';

  addDisease(disease:Disease){
    // alert('Saving...');
    let headers = new Headers(); 
    headers.append('Content-Type','application/json');
      //  let url = "http://localhost:8080/survey/addSurvey";
      console.log(disease);
     return this.http.post(`${this.baseUrl}/saveDisease`, disease,headers)
      .map(res => res.json());
  //  return  this.http.get(`${this.baseUrl}/test`,headers).map(res=>res.json());
}



}
