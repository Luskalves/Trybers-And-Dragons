abstract class Race {
  protected instances = 0;
  constructor(private _name: string, private _dexterity: number) { 
    this.instances += 1;
  }
  
  get name() {
    return this._name;
  }

  get dexterity() {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;
