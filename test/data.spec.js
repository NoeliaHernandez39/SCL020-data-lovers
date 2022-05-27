import {origin, species, status, textBarFunc, stSelectFunc, sortSelecFunc, orSelectFunc, spSelectFunc, showChar} from '../src/data.js';

let myData = [   
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
    expect(originFunc).not.toEqual(char);
    });

  it('has to return filtered character by their species', ()=>{
    const speciesChar = [{'species': 'Human'}, {'species': 'Human'}, {'species': 'Alien'}];
    const result = ['Human', 'Alien'];
    const speciesFunc = species(speciesChar);
    expect(speciesFunc).toEqual(result);
    expect(speciesFunc).not.toEqual(speciesChar);
  });

  it('has to return filtered characters by their status', ()=>{
    const statusChar = [{'status': 'Alive'}, {'status': 'Alive'}, {'status': 'Dead'}];
    const result = ['Alive', 'Dead'];
    const statusFunc = status(statusChar);
    expect(statusFunc).toEqual(result);
    expect(statusFunc).not.toEqual(statusChar);
  });
  
  it('filter character by its search value', ()=> {
    const searchString = 'rick';
    const func = textBarFunc (myData, searchString);
    expect(func).toContain(searchString);
    expect(func).not.toEqual(myData);
  });
});

describe('Tests for the file data.js', () => {
  it('has to return filtered characters', ()=> {
    const originSelected = 'Earth (C-137)'; 
    const func = orSelectFunc(myData, originSelected);
    expect(typeof orSelectFunc).toBe("function");
    expect(func).not.toEqual(myData);
  });
});

describe('Tests for the file data.js', () => {

  it('has to return filtered characters', ()=> {
    const speciesSelected = 'Human'; 
    const func = spSelectFunc(myData, speciesSelected);
    expect(typeof spSelectFunc).toBe("function");
    expect(func).not.toEqual(myData);
  });
});

describe('Tests for the file data.js', () => {

  it('has to return filtered characters', ()=> {
    const statusSelected = 'Alive'; 
    const func = stSelectFunc(myData, statusSelected);
    expect(typeof stSelectFunc).toBe("function");
    expect(func).not.toEqual(myData);
  });
});

describe('Tests for the file data.js', () => {

  it('has to return filtered characters', ()=> {
    const sortSelected = 'sortA'; 
    const func = sortSelecFunc(myData, sortSelected);
    expect(typeof sortSelecFunc).toBe("function");
    expect(func).not.toEqual(myData);
  });
});

describe('Tests for the file data.js', () => {

  it('has to return filtered characters', ()=> {
    const sortSelected = 'sortD'; 
    const func = sortSelecFunc(myData, sortSelected);
    expect(typeof sortSelecFunc).toBe("function");
    expect(func).not.toEqual(myData);
  });
});

describe('Tests for the file data.js', () => {

  it('has to return filtered characters', ()=> {
    const func = showChar(myData);
    expect(typeof showChar).toBe("function");
    expect(func).not.toEqual(myData);
  });
});


describe('Tests for the file data.js', () => {

  it('has to return filtered characters', ()=> {
    const searchString = 'rick'; 
    const func = textBarFunc(myData, searchString);
    expect(typeof textBarFunc).toBe("function");
    expect(func).not.toEqual(myData);
  });
});