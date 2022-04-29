
export const getGender = (results1) => {
  //console.log(results1);

  let allGender = results1.map(elemento => elemento.gender);
  //console.log(allGender);

  let everyGender = [];
  for (let i = 0; i < allGender.length; i++){
      if(!everyGender.includes(allGender[i])){
          everyGender.push(allGender[i]);
      }
  }
  console.log(everyGender);
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