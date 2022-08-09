import Dwarf from './Dwarf';

const pimba = [];

const a1 = new Dwarf('', 50);
pimba.push(a1.createdRacesInstances());
const a2 = new Dwarf('', 50);
pimba.push(a2.createdRacesInstances());

const a3 = new Dwarf('', 50);
pimba.push(a3.createdRacesInstances());

console.log(pimba);