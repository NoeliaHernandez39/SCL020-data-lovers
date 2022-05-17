import {showNames} from './main.js'
//filtra personajes por barra de busqueda
const textBar = document.getElementById('textBar');
export const textBarFunc = myData => {
    textBar.addEventListener('keyup', () => {
    console.log(textBar.value);
    const searchString = textBar.value.toLowerCase();

    const filteredCharaters = myData.filter(character => {
        return (
            character.name.toLowerCase().includes(searchString)
        );
    });
    console.log(filteredCharaters);
    showChar(filteredCharaters);
    });
}


// muestra opciones de filtrado
export const origins = myData => {
    const allOrigin = myData.map(element => element.origin.name);
    const everyOrigin = Array.from(new Set(allOrigin));
    return everyOrigin;
}

export const species = myData => {
    const allSpecies = myData.map(element => element.species);
    const everySpecies = Array.from(new Set(allSpecies));
    return everySpecies;
}

export const status = myData => {
    const allStatus = myData.map(element => element.status);
    const everyStatus = Array.from(new Set(allStatus));
    return everyStatus;
}

// muestra personajes filtrados 

let selectOrigin = document.getElementById('origin-select');
export const orSelectFunc = myData => {
    selectOrigin.addEventListener('change', () =>{
        let originSelected = selectOrigin.value;
        const filteredOriginCharaters = myData.filter((character) => {
            return (
                character.origin.name.includes(originSelected)
            );
        });
        showChar(filteredOriginCharaters);

        if(originSelected === 'origin'){
            return showNames(myData);
        }
    });
}


export const spSelectFunc = (myData, speciesSelected) => {
        const filteredSpeciesCharaters = myData.filter((character) => {
            return (
                character.species.includes(speciesSelected)
            );
        });
        return showChar(filteredSpeciesCharaters);
         if(speciesSelected === 'species'){
            return showNames(myData);
        }
}


let selectStatus = document.getElementById('status-select');
export const stSelectFunc = myData => {
    selectStatus.addEventListener('change', () =>{
        let statusSelected = selectStatus.value;
        const filteredStatusCharaters = myData.filter((character) => {
            return (
                character.status.includes(statusSelected)
            );
        });
        showChar(filteredStatusCharaters);

        if(statusSelected === 'status'){
            return showNames(myData);
        }
    });
}

const selectSort = document.getElementById('sort-select');
export const soSelecFunc = myData => {
    selectSort.addEventListener ('click', () => {
        let selectedSort = selectSort.value;
        let arr= [...myData]
        if (selectedSort === 'sortA'){
            const sortedCharA = arr.sort((a, b) => {
                if (a.name < b.name) return -1;
                return 1;
            });
            console.log(myData, sortedCharA)
            return showChar(sortedCharA);
        }
        else if (selectedSort === 'sortD') {
            const sortedCharD = arr.sort((a, b) => {
                if (a.name < b.name) return 1;
                return -1;
            });
            return showChar(sortedCharD);
        }
        else{
        return showChar(myData);}
    });
}

export const showChar = characters => {
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
    });
    return showFilterChar.join('');
}




