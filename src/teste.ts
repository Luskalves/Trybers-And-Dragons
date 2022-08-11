import Character from './Character';
import Monster from './Monster';
import PVE from './Battle/PVE';

const p1 = new Character('luska');
const p2 = new Monster();

const Battle = new PVE(p1, [p2]);

console.log(Battle.fight());