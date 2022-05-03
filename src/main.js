//import { example } from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
import {selectedOptions} from './data.js';
const myData = data.results;
selectedOptions(myData);

const showNames = () => {
    for(let i = 0; i < myData.length; i++){

        let main = document.getElementById('main');
        let firstDiv = document.createElement('div');
        main.appendChild(firstDiv);
        firstDiv.setAttribute('class', 'firstDiv');

        let image = document.createElement('img');
        firstDiv.appendChild(image);
        image.src = myData[i].image;

        let nameP = document.createElement('p');
        firstDiv.appendChild(nameP);
        nameP.innerHTML = myData[i].name;

        let statusP = document.createElement('p');
        firstDiv.appendChild(statusP);
        statusP.innerHTML = myData[i].status;
        
        let originP = document.createElement('p');
        firstDiv.appendChild(originP);
        originP.innerHTML = myData[i].origin.name;
    }
}
showNames();

const showCharacter = myData.map(elemento => {
    const name1 = elemento.name;
    const status1 = elemento.status;
    const origin1 = elemento.origin.name;
    console.log(name1, status1, origin1);
    const everyCharacter = Array.from;
    console.log(everyCharacter);
});




// const personaje1 = results1[0];
// console.log(personaje1);

//export const names = results1.map((character) => character.name);






