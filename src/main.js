import data from './data/rickandmorty/rickandmorty.js';
import {selectedOptions} from './data.js';
const myData = data.results;
selectedOptions(myData);

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
        originP.innerHTML = 'Origin:</br>' +myData[i].origin.name;
        originP.setAttribute('class', 'characterOrigin');
    }
}
showNames();


const textBar = document.getElementById('textBar');
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

/*const showChar = (characters) =>{
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
}*/

