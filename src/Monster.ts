import { SimpleFighter } from './Fighter';

class Monster implements SimpleFighter {
  constructor(
    protected _lifePoints: number = 85,
    protected _strength: number = 63,
  ) {}

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  receiveDamage(attackPoints: number): number {
    if (attackPoints > 0) {
      const actualLife = this._lifePoints - attackPoints;
      this._lifePoints = actualLife;

      if (this._lifePoints <= 0) this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}

export default Monster;