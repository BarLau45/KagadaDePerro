import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BoardGetterService {
  readonly BOARD_URL = 'https://localhost:7257/api/Boards/list';

  boards: any[];

  constructor(private httpClient: HttpClient) {
    this.boards = [];
  }

  getBoards() {
    return this.httpClient.get<any[]>(this.BOARD_URL)
  }

  getBoardById(id: number): Observable<any> {
    const url = `${this.BOARD_URL}/${id}`;
    return this.httpClient.get(url);
  }

  createBoard(data: any): Observable<any> {
    return this.httpClient.post(this.BOARD_URL, data);
  }

  updateBoard(id: number, data: any): Observable<any> {
    const url = `${this.BOARD_URL}/${id}`;
    return this.httpClient.put(url, data);
  }

  deleteBoard(id: number): Observable<any> {
    const url = `${this.BOARD_URL}/${id}`;
    return this.httpClient.delete(url);
  }
}
