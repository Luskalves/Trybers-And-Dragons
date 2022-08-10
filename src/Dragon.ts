import Monster from './Monster';

class Dragon extends Monster {
  constructor(
    protected _lifePoints: number = 999,
  ) {
    super(_lifePoints);
  }
}

export default Dragon;