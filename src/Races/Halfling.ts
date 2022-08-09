import Race from './Race';

export default class Halfling extends Race {
  static instances = 0; 
  private _maxLifePoints: number;
  constructor(
    name: string,
    dexterity: number,
  ) {
    super(name, dexterity);
    this._maxLifePoints = 60;
  }

  static createdRacesInstances(): number {
    this.instances += 1;
    return this.instances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}
