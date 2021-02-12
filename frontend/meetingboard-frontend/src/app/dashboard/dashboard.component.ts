import { Component, OnInit } from '@angular/core';
import { SummaryBoards } from '../model/summaryBoard';
import { BoardService } from '../service/board.service';
import { UserServiceService } from '../service/user-service.service';
import { MatDialog } from '@angular/material/dialog';
import { LogoutDialogComponent } from '../logout-dialog/logout-dialog.component';
import { Router } from '@angular/router';
import { NewBoardDialogComponent } from '../new-board-dialog/new-board-dialog.component';
import { Board } from '../model/board';
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  summaryBoards: SummaryBoards[];
  user: string;
  newBoard:Board;
  constructor(private boardService: BoardService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
    this.user = sessionStorage.getItem('username');
    this.boardService.getSummaryBoards().subscribe(
      data => { this.summaryBoards = data },
      error => { console.error(error) }
    )
  }

  openLogoutDialog() {
    console.log("logout");
    const dialogRef = this.dialog.open(LogoutDialogComponent,{
      data:{displayText:"Do u Really Want To Log Out !!!"}});
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Logging Out");
        sessionStorage.clear();
        this.router.navigate(['']);
      }
    });
  }

  addNewBoard() {
    console.log("New Board");
    let boardId:string;
    let board = new Board(null, "", "", true, formatDate(new Date(), 'yyyy/MM/dd', 'en'), [], [], []);
    const dialogRef = this.dialog.open(NewBoardDialogComponent, {
      data: board
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Creating New Board");
        this.boardService.upsertBoard(board).subscribe(
          record=>{
            this.newBoard = record;
            this.router.navigate(['board/'+this.newBoard.id])
          },
          error=>{console.error(error)}
        )
      }
    });

  }

  openBoard(id){
    this.router.navigate(['board/'+id]);
  }

}
