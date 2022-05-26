import data from '../src/data/rickandmorty/rickandmorty';
import {origin, species, status, orSelectFunc, spSelectFunc, stSelectFunc, soSelecFunc, showChar, textBarFunc} from '../src/data.js';

const myData = data.results;

let saveData = [   
  {  
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "origin": {
        "name": "Earth (C-137)",
    },
    "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg"
},
    {
    "name": "Morty Smith",
    "status": "Alive",
    "species": "Human",
    "origin": {
        "name": "Earth (C-137)",
    },
    "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg"
},
{
    "name": "Summer Smith",
    "status": "Alive",
    "species": "Human",
    "origin": {
        "name": "Earth (Replacement Dimension)",
    },
    "image": "https://raw.githubusercontent.com/Laboratoria/rick-and-morty-images/master/images/1.jpeg"
  }
];


describe('Tests for the file data.js', () => {

  it('has to return filtered characters by their origin', ()=>{
    const char = [{"origin": {"name": "Earth"}}, {"origin": {"name": "Earth"}}, {"origin": {"name": "Mars"}}];
    const result = ['Earth', 'Mars'];
    const originFunc = origin(char);
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
    const originSelected = 'Earth (C-137)'; 
    orSelectFunc(myData, originSelected);
    expect(typeof orSelectFunc).toBe("function");
  });
});

describe('Tests for the file data.js', () => {

  it('has to return filtered characters', ()=> {
    const speciesSelected = 'Human'; 
    spSelectFunc(myData, speciesSelected);
    expect(typeof spSelectFunc).toBe("function");
  });
});

describe('Tests for the file data.js', () => {

  it('has to return filtered characters', ()=> {
    const statusSelected = 'Alive'; 
    stSelectFunc(myData, statusSelected);
    expect(typeof stSelectFunc).toBe("function");
  });
});

describe('Tests for the file data.js', () => {

  it('has to return filtered characters', ()=> {
    const sortSelected = 'sortA'; 
    soSelecFunc(myData, sortSelected);
    expect(typeof soSelecFunc).toBe("function");
  });
});

describe('Tests for the file data.js', () => {

  it('has to return filtered characters', ()=> {
    const sortSelected = 'sortD'; 
    soSelecFunc(myData, sortSelected);
    expect(typeof soSelecFunc).toBe("function");
  });
});

describe('Tests for the file data.js', () => {

  it('has to return filtered characters', ()=> {
    let result = `
    <div>
    <img src="${myData.image}"</img>
        <div>
            <p ${myData.name}</p>
            <p ${myData.status}</p>
        </div>
    </div>
    `
    showChar(myData);
    expect(typeof showChar).toBe("function");
    expect(showChar).toContain(result);
  });
});


describe('Tests for the file data.js', () => {

  it('has to return filtered characters', ()=> {
    const searchString = 'rick'; 
    textBarFunc(saveData, searchString);
    expect(typeof textBarFunc).toBe("function");
  });
});
