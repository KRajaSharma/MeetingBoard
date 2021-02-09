import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SummaryBoards } from '../model/summaryBoard';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  constructor(private httpClient: HttpClient) { }

  getSummaryBoards(){
    return this.httpClient.get<SummaryBoards[]>('http://localhost:8080/v1/board/_summary')
  }

}
