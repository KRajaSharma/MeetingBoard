import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  res :string;
  constructor(private userService : UserServiceService) { }

  ngOnInit(): void {
    this.userService.getTest().subscribe(response => this.res = response.toString());
  }

}
