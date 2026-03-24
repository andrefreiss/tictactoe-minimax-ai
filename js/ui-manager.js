class UIManager {
  constructor() {
      this.game = new Game();
      this.agent = new Agent();
      this.render();
      this.difficulty = 'hard';
  }

  setDifficulty(level) {
      this.difficulty = level;
      document.querySelectorAll('.btn-diff').forEach(btn => btn.classList.remove('active'));
      const activeBtn = document.getElementById(`btn-${level}`);
      if (activeBtn) activeBtn.classList.add('active');

      this.nextRound();
  }

  render() {
      const boardEl = document.getElementById('board');
      boardEl.innerHTML = '';
      this.game.board.forEach((val, i) => {
          const cell = document.createElement('div');
          cell.className = `cell ${val === -1 ? 'x' : val === 1 ? 'o' : ''} ${val !== 0 ? 'occupied' : ''}`;
          cell.innerText = val === -1 ? 'X' : val === 1 ? 'O' : '';
          cell.onclick = () => this.handleMove(i);
          boardEl.appendChild(cell);
      });
  }

  handleMove(i) {
      if (this.game.currentPlayer !== -1 || this.game.checkWinner() !== null || this.game.board[i] !== 0) return;

      this.game.makeMove(i);
      this.render();

      let winner = this.game.checkWinner();
      if (winner !== null) return this.endGame(winner);

      document.getElementById('status-text').innerText = "IA Calculando...";
      document.getElementById('ai-status').innerText = "Calculando...";
      
      setTimeout(() => this.iaMove(), 400);
  }

  iaMove() {
    const board = [...this.game.board];
    let action;

    const rand = Math.random();
    let errorChance = 0;

    if (this.difficulty === 'easy') errorChance = 0.7;
    else if (this.difficulty === 'medium') errorChance = 0.3;

    if (rand < errorChance) {
        const moves = board.map((v, i) => v === 0 ? i : null).filter(v => v !== null);
        action = moves[Math.floor(Math.random() * moves.length)];
    } else {
        action = this.agent.getBestAction(board);
    }

    this.game.makeMove(action);
    this.render();

    const winner = this.game.checkWinner();
    document.getElementById('ai-status').innerText = "Pronta";

    if (winner !== null) {
        this.endGame(winner);
    } else {
        document.getElementById('status-text').innerText = "Sua vez.";
    }
  }

  endGame(winner) {
      const status = document.getElementById('status-text');
      if (winner === 1) status.innerText = "IA Venceu!";
      else if (winner === -1) status.innerText = "Você Venceu!";
      else status.innerText = "Empate.";
      
      document.getElementById('btn-next').style.display = 'block';
  }

  nextRound() {
      this.game.reset();
      document.getElementById('status-text').innerText = "Sua vez.";
      document.getElementById('btn-next').style.display = 'none';
      this.render();
  }
}

const app = new UIManager();