//if filter is true it puts the item back in the array??
export const textBarFunc = (myData, searchString) => {
        const filteredCharaters = myData.filter(character => {
        return (
            character.name.toLowerCase().includes(searchString)
        );
    });
    return showChar(filteredCharaters);
}



//Create a new array with no repeated elements
export const origins = myData => {
    const allOrigin = myData.map(element => element.origin.name);
    //eslint-disable-next-line
    const everyOrigin = Array.from(new Set(allOrigin));
    return everyOrigin;
}

export const species = myData => {
    let allSpecies = myData.map(element => element.species);
    //eslint-disable-next-line
    const everySpecies = Array.from(new Set(allSpecies));
    return everySpecies;
    
}

export const status = myData => {
    const allStatus = myData.map(element => element.status);
    //eslint-disable-next-line
    const everyStatus = Array.from(new Set(allStatus));
    return everyStatus;
}

// muestra personajes filtrados (data)
export const orSelectFunc = (myData, originSelected) => {
        const filteredOriginCharaters = myData.filter((character) => {
            return (
                character.origin.name.includes(originSelected)
            );
        });
        return showChar(filteredOriginCharaters);
}


export const spSelectFunc = (myData, speciesSelected) => {
        const filteredSpeciesCharaters = myData.filter((character) => {
            return (
                character.species.includes(speciesSelected)
            );
        });
        return showChar(filteredSpeciesCharaters);
}

export const stSelectFunc = (myData, statusSelected) => {
        const filteredStatusCharaters = myData.filter((character) => {
            return (
                character.status.includes(statusSelected)
            );
        });
        return showChar(filteredStatusCharaters);
}

export const soSelecFunc = (myData, sortSelected) => {
        let arr= [...myData]
        if (sortSelected === 'sortA'){
            const sortedCharA = arr.sort((a, b) => {
                if (a.name < b.name) return -1;
                return 1;
            });
            return showChar(sortedCharA);
        }
        else if (sortSelected === 'sortD') {
            const sortedCharD = arr.sort((a, b) => {
                if (a.name < b.name) return 1;
                return -1;
            });
            return showChar(sortedCharD);
        }
        else{
        return showChar(myData);
    }
}

export const showChar = myData => {
    const showFilterChar = myData.map((character) => {
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