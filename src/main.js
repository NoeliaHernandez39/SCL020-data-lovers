import data from './data/rickandmorty/rickandmorty.js';
import {showChar, textBarFunc, origins, species, status} from './data.js';
const myData = data.results;
showChar(myData);
textBarFunc(myData);

let main = document.getElementById('main');

const showNames = () => {
    for(let i = 0; i < myData.length; i++){

        let firstDiv = document.createElement('div');
        main.appendChild(firstDiv);
        firstDiv.setAttribute('class', 'firstDiv');

        let image = document.createElement('img');
        firstDiv.appendChild(image);
        image.src = myData[i].image;
        image.setAttribute('class', 'imgCharacter');

        let divElement = document.createElement('div');
        firstDiv.appendChild(divElement);
        divElement.setAttribute('class', 'divElement');

        let nameP = document.createElement('p');
        divElement.appendChild(nameP);
        nameP.innerHTML = myData[i].name;
        nameP.setAttribute('class', 'characterName');

        let statusP = document.createElement('p');
        divElement.appendChild(statusP);
        statusP.innerHTML = myData[i].status;
        statusP.setAttribute('class', 'characterStatus');
        
        let originP = document.createElement('p');
        divElement.appendChild(originP);
        originP.innerHTML = 'Origin:</br>' + myData[i].origin.name;
        originP.setAttribute('class', 'characterOrigin');
    }
}
showNames();

let optionOrigin = origins(myData);
const showOptionOrigins = () => {
    for(let i = 0; i < optionOrigin.length; i++){
        let selectOrigin = document.getElementById('origin-select');
        let selectOptionOrigin = document.createElement('option');
        selectOrigin.appendChild(selectOptionOrigin);
        selectOptionOrigin.innerHTML = optionOrigin[i];
    }
}
showOptionOrigins();

let optionSpecies = species(myData);
const showOptionSpecies = () => {
    for(let i = 0; i < optionSpecies.length; i++){
        let selectSpecie = document.getElementById('species-select');
        let selectOptionSpecie = document.createElement('option');
        selectSpecie.appendChild(selectOptionSpecie);
        selectOptionSpecie.innerHTML = optionSpecies[i];
    }
}
showOptionSpecies();

let optionStatus = status(myData);
const showOptionStatus = () => {
    for(let i = 0; i < optionStatus.length; i++){
        let selectStatus = document.getElementById('status-select');
        let selectOptionStatus = document.createElement('option');
        selectStatus.appendChild(selectOptionStatus);
        selectOptionStatus.innerHTML = optionStatus[i];
    }
}
showOptionStatus();


