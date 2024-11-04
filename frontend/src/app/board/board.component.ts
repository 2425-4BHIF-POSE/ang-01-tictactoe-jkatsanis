import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {
    protected board: string[][];
    protected currentPlayer: string;
    protected winner: string | null;

    constructor() {
      this.board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ];
    this.currentPlayer = 'X';
    this.winner = null;
  }

  checkWinner() {
    const winningCombinations = [
      [[0, 0], [0, 1], [0, 2]],
      [[1, 0], [1, 1], [1, 2]],
      [[2, 0], [2, 1], [2, 2]],
      [[0, 0], [1, 0], [2, 0]],
      [[0, 1], [1, 1], [2, 1]],
      [[0, 2], [1, 2], [2, 2]],
      [[0, 0], [1, 1], [2, 2]],
      [[0, 2], [1, 1], [2, 0]],
    ];

    for (const combination of winningCombinations) {
      const [[a, b], [c, d], [e, f]] = combination;
      if (this.board[a][b] && this.board[a][b] === this.board[c][d] && this.board[a][b] === this.board[e][f]) {
        this.winner = this.board[a][b];
      }
    }



    if (!this.board.flat().includes('') && !this.winner) {
      this.winner = 'Draw';
    }
  }



onItemClick(row: number, col: number): void {
    console.log(`Row: ${row}, Column: ${col}`);
    this.board[row][col] = this.currentPlayer;

    this.checkWinner();

    if(this.currentPlayer === 'X')
    {
      this.currentPlayer = 'O'
      return;
    }
    this.currentPlayer = 'X';

  }


}
