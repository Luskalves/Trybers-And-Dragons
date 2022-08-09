abstract class Race {
  private _name: string;
  private dexterity: number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this.dexterity = dexterity;
  }

  get name(): string {
    return this.name;
  }
}