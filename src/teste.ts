import Character from './Character';

const elf = new Character('luska');

console.log(elf.lifePoints);
console.log(elf.defense);
console.log(elf.receiveDamage(500));