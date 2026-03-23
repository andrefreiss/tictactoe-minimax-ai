class Game {
  constructor() {
    this.reset();
  }

  makeMove(index) {
    if (this.board[index] !== 0) return false;
    this.board[index] = this.currentPlayer;
    this.currentPlayer = (this.currentPlayer === -1) ? 1 : -1;
    return true;
  }

  checkWinner() {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
    for (let [a, b, c] of lines) {
      if (this.board[a] !== 0 && this.board[a] === this.board[b] && this.board[a] === this.board[c]) {
        return this.board[a];
      }
    }
    return this.board.includes(0) ? null : 0;
  }

  reset() {
    this.board = Array(9).fill(0);
    this.currentPlayer = -1;
  }
}