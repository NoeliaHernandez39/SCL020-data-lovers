import data from './data/rickandmorty/rickandmorty.js';
import {showChar, textBarFun} from './data.js';
showChar(myData);
textBarFun(myData);

const myData = data.results;
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
