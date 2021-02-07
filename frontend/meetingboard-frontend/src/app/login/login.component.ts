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

  res: string;
  emaildId: string;
  password: string;
  invalidLogin = false;
  constructor(private userService: UserServiceService, private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    // this.userService.getTest().subscribe(response => this.res = response.toString());
  }

  checkLogin() {

    this.authService.authenticate(this.emaildId, this.password).subscribe(
      data => {
        this.router.navigate(['dashboard']);
        this.invalidLogin = false;
      },
      error => {
        this.invalidLogin = true;
      }
    )
  }

}
