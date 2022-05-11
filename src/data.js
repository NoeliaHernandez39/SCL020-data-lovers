const textBar = document.getElementById('textBar');
export const textBarFunc = (myData) => {
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


export const origins = (myData) => {
  const allOrigin = myData.map(element => element.origin.name);
  const everyOrigin = Array.from(new Set(allOrigin));
  return everyOrigin;
}

export const species = (myData) => {
  const allSpecies = myData.map(element => element.species);
  const everySpecies = Array.from(new Set(allSpecies));
  return everySpecies;
}

export const status = (myData) => {
  const allStatus = myData.map(element => element.status);
  const everyStatus = Array.from(new Set(allStatus));
  return everyStatus;
}



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