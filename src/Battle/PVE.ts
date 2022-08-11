import Battle from './Battle';
import Character from '../Character';
import Monster from '../Monster';
import Fighter, { SimpleFighter } from '../Fighter';

class PVE extends Battle {
  private winner = 1;
  private loser = -1;
  constructor(
    protected player: Character | Fighter,
    private enemy: Monster[] | SimpleFighter[],
  ) {
    super(player);
  }

  fight(): number {
    while (this.player.lifePoints !== -1 && this.enemy.length > 0) {
      this.enemy.forEach((enmy) => {
        enmy.receiveDamage(this.player.strength);
        this.player.receiveDamage(enmy.strength);
      });
      const enemyDidDied = this.enemy.some((e) => e.lifePoints === -1);
      if (enemyDidDied) {
        return this.winner;
      }
    }
    return this.loser;
  }
}

export default PVE;