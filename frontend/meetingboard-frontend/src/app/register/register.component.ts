import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  emailId: string;
  password: string;
  repeatPassword: string;
  passwordMatch = true;
  existingUser = false;
  constructor(private router: Router, private userService: UserServiceService) { }

  ngOnInit(): void {
  }

  register() {
    if (this.password != this.repeatPassword) {
      this.passwordMatch = false;
      return;
    }

    this.userService.register(this.emailId, this.password).subscribe(
      data => {
        this.router.navigate(['']);
      },
      error => {
        this.existingUser = true;

      }
    )
  }

}
