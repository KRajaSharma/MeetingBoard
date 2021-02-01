import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  res :string;
  username :string;
  password :string;
  invalidLogin = false;  
  constructor(private userService : UserServiceService,private authService:AuthenticationService, private router:Router) { }

  ngOnInit(): void {
    // this.userService.getTest().subscribe(response => this.res = response.toString());
  }

  checkLogin(){

    if(this.authService.authenticate(this.username,this.password)){
      this.router.navigate(['dashboard']);
      this.invalidLogin = false;
    }else{
      this.invalidLogin = true;
    }



  }

}
