import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResetPasswordRequest } from '../model/resetPasswordRequest';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  isValidToken = true;
  isSuccessful = false;
  resetPasswordRequest = new ResetPasswordRequest("", "");
  repeatPassword: string;
  passwordMatch = true;
  constructor(private userService: UserServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  resetPassword() {

    if (this.resetPasswordRequest.newPassword != this.repeatPassword) {
      this.passwordMatch = false;
      return;
    }
    this.userService.resetPassword(this.resetPasswordRequest).subscribe(
      data => {
        this.isSuccessful = true;
        this.router.navigate(['']);
      },
      error => {
        this.isValidToken = false;
      }
    )
  }
}
