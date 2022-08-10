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
    console.log(this.player1.strength);
    this.player1.receiveDamage(this.player2.strength);
    this.player2.attack(this.player2);
    return this.player1.lifePoints;
  }
}

export default PVP;