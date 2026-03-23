class Agent {
  getBestAction(board) {
      let bestScore = -Infinity;
      let move;

      for (let i = 0; i < 9; i++) {
          if (board[i] === 0) {
              board[i] = 1;
              let score = this.minimax(board, 0, false);
              board[i] = 0;
              if (score > bestScore) {
                  bestScore = score;
                  move = i;
              }
          }
      }
      return move;
  }

  minimax(board, depth, isMaximizing) {
      let result = this.checkWinnerInternal(board);
      if (result !== null) {
          if (result === 1) return 10 - depth;
          if (result === -1) return depth - 10;
          return 0;
      }

      if (isMaximizing) {
          let bestScore = -Infinity;
          for (let i = 0; i < 9; i++) {
              if (board[i] === 0) {
                  board[i] = 1;
                  let score = this.minimax(board, depth + 1, false);
                  board[i] = 0;
                  bestScore = Math.max(score, bestScore);
              }
          }
          return bestScore;
      } else {
          let bestScore = Infinity;
          for (let i = 0; i < 9; i++) {
              if (board[i] === 0) {
                  board[i] = -1;
                  let score = this.minimax(board, depth + 1, true);
                  board[i] = 0;
                  bestScore = Math.min(score, bestScore);
              }
          }
          return bestScore;
      }
  }

  checkWinnerInternal(board) {
      const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
      for (let [a, b, c] of lines) {
          if (board[a] !== 0 && board[a] === board[b] && board[a] === board[c]) return board[a];
      }
      return board.includes(0) ? null : 0;
  }
}