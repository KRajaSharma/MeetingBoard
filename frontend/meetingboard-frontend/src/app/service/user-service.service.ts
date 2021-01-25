import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient: HttpClient) { }

  getTest(){
    console.log("Test Call");
    const options = { responseType: 'text',};
    return this.httpClient.get('http://localhost:8080/v1/user/test',{responseType: 'text'});
  }

}
