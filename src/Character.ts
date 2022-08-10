import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

function randomNumber(): number {
  return Math.floor(Math.random() * 10) + 1;
} 
  
class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype;
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(_name: string) {
    this._dexterity = randomNumber();
    this._race = new Elf(_name, this._dexterity);
    this._archetype = new Mage(_name);
    this._maxLifePoints = this._race.maxLifePoints;
    this._lifePoints = this._maxLifePoints;
    this._strength = randomNumber();
    this._defense = randomNumber();
    this._energy = {
      type_: this._archetype.energyType,
      amount: randomNumber(),
    }; 
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this.archetype;
  }

  get lifePoints(): number {
    return this._lifePoints;
  }

  get strength(): number {
    return this._strength;
  }

  get defense(): number {
    return this._defense;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  get energy(): Energy {
    const energyCharacter = { 
      amount: this._energy.amount,
      type_: this._energy.type_,
    };
    return energyCharacter;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  receiveDamage(attackPoints: number): number {
    const realDamage = attackPoints - this._defense;
    if (realDamage > 0) {
      const actualLife = this._lifePoints - realDamage;
    
      this._lifePoints = actualLife;
      if (this._lifePoints <= 0) this._lifePoints = -1;
    }

    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    const realDamage = enemy.defense - this._strength;
    enemy.receiveDamage(realDamage);
  }

  levelUp(): void {
    this._maxLifePoints += randomNumber();
    this._strength += randomNumber();
    this._dexterity += randomNumber();
    this._defense += randomNumber();
    this._energy.amount = 10;

    const raceMaxPoints = this._race.maxLifePoints;
    if (this._maxLifePoints > raceMaxPoints) {
      this._maxLifePoints = this._race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }
  
  special(enemy: Fighter): void {
    let MEGA_POWER = this._strength * 10;

    if (this._energy.amount === 10) {
      MEGA_POWER += 50;
    }
    enemy.receiveDamage(MEGA_POWER);
  }
}

export default Character;