import { it } from 'eslint/lib/rule-tester/rule-tester';
import {origins,
        species,
        status,
        textBarFunc
} from '../src/data.js';

describe('Tests for the file data.js', () => {

  it('has to return filtered characters by their origin', ()=>{
    const char = [{"origin": {"name": "Earth"}}, {"origin": {"name": "Earth"}}, {"origin": {"name": "Mars"}}];
    const result = ['Earth', 'Mars'];
    const originFunc = origins(char);
    expect(originFunc).toEqual(result);
    });

  it('has to return filtered character by their species', ()=>{
    const speciesChar = [{'species': 'Human'}, {'species': 'Human'}, {'species': 'Alien'}];
    const result = ['Human', 'Alien'];
    const speciesFunc = species(speciesChar);
    expect(speciesFunc).toEqual(result);
  });

  it('has to return filtered characters by their status', ()=>{
    const statusChar = [{'status': 'Alive'}, {'status': 'Alive'}, {'status': 'Dead'}];
    const result = ['Alive', 'Dead'];
    const statusFunc = status(statusChar);
    expect(statusFunc).toEqual(result);
  });
});

describe('Tests for the file data.js', () => {
  it('has to return filtered characters', ()=> {
    let character = [{"name": "Rick", "status": "Alive", "species": "Human", "origin": {"name": "Earth"}, "image": "/images/1.jpeg"},
    {"name": "Morty", "status": "Alive", "species": "Human", "origin": {"name": "Earth"}, "image": "/images/2.jpeg"},
    {"name": "Summer", "status": "Alive", "species": "Human", "origin": {"name": "Earth"}, "image": "/images/3.jpeg"}];
    let searchString = `
    <div class="firstDiv">
    <img src="${character.image}" class="imgCharacter"></img>
        <div class="divElement">
            <p class="characterName">${character.name}</p>
            <p class="characterStatus">${character.status}</p>
        </div>
    </div>
    `;
    let textBarFunc1 = textBarFunc(character);
    expect(textBarFunc1).toEqual(searchString);
    });
});







{/* <p class="characterOrigin">Origin:</br>${character.origin.name}</p> */}













// describe('Tests for the file data.js', () => {

//   it('has to return filtered characters', ()=> {
//     let character = [[{'name' : 'rick'}], [{'image' : 'imagen.jpg'}], [{'status' : 'alive'}], [{'origin' : [{'name' : 'earth'}]}]];
//     let result =  `<div class="firstDiv">
//     <img src="${character.image}" class="imgCharacter"></img>
//         <div class="divElement">
//             <p class="characterName">${character.name}</p>
//             <p class="characterStatus">${character.status}</p>
//             <p class="characterOrigin">Origin:</br>${character.origin}</p>
//         </div>
//     </div>`
//     let result1 = result.join('');
//     let showChar1 = showChar(character);
//     expect(showChar1).toContain(result1);
//     });
// });