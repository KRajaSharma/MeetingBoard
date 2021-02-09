import { Component, OnInit } from '@angular/core';
import { SummaryBoards } from '../model/summaryBoard';
import { BoardService } from '../service/board.service';
import { UserServiceService } from '../service/user-service.service';
import {MatDialog} from '@angular/material/dialog';
import { LogoutDialogComponent } from '../logout-dialog/logout-dialog.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  summaryBoards : SummaryBoards[];
  user:string;
  constructor(private boardService: BoardService,public dialog:MatDialog,private router:Router) { }

  ngOnInit(): void {
    this.user = sessionStorage.getItem('username');
    this.boardService.getSummaryBoards().subscribe(
      data=>{this.summaryBoards = data},
      error=>{console.error(error)}
    )
  }

  openLogoutDialog(){
    console.log("logout");
    const dialogRef = this.dialog.open(LogoutDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      if(result){
        console.log("Logging Out");
        sessionStorage.clear();
        this.router.navigate(['']);
      }
    });
  }

  test(id){
    console.log(id);
    console.log("test");
  }
 }
