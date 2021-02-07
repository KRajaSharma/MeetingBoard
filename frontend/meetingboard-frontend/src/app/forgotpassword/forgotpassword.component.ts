import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit {

  emailId:string;
  isValidId = true;
  isMailSent = false;
  constructor(private userService:UserServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  sendMail(){

    this.userService.forgotPassword(this.emailId).subscribe(
      data =>{
        this.isMailSent = true;
        console.log(data);
        this.router.navigate(['reset']);
      },
      error =>{
        this.isValidId = false;
        console.log(error)
      }
    )

  }

}
