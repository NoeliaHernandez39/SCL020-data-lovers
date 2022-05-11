const textBar = document.getElementById('textBar');
export const textBarFun = (myData) => {
  textBar.addEventListener('keyup', () => {
    console.log(textBar.value);
    const searchString = textBar.value.toLowerCase();

    const filteredCharaters = myData.filter((character) => {
        return (
            character.name.toLowerCase().includes(searchString)
        );
    });
    console.log(filteredCharaters);
    showChar(filteredCharaters);
  })
}

export const showChar = (characters) =>{
  const showFilterChar = characters.map((character) => {
      return `
      <div class="firstDiv">
      <img src="${character.image}" class="imgCharacter"></img>
          <div class="divElement">
              <p class="characterName">${character.name}</p>
              <p class="characterStatus">${character.status}</p>
              <p class="characterOrigin">Origin:</br>${character.origin.name}</p>
          </div>
      </div>
      `
  })
  main.innerHTML = showFilterChar;
}









/*export const selectedOptions = (myData) => {

  const allGender = myData.map(element => element.gender);
  //console.log(allGender);
  const everyGender = Array.from(new Set(allGender));
  //console.log(everyGender);


  const allSpecies = myData.map(element => element.species);
  const everySpecie = Array.from(new Set(allSpecies));
// console.log(everySpecie);

  const allCharacter = myData.map(element => element.name);
  const everyCharacter = Array.from(new Set(allCharacter));
}*/




/*const genderMale = results1.filter((genderMale) => genderMale.gender === 'Male');
console.log(genderMale);

const genderFemale = results1.filter((genderFemale) => genderFemale.gender === 'Female');
console.log(genderFemale);

const genderUnknown = results1.filter((genderUnknown) => genderUnknown.gender === 'unknown');
console.log(genderUnknown);

const nogender = results1.filter((nogender) => nogender.gender === 'Genderless');
console.log(nogender);*/



/*const genderMale = gender.filter((genderMale) => genderMale.gender === 'Male');
console.log(genderMale);

const genderLess = gender.filter((genderLess) => genderLess.gender === 'Genderless');
console.log(genderLess);*/

// const everyOrigin = allOrigin.filter((valor, indice) => {
//     return allOrigin.indexOf(valor) === indice;
// });
// console.log(everyOrigin)

// const everyOrigin1 = new Set(allOrigin);
// const unicos = [... everyOrigin1];

// console.log(unicos);