import Character from '../Character';
import Battle from './Battle';

class PVP extends Battle {
  protected winner = 1;
  protected loser = -1;
  constructor(
    protected player1: Character,
    protected player2: Character,
  ) {
    super(player1);
  }

  fight(): number {
    while (true) {
      this.player1.attack(this.player2);
      this.player2.attack(this.player2);
      if (this.player1
        .lifePoints === -1 || this.player2.lifePoints === -1) break;
      console.log('life p1:', this.player1.lifePoints);
      console.log('life p2:', this.player2.lifePoints);
    }
    if (this.player1.lifePoints > -1) {
      return this.winner;
    }
    return this.loser;
  }
}

export default PVP;