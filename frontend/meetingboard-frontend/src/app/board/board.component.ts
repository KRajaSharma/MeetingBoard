import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { LogoutDialogComponent } from '../logout-dialog/logout-dialog.component';
import { Board } from '../model/board';
import { Card } from '../model/card';
import { DisplayBoard } from '../model/displayBoard';
import { BoardService } from '../service/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  boardId : string;
  board : Board;
  displayBoard : DisplayBoard;
  isDataAvailable:boolean = false;
  isEdit = false;
  constructor(private route: ActivatedRoute,private boardService:BoardService,public dialog: MatDialog) {

   }

  ngOnInit(): void {
    this.route.params.subscribe( params =>{this.boardId = params.id});
    this.fetchBoard();    
  }

  fetchBoard(){
    this.boardService.getBoard(this.boardId).subscribe(
      data => {
        this.board = data;
        this.displayBoard = this.getDisplayBoardFromBoard(this.board);
        this.isDataAvailable = true
      },
      error => {
        console.error(error);
      }
    )
  }

  getDisplayBoardFromBoard(board:Board):DisplayBoard{
  return new DisplayBoard(board.id,board.title,board.context,board.isActive,board.createdOn,
                          this.getCardArrayFromStringarray(board.wentWell),this.getCardArrayFromStringarray(board.toImprove),
                          this.getCardArrayFromStringarray(board.actionItem));
  }

  getCardArrayFromStringarray(requestArray:string[]):Card[]{
    let responseArray= new Array<Card>();
    requestArray.forEach(element => {
      responseArray.push(new Card(element))
    });
    return responseArray;
  }

  openCardDeleteDialog() {
    console.log("logout");
    const dialogRef = this.dialog.open(LogoutDialogComponent,{
      data:{displayText:"Do u Really Want To Delete !!!"}
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("Deleting Card");
      }
    });
  }
}
