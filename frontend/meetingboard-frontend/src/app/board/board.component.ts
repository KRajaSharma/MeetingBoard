import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Board } from '../model/board';
import { BoardService } from '../service/board.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  boardId : string;
  board : Board;
  constructor(private route: ActivatedRoute,private boardService:BoardService) {

   }

  ngOnInit(): void {
    this.route.params.subscribe( params =>{this.boardId = params.id; console.log(params) });
    this.boardService.getBoard(this.boardId).subscribe(
      data => {
        this.board = data;
      },
      error => {
        console.error(error);
      }
    )
  }

}
