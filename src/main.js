import data from './data/rickandmorty/rickandmorty.js';
import {textBarFunc, origin, species, status, orSelectFunc , stSelectFunc, spSelectFunc, soSelecFunc, showChar} from './data.js';
const myData = data.results;
orSelectFunc(myData);
stSelectFunc(myData);
spSelectFunc(myData);
textBarFunc(myData); ////We call it at the bottom
soSelecFunc(myData);

let main = document.querySelector('main');
main.innerHTML = showChar(myData);

export const showNames = (item) => {
    for(let i = 0; i < item.length; i++){

        const firstDiv = document.createElement('div');
        main.appendChild(firstDiv).setAttribute('class', 'firstDiv');
    
        const img = document.createElement('img');
        img.src = myData[i].image;
        firstDiv.appendChild(img).setAttribute('class', 'imgCharacter');
    
        const divElement = document.createElement('div');
        firstDiv.appendChild(divElement).setAttribute('class', 'divElement');
    
        const nameP = document.createElement('p');
        divElement.appendChild(nameP).setAttribute('class', 'characterName');
        nameP.innerHTML = myData[i].name;
    
        const statusP = document.createElement('p');
        divElement.appendChild(statusP).setAttribute('class', 'characterStatus');
        statusP.innerHTML = myData[i].status;
    
        const originP = document.createElement('p');
        divElement.appendChild(originP).setAttribute('class', 'characterOrigin');
        originP.innerHTML = 'Origin:</br>' + myData[i].origin.name;
    }
}
showNames(myData);

////WHY IS IT EXPORTED????????????
//Modify the DOM and display the options
let optionOrigin = origin(myData);
export const showOptionOrigin = () => {
    for(let i = 0; i < optionOrigin.length; i++){
        let selectOrigin = document.getElementById('origin-select');
        let selectOptionOrigin = document.createElement('option');
        selectOrigin.appendChild(selectOptionOrigin);
        selectOptionOrigin.innerHTML = optionOrigin[i];
    }
}
showOptionOrigin();

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

// muestra personajes filtrados (main)
let selectOrigin = document.getElementById('origin-select');
    selectOrigin.addEventListener('change', () => {
    let originSelected = selectOrigin.value;
    let orResults = orSelectFunc(myData, originSelected);
    main.innerHTML = orResults;
    if(originSelected === 'origin'){
        return showNames(myData);
    }
});

let selectSpecies = document.getElementById('species-select');
selectSpecies.addEventListener('change', () => {
    let speciesSelected = selectSpecies.value;
    let spResults = spSelectFunc(myData, speciesSelected);
    main.innerHTML = spResults;
    if(speciesSelected === 'species'){
        return showNames(myData);
    }
});

let selectStatus = document.getElementById('status-select');
selectStatus.addEventListener('change', () => {
    let statusSelected = selectStatus.value;
    let stResults = stSelectFunc(myData, statusSelected);
    main.innerHTML = stResults;
    if(statusSelected === 'status'){
        return showNames(myData);
    }
});

const selectSort = document.getElementById('sort-select');
selectSort.addEventListener ('change', () => {
    let sortSelected = selectSort.value;
    let soResults = soSelecFunc(myData, sortSelected);
    main.innerHTML = soResults;
});

//search for characters when a key is released
const textBar = document.getElementById('textBar');
textBar.addEventListener('keyup', () => {
    const searchString = textBar.value.toLowerCase();
    let textBarResults = textBarFunc(myData, searchString);
    main.innerHTML = textBarResults;
});