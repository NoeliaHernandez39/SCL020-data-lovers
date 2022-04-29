//import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
import {getGender} from './data.js';

const results1 = data.results;

const personaje1 = results1[0];
console.log(personaje1);

//export const names = results1.map((character) => character.name);

getGender(results1);




