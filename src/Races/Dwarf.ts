import Race from './Race';

export default class Dwarf extends Race {
  static instances = 0; 
  private _maxLifePoints: number;
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 80;
  }

  static createdRacesInstances(): number {
    this.instances += 1;
    return this.instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
