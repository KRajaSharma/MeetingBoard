import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Board } from '../model/board';
import { SummaryBoards } from '../model/summaryBoard';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private httpClient: HttpClient) { }

  getSummaryBoards(){
    return this.httpClient.get<SummaryBoards[]>('http://localhost:8080/v1/board/_summary')
  }

  upsertBoard(request:Board){
    return this.httpClient.put<Board>('http://localhost:8080/v1/board',request);
  }

  getBoard(id:string){
    return this.httpClient.get<Board>('http://localhost:8080/v1/board/'+id);
  }
}
