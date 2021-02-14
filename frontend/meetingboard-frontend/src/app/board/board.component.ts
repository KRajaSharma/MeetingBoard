import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LogoutDialogComponent } from '../conformation-dialog/conformation-dialog.component';
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

  boardId: string;
  board: Board;
  displayBoard: DisplayBoard;
  isDataAvailable: boolean = false;
  isEdit = false;
  constructor(private route: ActivatedRoute, private boardService: BoardService, public dialog: MatDialog, private router: Router) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => { this.boardId = params.id });
    this.fetchBoard();
  }

  fetchBoard() {
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

  getDisplayBoardFromBoard(board: Board): DisplayBoard {
    return new DisplayBoard(board.id, board.title, board.context, board.active, board.createdOn,
      this.getCardArrayFromStringarray(board.wentWell), this.getCardArrayFromStringarray(board.toImprove),
      this.getCardArrayFromStringarray(board.actionItem));
  }

  getBoardFromDisplayBoard(displayBoard: DisplayBoard): Board {
    return new Board(displayBoard.id, displayBoard.title, displayBoard.context, displayBoard.active, displayBoard.createdOn,
      this.getStringArrayFromCardArray(displayBoard.wentWell), this.getStringArrayFromCardArray(displayBoard.toImprove),
      this.getStringArrayFromCardArray(displayBoard.actionItem));

  }


  getCardArrayFromStringarray(requestArray: string[]): Card[] {
    let responseArray = new Array<Card>();
    requestArray.forEach(element => {
      responseArray.push(new Card(element))
    });
    return responseArray;
  }

  getStringArrayFromCardArray(requestArray: Card[]): string[] {
    let responseArray = new Array<string>();
    requestArray.forEach(element => {
      responseArray.push(element.text)
    });
    return responseArray;
  }


  openCardDeleteDialog(input, index) {
    console.log("logout");
    const dialogRef = this.dialog.open(LogoutDialogComponent, {
      data: { displayText: "Do u Really Want To Delete !!!" }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (input === 1) {
          this.displayBoard.wentWell.splice(index, 1);
          this.board.wentWell.splice(index, 1);

        } else if (input === 2) {
          this.displayBoard.toImprove.splice(index, 1);
          this.board.toImprove.splice(index, 1);

        } else if (input === 3) {
          this.displayBoard.actionItem.splice(index, 1);
          this.board.actionItem.splice(index, 1)
        }
        console.log("Deleting Card");
      }
    });
  }

  addNewCard(input) {
    console.log("Adding new card");
    if (input === 1) {
      this.displayBoard.wentWell.unshift(new Card("", true));
    } else if (input === 2) {
      this.displayBoard.toImprove.unshift(new Card("", true));
    } else if (input === 3) {
      this.displayBoard.actionItem.unshift(new Card("", true));
    }
  }

  saveBoard() {
    console.log("Saving board");
    this.boardService.upsertBoard(this.getBoardFromDisplayBoard(this.displayBoard)).subscribe(
      data => {
        console.log("Board saved successfully");
        this.router.navigate(['dashboard']);
      },
      error => {
        console.error(error);
      }
    )
  }

  deleteBoard() {
    console.log("Deleting board");
    const dialogRef = this.dialog.open(LogoutDialogComponent, {
      data: { displayText: "Do u Really Want To Delete Board!!!" }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.displayBoard.active = false;
        this.boardService.upsertBoard(this.getBoardFromDisplayBoard(this.displayBoard)).subscribe(
          data => {
            console.log("Board Deleted successfully");
            this.router.navigate(['dashboard']);
          },
          error => {
            console.error(error);
          }
        )
      }
    });
  }

  downloadAsPDF(){
    
  }
}
