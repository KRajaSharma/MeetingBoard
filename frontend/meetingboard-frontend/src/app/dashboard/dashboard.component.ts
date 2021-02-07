import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../service/user-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  res: any;
  constructor(private userService: UserServiceService) { }

  ngOnInit(): void {
  }

}
