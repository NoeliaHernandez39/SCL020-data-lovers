import {sumar} from '../src/data.js';


describe('esta test suma', () => {
  test('is a function', () => {
    expect(sumar(1,2)).toBe(3);
  });
});


// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
