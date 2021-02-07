import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import { CreateUserRequest } from '../model/createUserRequest';
import { ResetPasswordRequest } from '../model/resetPasswordRequest';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService { 

  constructor(private httpClient: HttpClient) { }

  register(emaildId,password){
    return this.httpClient.put('http://localhost:8080/v1/user',new CreateUserRequest(emaildId,password));
  }

  forgotPassword(emaildId){
    let params = new HttpParams();
    params = params.set('emailid', emaildId);
    return this.httpClient.post('http://localhost:8080/v1/user/_forgotPassword',params,{responseType:'text'});
  }

  resetPassword(request:ResetPasswordRequest){
    return this.httpClient.post('http://localhost:8080/v1/user/_resetPassword',request,{responseType:'text'});
  }

}
