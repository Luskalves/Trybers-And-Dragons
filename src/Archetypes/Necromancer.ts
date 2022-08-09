import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Necromancer extends Archetype {
  static instances = 0;
  private _energyType: EnergyType = 'mana';

  static createdArchetypeInstances(): number {
    this.instances += 1;
    return this.instances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;