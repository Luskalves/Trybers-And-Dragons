import Fighter from '../Fighter';
import Battle from './Battle';

class PVP extends Battle {
  protected winner = 1;
  protected loser = -1;
  constructor(
    protected player1: Fighter,
    protected player2: Fighter,
  ) {
    super(player1);
  }

  fight(): number {
    while (this.player1.lifePoints > -1 && this.player2.lifePoints > -1) {
      this.player1.receiveDamage(this.player2.strength);
      this.player2.receiveDamage(this.player1.strength);
    }
    if (this.player1.lifePoints > -1) {
      return this.winner;
    }
    return this.loser;
  }
}

export default PVP;