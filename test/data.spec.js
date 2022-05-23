import { it } from 'eslint/lib/rule-tester/rule-tester';
import {origins,
        species,
        status
} from '../src/data.js';

// let myData = [      {
//   "id": 8,
//   "name": "Adjudicator Rick",
//   "status": "Dead",
//   "species": "Human",
//   "type": "",
//   "gender": "Male",
//   "origin": {
//       "name": "unknown",
//       "url": ""
//   },
//   "location": {
//       "name": "Citadel of Ricks",
//       "url": "https://rickandmortyapi.com/api/location/3"
//   },
//   "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/8.jpeg",
//   "episode": [
//       "https://rickandmortyapi.com/api/episode/28"
//   ],
//   "url": "https://rickandmortyapi.com/api/character/8",
//   "created": "2017-11-04T20:03:34.737Z"
// },      
// {
//   "id": 7,
//   "name": "Abradolf Lincler",
//   "status": "unknown",
//   "species": "Human",
//   "type": "Genetic experiment",
//   "gender": "Male",
//   "origin": {
//       "name": "Earth (Replacement Dimension)",
//       "url": "https://rickandmortyapi.com/api/location/20"
//   },
//   "location": {
//       "name": "Testicle Monster Dimension",
//       "url": "https://rickandmortyapi.com/api/location/21"
//   },
//   "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/7.jpeg",
//   "episode": [
//       "https://rickandmortyapi.com/api/episode/10",
//       "https://rickandmortyapi.com/api/episode/11"
//   ],
//   "url": "https://rickandmortyapi.com/api/character/7",
//   "created": "2017-11-04T19:59:20.523Z"
// }];

// let result = [{
//   "id": 8,
//   "name": "Adjudicator Rick",
//   "status": "Dead",
//   "species": "Human",
//   "type": "",
//   "gender": "Male",
//   "origin": {
//       "name": "unknown",
//       "url": ""
//   },
//   "location": {
//       "name": "Citadel of Ricks",
//       "url": "https://rickandmortyapi.com/api/location/3"
//   },
//   "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/8.jpeg",
//   "episode": [
//       "https://rickandmortyapi.com/api/episode/28"
//   ],
//   "url": "https://rickandmortyapi.com/api/character/8",
//   "created": "2017-11-04T20:03:34.737Z"
// }];

describe('Tests for the file data.js', () => {

  it('has to return filtered characters by their origin', ()=>{
    const originChar = [{'origin': 'Earth'}, {'origin': 'Mars'}];
    const result = originChar.origin;
    const originFunc = origins(originChar);
    expect(originFunc).toContain(result);
    });

  it('has to return filtered character by their species', ()=>{
    const speciesChar = [[{'specie': 'Human'}], [{'specie': 'Alien'}]];
    const result = speciesChar.specie;
    const speciesFunc = species(speciesChar);
    expect(speciesFunc).toContain(result);
  });

  it('has to return filtered characters by their status', ()=>{
    const statusChar = [[{'status': 'a'}], [{'status': 'b'}]]
    const result = statusChar.status;
    const statusFunc = status(statusChar);
    expect(statusFunc).toContain(result);
  });

  
});