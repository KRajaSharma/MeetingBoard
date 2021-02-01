import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailId:string;
  password:string;
  repeatPassword:string;
  passwordMatch = true;
  existingUser = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    if(this.password != this.repeatPassword){
      this.passwordMatch = false;
      return;
    }
    if(this.emailId==="test"&& this.password==="test"){
      this.router.navigate(['']);
    }else{
      this.existingUser = true;
    }
  }

}
