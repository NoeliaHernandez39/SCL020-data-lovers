import {textBarFunc, character} from '../src/data.js';



describe('Tests for the file data.js', () => {
  it('this function textBarFun should return the characters that match the search value', ()=> {
    const data = [{
    'name': 'Rick'}, {
    'name': 'Morty'
    }];
    expect(textBarFunc()).toContain(data);
    });

  it('this fuction has to return filtered characters', ()=> {
    expect(character).toContain(String);
    })
});

