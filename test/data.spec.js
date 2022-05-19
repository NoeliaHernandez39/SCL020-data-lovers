import {textBarFunc, filteredCharaters, origins} from '../src/data.js';



describe('Tests for the file data.js', () => {
  test('this function textBarFun should return the characters that match the search value', ()=> {
    expect(textBarFunc).toContain(filteredCharaters);
    });

  test('this function origins should return each origin', ()=> {
    let data = [{'origin': 'earth'}, {'origin': 'mars'}, {'origin': 'saturn'},  {'origin': 'saturn'}];
    const origins1 = origins(data);
    let everyOrigin = ['earth', 'mars', 'saturn'];
    expect(origins1).toContain(everyOrigin);
  });
});

  

// describe('esta test suma', () => {
//   test('is a function', () => {
//     expect(sumar(1,2)).toBe(3);
//   });
// });


