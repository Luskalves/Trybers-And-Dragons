import { PVP } from './Battle';
import Character from './Character';

const p1 = new Character('luska');
const p2 = new Character('looser');

const Battle = new PVP(p1, p2);

console.log(Battle.fight());